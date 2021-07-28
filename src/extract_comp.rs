use fastq2comp::extract_comp::{FASTQReader, SampleArgs as InternalSampleArgs, run_json, run_tsv};

use wasm_bindgen::prelude::wasm_bindgen;
#[wasm_bindgen]
#[derive(Debug)]
pub struct SampleArgs {
    /// Target sample count
    pub target_read_count: u64,

    /// Sets minimum average quality allowed in sampled reads.
    pub min_phred_score: usize,
    /// Sets maximum amount of N's allowed in sample reads.
    pub n_content: Option<usize>,
    /// Trims each sampled read to given length.
    pub trimmed_length: Option<usize>,
}

impl From<SampleArgs> for InternalSampleArgs {
    fn from(s: SampleArgs) -> Self {
        InternalSampleArgs {
            target_read_count: s.target_read_count,
            min_phred_score: s.min_phred_score,
            n_content: s.n_content,
            trimmed_length: s.trimmed_length,
        }
    }
}

#[wasm_bindgen]
impl SampleArgs {
    #[wasm_bindgen (constructor)]
    pub fn new(target_read_count: u64, min_phred_score: usize, n_content: Option<usize>, trimmed_length: Option<usize>) -> Self { Self { target_read_count, min_phred_score, n_content, trimmed_length } }
}

use crate::{io_utils::get_reader, utils::set_panic_hook};

#[wasm_bindgen]
pub struct Output {
    processed_num: u64,
    out: String,
}

#[wasm_bindgen]
impl Output {
    #[wasm_bindgen]
    pub fn get_output(self) -> String {self.out}
    #[wasm_bindgen]
    pub fn get_processed_num (&self) -> u64 {self.processed_num} 
}

// Entry points here
#[wasm_bindgen]
pub fn run_json_exported (sample_args: SampleArgs, compressed: bool) -> Output {
    set_panic_hook();

    let fastq_reader = FASTQReader::new(sample_args.into(), get_reader(compressed));
    let (out, processed_num) = run_json (fastq_reader);
    Output {processed_num, out}
}

#[wasm_bindgen]
pub fn run_tsv_exported (sample_args: SampleArgs, compressed: bool) -> Output {
    set_panic_hook();

    let fastq_reader = FASTQReader::new(sample_args.into(), get_reader(compressed));
    let (out, processed_num) = run_tsv (fastq_reader);
    Output {processed_num, out}
}

