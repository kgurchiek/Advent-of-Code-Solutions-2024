const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replaceAll('\r', '').split('\n').map(a => a.split(''));
let nodes = [];
let antinodes = new Set();
for (let y = 0; y < input.length; y++) for (let x = 0; x < input[y].length; x++) if (input[y][x] != '.') nodes.push({ x, y, char: input[y][x] });
for (let i = 0; i < nodes.length; i++) {
	for (let j = i + 1; j < nodes.length; j++) {
		if (nodes[i].char != nodes[j].char) continue;
		let diff = { x: nodes[j].x - nodes[i].x, y: nodes[j].y - nodes[i].y };
		if (input[nodes[j].y + diff.y]?.[nodes[j].x + diff.x] != null) antinodes.add(`${nodes[j].x + diff.x},${nodes[j].y + diff.y}`);
		if (input[nodes[i].y - diff.y]?.[nodes[i].x - diff.x] != null) antinodes.add(`${nodes[i].x - diff.x},${nodes[i].y - diff.y}`);
	}
}
console.log(antinodes.size);