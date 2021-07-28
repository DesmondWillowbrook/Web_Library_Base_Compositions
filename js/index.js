import Worker from "worker-loader!./worker.js";

const wasm = import("../pkg/index").then((wasm) => {
	function processFile (file) {
		console.info(file);

		const wasmProcess = new Worker();

		wasmProcess.onmessage = function (e) {
			let [processed_num, output] = e.data;
			let info_string = `Processed ${processed_num} reads.\nJSON output:`;
	
			// creates result_entry onto which both items are appended
			var result_entry = document.createElement('li');
			result_entry.appendChild(document.createTextNode(info_string));
			let output_node = document.createElement('pre');
			output_node.innerText = JSON.stringify(output);
	
			// then result_entry is appended into output list
			result_entry.appendChild(output_node);
	
			document.getElementById('output-list').appendChild(result_entry);
		}

		wasmProcess.postMessage (file);
	}
	
	function run() {
		const fileSelector = document.getElementById('file-selector');
	
		for ( var i = 0; i < fileSelector.files.length; i++) {
			let file = fileSelector.files[i];
			processFile (file);
		}
	}
	
	document.getElementById('file-selector').onchange = run;
	console.debug("Loaded event listener to input-form");
})