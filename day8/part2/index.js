const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replaceAll('\r', '').split('\n').map(a => a.split(''));
let nodes = [];
let antinodes = new Set();
for (let y = 0; y < input.length; y++) for (let x = 0; x < input[y].length; x++) if (input[y][x] != '.') nodes.push({ x, y, char: input[y][x] });
for (let i = 0; i < nodes.length; i++) {
	for (let j = i + 1; j < nodes.length; j++) {
		if (nodes[i].char != nodes[j].char) continue;
    antinodes.add(`${nodes[i].x},${nodes[i].y}`);
		let slope = (nodes[j].y - nodes[i].y)/(nodes[j].x - nodes[i].x);
    for (let y = 0; y < input.length; y++) for (let x = 0; x < input[y].length; x++) if ((y - nodes[i].y)/(x - nodes[i].x) == slope) antinodes.add(`${x},${y}`);
	}
}
console.log(antinodes.size);