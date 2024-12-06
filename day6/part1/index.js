const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n').map(a => a.split(''));
const directions = {
	0: { x: 0, y: 1 },
	1: { x: 1, y: 0 },
	2: { x: 0, y: -1 },
	3: { x: -1, y: 0 }
}
let guard;
for (let i = 0; i < input.length; i++) {
	for (let j = 0; j < input[i].length; j++) {
		if (input[i][j] == '^') {
			guard = { x: j, y: i, direction: 0 };
			input[i][j] = '.';
		}
	}
}
let tiles = new Set();
tiles.add(`${guard.x},${guard.y}`);
while (true) {
	let next = input[guard.y - directions[guard.direction].y]?.[guard.x + directions[guard.direction].x];
	if (next == '.') {
		guard.x += directions[guard.direction].x;
		guard.y -= directions[guard.direction].y;
		tiles.add(`${guard.x},${guard.y}`);
	} else if (next == null) break;
	else if (next == '#') guard.direction++;
	if (guard.direction > 3) guard.direction = 0;
}
console.log(tiles.size);