

onmessage = async function(e) {
	const wasm = await import("../pkg/index");

	console.log('File received from main script');
	let file = e.data;
	console.debug(file);

	// for communication with exported function 'get_file'
	self.readFile = file;

	const args = new wasm.SampleArgs (
		BigInt (100),
		0,
		null,
		50
	);
	let result = wasm.run_json_exported(args);

	console.log('Posting message back to main script');
	postMessage([result.get_processed_num(), result.get_output()]);
}