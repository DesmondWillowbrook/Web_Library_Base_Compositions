const wasm = import("../pkg/index").then((wasm) => {
	function processFile (file, args) {
		const fileReader = new FileReader();
		fileReader.onload = (event) => {
			window.readFileString = event.target.result;
			console.info("Starting processing... Calling into Rust module.");
	
			let result = wasm.run_json_exported(args);
			let info_string = `Processed ${result.get_processed_num()} reads.\nJSON output:`;
			let output_string = result.get_output();

			// creates result_entry onto which both items are appended
			var result_entry = document.createElement('li');
			result_entry.appendChild(document.createTextNode(info_string));
			let output_node = document.createElement('pre');
			output_node.innerText = output_string;

			// then result_entry is appended into output list
			result_entry.appendChild(output_node);
	
			document.getElementById('output-list').appendChild(result_entry);
		};
		fileReader.readAsText(file);
	}
	
	function run() {
		const fileSelector = document.getElementById('file-selector');
	
		for ( var i = 0; i < fileSelector.files.length; i++) {
			let file = fileSelector.files[i];
			console.info(file);
		
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
	}
	
	document.getElementById('file-selector').addEventListener('change', run);
	console.debug("Loaded event listener to input-form");
})