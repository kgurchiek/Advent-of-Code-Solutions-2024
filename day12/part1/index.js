const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n').map(a => a.split(''));
let groups = [];
function groupPlant(x, y) {
	if (groups.find(a => a.includes(`${x},${y}`)) != null) return;
	let grouped = false;
	for (let i = -1; i <= 1 && !grouped; i++) {
		for (let j = -1; j <= 1 && !grouped; j++) {
			if ((i != 0 && j != 0) || (i == 0 && j == 0) || input[y + j]?.[x + i] != input[y][x]) continue;
			let group = groups.find(a => a.includes(`${x + i},${y + j}`));
			if (group) {
				group.push(`${x},${y}`);
				grouped = true;
			}
		}
	}
	if (!grouped) groups.push([`${x},${y}`]);
	for (let i = -1; i <= 1; i++) {
		for (let j = -1; j <= 1; j++) {
			if ((i != 0 && j != 0) || (i == 0 && j == 0) || input[y + j]?.[x + i] != input[y][x]) continue;
			groupPlant(x + i, y + j);
		}
	}
}
for (let y = 0; y < input.length; y++) for (let x = 0; x < input[y].length; x++) groupPlant(x, y);
let sum = 0;
for (const group of groups) {
	let perimeter = 0;
	for (const plot of group) {
		let [x, y] = plot.split(',').map(a => parseInt(a));
		for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) if (!(i != 0 && j != 0) && input[y + j]?.[x + i] != input[y][x]) perimeter++;
	}
	// console.log(group, perimeter, input[parseInt(group[0].split(',')[1])][parseInt(group[0].split(',')[0])], group.length * perimeter)
	sum += group.length * perimeter;
}
console.log(sum)