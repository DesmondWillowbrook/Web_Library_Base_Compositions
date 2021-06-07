const wasm = import("../pkg/index").then((wasm) => {
	function processFile (file, args) {
		const fileReader = new FileReader();
		fileReader.onload = (event) => {
			window.readFileString = event.target.result;
			console.info("Starting processing... Calling into Rust module.");
	
			let result = wasm.run_json_exported(args);
	
			let result_para = document.getElementById('result_para');
			result_para.innerHTML = `Processed ${result.get_processed_num()} reads.\nJSON output:`;
	
			let output_para = document.getElementById('output');
			output_para.innerHTML = result.get_output();
		};
		fileReader.readAsText(file);
	
		let result_para = document.getElementById('result_para');
		result_para.innerHTML = `Processing...`;
	}
	
	function run() {
		const fileSelector = document.getElementById('file-selector');
	
		const file = fileSelector.files[0];
		console.info(file);
	
		// remember: current input mechanism relies on modifying elements
		// change that if you want to have multiple files work
		// and also add "multiple" attribute to the HTML input
	
		console.info("Loading WASM");
		processFile (
			file,
			new wasm.SampleArgs (
				BigInt (100),
				0,
				null,
				50
			),
		);
	}
	
	document.getElementById('file-selector').addEventListener('change', run);
	console.debug("Loaded event listener to input-form");
})