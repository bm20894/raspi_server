#!/usr/bin/env node
const { exec } = require("child_process");

process.on('SIGINT', () => {
	console.log();
	process.exit();
});

module.exports = { play, setVol };


function setVol(vol) {
	vol = vol || 500;
	exec('amixer set PCM -- -' + vol, () => {
	        console.log('Volume set to ' + vol);
	});
}
// param = { file, vol }
function play(param) {
	let { file, vol } = param;
	setVol(vol);
	let f = file.split("/");
	f = f[f.length-1];
	console.log("Playing " + f);

	exec("aplay --quiet " + file, (e, out, err) => {
		if(e) return console.log("There was an error executing");
		// console.log(`stdout: ${out}`);
		// console.log(`stderr: ${err}`);
	});
}

// function silence
