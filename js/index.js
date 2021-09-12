import Worker from "worker-loader!./worker.js";

const wasm = import("../pkg/index").then((wasm) => {
	function processFile (file) {
		console.info(file);

		const wasmProcess = new Worker();

		var li = document.createElement('li');
		let status = document.createElement('p');
		li.appendChild(status);
		
		status.innerText = "Processing... Should take no longer than a minute.";
		document.getElementById('output-list').appendChild(li);

		wasmProcess.onmessage = function (e) {
			let output = e.data;
	
			let p = document.createElement('p');
			p.innerText = 'JSON output:';

			let json_out = document.createElement('pre');
			json_out.innerText = JSON.stringify(output);
	
			// then result_entry is appended into output list
			li.appendChild(p);
			p.appendChild(json_out);

			status.innerText = "Waiting on server response... May take upto 5 minutes.";

			async function fetch_plot (output) {
			// Download and display graph
				let data = await fetch ('/api/plot_comp', {
					headers:{
						"content-type":"application/json"
					},
					body:JSON.stringify(output),
					method:"POST"
				});
				if (data.ok) {
					console.trace(data);
					const img = document.createElement("img");
					img.src = URL.createObjectURL(await data.blob());
					img.onload = function() {
						URL.revokeObjectURL(this.src);
					}
	
					li.appendChild(img);
					status.innerText = "";
				} else {
					status.innerText = "Error from server response";
					throw data;
				}
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