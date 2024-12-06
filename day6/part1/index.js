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
		}
	}
}
let tiles = [{ x: guard.x, y: guard.y }];
while (true) {
	let next;
	while (true) {
		next = input[guard.y - directions[guard.direction].y]?.[guard.x + directions[guard.direction].x];
		if (next == '#' || next == null) break;
		guard.x += directions[guard.direction].x;
		guard.y -= directions[guard.direction].y;
		if (!tiles.find(a => a.x == guard.x && a.y == guard.y)) tiles.push({ x: guard.x, y: guard.y });
	}
	if (next == null) break;
	guard.direction++;
	if (guard.direction > 3) guard.direction = 0;
}
console.log(tiles.length);