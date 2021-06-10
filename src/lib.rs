mod utils;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

pub mod extract_comp;

pub mod test_utils {
    use std::io::Cursor;
    /// Returns reader which implements Read trait.
    /// - `s`: Data which should be yielded by the reader upon read
    pub fn return_reader (s: &[u8]) -> Cursor<&[u8]> {
        Cursor::new(s)
    }

    /// Returns a writer which implements Write trait.
    /// `writer.get_ref()[0..].to_vec()` can be used to get the data written to the writer.
    pub fn return_writer() -> Cursor<Vec<u8>> {
        Cursor::new(Vec::<u8>::new())
    }

    pub fn get_writer_content(writer: Cursor<Vec<u8>>) -> String {
        std::str::from_utf8(&writer.get_ref()[0..]).unwrap().to_string()
    }
}

pub mod io_utils {
    #[allow(unused_unsafe)]
    
    use js_sys::{ArrayBuffer, Uint8Array};
    use wasm_bindgen::prelude::*;
    use gloo::file::File;
        
    #[wasm_bindgen(module = "/js/exports.js")]
    //#[link(wasm_import_module = "/web_library_base_compositions.js")]
    extern "C" {
        pub fn get_file() -> web_sys::File; 
    }

    #[wasm_bindgen]
    extern "C" {
        #[wasm_bindgen(js_namespace = console)]
        pub fn debug(msg: &str);

        type FileReaderSync;

        #[wasm_bindgen(constructor)]
        fn new() -> FileReaderSync;

        #[wasm_bindgen(method)]
        fn readAsArrayBuffer(this: &FileReaderSync, blob: &web_sys::File) -> ArrayBuffer;
    }
    use std::io::{self, BufRead, BufReader, Read};


    // Credit to: mstange on GitHub
    // See: https://github.com/rustwasm/wasm-bindgen/issues/1079#issuecomment-508577627
    #[derive(Debug)]
    pub struct WasmMemBuffer {pos: u64, file: File}

    impl WasmMemBuffer {
        pub fn new() -> WasmMemBuffer {
            WasmMemBuffer {file: File::from(unsafe {get_file()}), pos: 0}
        }
    }

    impl Read for WasmMemBuffer {
        fn read(&mut self, buf: &mut [u8]) -> io::Result<usize> {
            let fr = FileReaderSync::new();
            let sl = self.file.slice(self.pos, self.pos + buf.len() as u64);
            let arr: Vec<u8> = Uint8Array::new(unsafe {&fr.readAsArrayBuffer(sl.as_ref())}).to_vec();
            let len = std::cmp::min(buf.len(), arr.len());

            buf[..len].copy_from_slice(&arr[..len]);

            self.pos += buf.len() as u64;
            Ok(len)
        }
    }

    use flate2::read::GzDecoder;
    // Reader is a wrapper over BufRead
    // And provides an interface over the actual reading.
    pub fn get_reader(compressed: bool) -> Box<dyn BufRead> {
        Box::new(BufReader::new(    
            if compressed {
                Box::new(GzDecoder::new(WasmMemBuffer::new()))
            } else {Box::new(WasmMemBuffer::new()) as Box<dyn Read>}
        ))
    }
}

use serde::{Serialize, Deserialize};

/// Represents a column of base composition data.
/// Contains base composition along with position information.
#[derive(Serialize, Deserialize, PartialEq, Debug)]
#[allow(non_snake_case)]
pub(crate) struct BaseCompCol {
    pub pos: usize,
    pub bases: BaseCompColBases,
}

/// Represents a column of base composition.
#[derive(Serialize, Deserialize, PartialEq, Debug, Copy, Clone)]
#[allow(non_snake_case)]
pub(crate) struct BaseCompColBases {
    pub A: usize,
    pub T: usize,
    pub G: usize,
    pub C: usize,
    pub N: usize,
}

/// Convenience struct for iterating over base composition
pub(crate) struct IterableBaseCompColBases {
    bases: BaseCompColBases,
    state: BaseCompColBasesIteratorState,
}

impl Iterator for IterableBaseCompColBases {
    type Item = usize;

    // VERY VERY IMP. If you change this, then also change the impl FromIterator<usize> for BaseCompColBases
    fn next(&mut self) -> Option<usize> {
        match self.state {
            BaseCompColBasesIteratorState::A => {self.state = BaseCompColBasesIteratorState::C; Some(self.bases.A)},
            BaseCompColBasesIteratorState::C => {self.state = BaseCompColBasesIteratorState::G; Some(self.bases.C)},
            BaseCompColBasesIteratorState::G => {self.state = BaseCompColBasesIteratorState::T; Some(self.bases.G)},
            BaseCompColBasesIteratorState::T => {self.state = BaseCompColBasesIteratorState::N; Some(self.bases.T)},
            BaseCompColBasesIteratorState::N => {self.state = BaseCompColBasesIteratorState::End; Some(self.bases.N)},
            _ => None
        }
    }
}

impl From<BaseCompColBases> for IterableBaseCompColBases {
    fn from(base_comp_col_bases: BaseCompColBases) -> IterableBaseCompColBases {
        IterableBaseCompColBases {
            bases: base_comp_col_bases,
            state: BaseCompColBasesIteratorState::A
        }
    }
}

#[derive(Clone, Copy)]
pub(crate) enum BaseCompColBasesIteratorState {
    A,
    C,
    G,
    T,
    N,
    End,
}

impl BaseCompColBases {
    pub fn iter(self) -> impl Iterator<Item = usize> {
        IntoIterator::into_iter(IterableBaseCompColBases::from(self))
    }

    pub fn new() -> BaseCompColBases {
        BaseCompColBases {A: 0, G: 0, T: 0, C: 0, N: 0}
    }

    pub fn percentage (&mut self) {
        let sum = self.iter().sum::<usize>() as f64;
        *self = self.iter().map(|base| ((base as f64 / sum)  * 100f64).round() as usize).collect();
    }
}

use std::iter::FromIterator;
impl FromIterator<usize> for BaseCompColBases {
    fn from_iter<I: IntoIterator<Item=usize>>(iter: I) -> Self {
        let mut c = IterableBaseCompColBases::from(BaseCompColBases {A: 0, G: 0, C: 0, T: 0, N: 0});
        let mut iter = iter.into_iter();

        for ele in &mut
        // VERY VERY IMP. If you change this, then also change the impl Iterator for IterableBaseCompColBases
        // so the corresponding bases are collected into their corresponding spaces
            [&mut c.bases.A,
             &mut c.bases.C,
             &mut c.bases.G,
             &mut c.bases.T, 
             &mut c.bases.N].iter_mut() {
            **ele = match iter.next() {
                Some(n) => n,
                None => panic!("Improper iterator recieved"),
            }
        }

        c.bases
    }
}

#[cfg(test)]
mod col_base_comp_tests {
    use super::*;

    #[test]
    fn test_iterability() {
        // test if conversion TO iterator works
        let mut read = BaseCompCol::new(0);
        read.extract(&b'A');

        let mut iter = read.bases.iter();
        assert_eq!(iter.next().unwrap(), 1);
        assert_eq!(iter.next().unwrap(), 0);

        // test if converstion FROM iterator works
        let mut read = BaseCompCol::new(0);
        read.extract(&b'A');

        let iter = read.bases.iter();
        let converted_read: BaseCompColBases = iter.collect();

        assert_eq!(converted_read, BaseCompColBases {A: 1, T: 0, G: 0, C: 0, N: 0});
    }

    #[test]
    fn test_extract() {
        let mut read = BaseCompCol::new(0);
        read.extract(&b'A');
        assert_eq!(read.bases.A, 1);

        read.extract(&b'C');
        assert_eq!(read.bases.C, 1);

        read.extract(&b'T');
        assert_eq!(read.bases.T, 1);

        read.extract(&b'G');
        assert_eq!(read.bases.G, 1);

        read.extract(&b'N');
        assert_eq!(read.bases.N, 1);
    }
    #[test]
    fn test_percentage() {
        let mut read = BaseCompCol::new(0);
        for c in "ACTGN".as_bytes().iter() {
            read.extract(c);
        }
        read.bases.percentage();

        println!("{:?}", read);

        assert_eq!(read.bases.A, 20, "Testing A");
        assert_eq!(read.bases.C, 20, "Testing C");
        assert_eq!(read.bases.T, 20, "Testing T");
        assert_eq!(read.bases.G, 20, "Testing G");
        assert_eq!(read.bases.N, 20, "Testing N");
    }
}

impl BaseCompCol {
    pub fn new (pos: usize) -> BaseCompCol {
        BaseCompCol {pos, bases: BaseCompColBases {A: 0, T: 0, G: 0, C: 0, N: 0}}
    }

    pub fn extract (&mut self, s: &u8) {
        match s {
            b'A' => self.bases.A += 1,
            b'T' => self.bases.T += 1,
            b'G' => self.bases.G += 1,
            b'C' => self.bases.C += 1,
            b'N' => self.bases.N += 1,
            _ => panic!("Invalid character {:?} == {:?} found in read", *s as char, s.to_ascii_lowercase())
        }            
    }

    
}

/// Represents the entire base composition.
/// As a Vec of Reads, each of which hold data for a single column
#[derive(Serialize, Deserialize, Debug)]
pub(crate) struct BaseComp {
    pub lib: Vec<BaseCompCol>,
    len: usize,
}

impl BaseComp {
    pub fn init (len: usize) -> BaseComp {
        let mut base_comp = BaseComp { lib: Vec::with_capacity(len), len};
        for i in 1..=len {
            base_comp.lib.push(BaseCompCol::new(i));
        }

        base_comp
    }

    pub fn len (&self) -> usize {
        self.lib.len()
    }

    pub fn extract (&mut self, s: &str) {
        for c in s.as_bytes().iter().enumerate() {
            self.lib[c.0].extract(c.1);
        }
    }

    pub fn jsonify (&mut self) -> String {
        self.len = BaseComp::len(&self);
        serde_json::to_string(&self).expect("Error encountered JSONifying data")
    }
}