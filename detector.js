const prompt = require("prompt-sync")();

let speed = Number(prompt("Enter car speed (km/s): "));

if (speed <= 70){
	console.log("Ok");
} else{
	let points = Math.floor((speed - 70) / 5);
	if (points > 12) {
	console.log("License suspended");
} else {
	console.log("Points:", points);
}

}