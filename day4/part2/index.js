const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n').map(a => a.split(''));

let word = 'MAS';
let count = 0;

for (let row = 0; row < input.length; row++) {
	for (let column = 0; column < input[row].length; column++) {
		if (input[row][column] == word[1]) {
			let corners = [];
			for (let x = -1; x <= 1; x++) for (let y = -1; y <= 1; y++) if (x != 0 && y != 0 && input[row + y]?.[column + x] != null) corners.push({ x, y, char: input[row + y][column + x] });
			let letter1 = corners.filter(a => a.char == word[0]);
			let letter2 = corners.filter(a => a.char == word[2]);
			if (letter1.length == 2 && letter2.length == 2 && (letter1[0].x == letter1[1].x || letter1[0].y == letter1[1].y)) count++;
		}
	}
}
console.log(count);