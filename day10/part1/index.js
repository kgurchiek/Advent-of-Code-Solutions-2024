const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replaceAll('\r', '').split('\n').map(a => a.split('').map(a => a == '.' ? -1 : parseInt(a)));
let sets = [];
function checkNum(x, y, set) {
	let num = input[y][x];
	if (num == '9') sets[set].add(`${x},${y}`);
	else for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) if (!(i != 0 && j != 0) && input[y + j]?.[x + i] != null && input[y + j][x + i] == num + 1) checkNum(x + i, y + j, set);
}
for (let i = 0; i < input.length; i++) for (let j = 0; j < input[i].length; j++) if (input[i][j] == 0) checkNum(j, i, sets.push(new Set()) - 1);
console.log(sets.reduce((a, b) => a + b.size, 0));