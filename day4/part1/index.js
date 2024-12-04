const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n').map(a => a.split(''));

let word = 'XMAS';
let count = 0;
function checkLetter(x, y, index, direction) {
	// if (index > 1) console.log(x, y, index, direction)
	if (index == word.length) count++;
	else if (input[y] != null && input[y][x] != null && input[y][x] == word[index]) checkLetter(x + direction.x, y + direction.y, index + 1, direction);
}

for (let row = 0; row < input.length; row++) {
	for (let column = 0; column < input[row].length; column++) {
		if (input[row][column] == word[0]) for (let x = -1; x <= 1; x++) for (let y = -1; y <= 1; y++) if (!(x == 0 && y == 0)) checkLetter(column, row, 0, { x, y });
	}
}
console.log(count);