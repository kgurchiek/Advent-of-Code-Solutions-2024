const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
let safeLevels = [];
let revisedInputs = [];
for (let i = 0; i < input.length; i++) {
	const levels = input[i].split(' ').map(a => parseInt(a))
	for (let j = 0; j < levels.length; j++) revisedInputs.push({ id: i, levels: levels.slice(0, j).concat(levels.slice(j + 1)) });
}
for (const line of revisedInputs) {
	if (line.levels[0] == line.levels[1]) continue;
	let safe = true;
	let direction = (line.levels[1] - line.levels[0]) / Math.abs(line.levels[1] - line.levels[0]);
	for (let i = 1; i < line.levels.length; i++) {
		let difference = line.levels[i] - line.levels[i - 1];
		if (difference / Math.abs(difference) != direction) safe = false;
		if (Math.abs(difference) < 1 || Math.abs(difference) > 3) safe = false;
	}
	if (safe && !safeLevels.includes(line.id)) safeLevels.push(line.id);
}
console.log(safeLevels.length);