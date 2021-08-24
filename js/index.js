import Worker from "worker-loader!./worker.js";

const wasm = import("../pkg/index").then((wasm) => {
	function processFile (file) {
		console.info(file);

		const wasmProcess = new Worker();

		wasmProcess.onmessage = function (e) {
			let output = e.data;

			// Display JSON info
			let info_string = `JSON output:`;
	
			// creates result_entry onto which both items are appended
			var result_entry = document.createElement('li');
			result_entry.appendChild(document.createTextNode(info_string));
			let output_node = document.createElement('pre');
			output_node.innerText = JSON.stringify(output);
	
			// then result_entry is appended into output list
			result_entry.appendChild(output_node);
	
			document.getElementById('output-list').appendChild(result_entry);

			async function fetch_plot (output) {
			// Download and display graph
				let data = await fetch ('/api/plot_comp', {
					headers:{
						"content-type":"application/json"
					},
					body:JSON.stringify(output),
					method:"POST"
				});
				console.log(data);
				const img = document.createElement("img");
				img.src = URL.createObjectURL(await data.blob());
				img.onload = function() {
					URL.revokeObjectURL(this.src);
				}

				result_entry.appendChild(img);
			}
			fetch_plot(output);
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