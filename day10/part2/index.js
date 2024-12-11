const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replaceAll('\r', '').split('\n').map(a => a.split('').map(a => a == '.' ? -1 : parseInt(a)));
let paths = [];
function checkNum(x, y, path) {
	let num = input[y][x];
	if (num == '9') paths[path]++;
	else for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) if (!(i != 0 && j != 0) && input[y + j]?.[x + i] != null && input[y + j][x + i] == num + 1) checkNum(x + i, y + j, path);
}
for (let i = 0; i < input.length; i++) for (let j = 0; j < input[i].length; j++) if (input[i][j] == 0) checkNum(j, i, paths.push(0) - 1);
console.log(paths.reduce((a, b) => a + b, 0));