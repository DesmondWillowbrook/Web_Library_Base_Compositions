onmessage = async function(e) {
	console.log('File received from main script');
	let [file, args] = e.data;

	const wasm = await import("../pkg/index");
	wasm.run_json_exported(args);

	console.log('Posting message back to main script');
	postMessage(workerResult);
}