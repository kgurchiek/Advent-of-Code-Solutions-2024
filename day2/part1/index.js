const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
let count = 0;
for (const line of input) {
	const levels = line.split(' ').map(a => parseInt(a));
	if (levels[0] == levels[1]) continue;
	let safe = true;
	let direction = (levels[1] - levels[0]) / Math.abs(levels[1] - levels[0]);
	for (let i = 1; i < levels.length; i++) {
		let difference = levels[i] - levels[i - 1];
		if (difference / Math.abs(difference) != direction) safe = false;
		if (Math.abs(difference) < 1 || Math.abs(difference) > 3) safe = false;
	}
	if (safe) count++;
}
console.log(count);