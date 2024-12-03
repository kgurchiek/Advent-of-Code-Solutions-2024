const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();
let sum = 0;
for (let i = 0; i < input.length; i++) {
	i = input.indexOf('mul(', i);
	if (i == -1) {
		console.log('Final:', sum)
		return;
	}
	let end = input.indexOf(')', i);
	let numbers = input.slice(i + 4, end).split(',').map(a => (a == '' || isNaN(a)) ? 'NaN' : parseInt(a));
	if (numbers.length != 2 || numbers.find(a => isNaN(a))) continue;
	console.log(numbers)
	sum += numbers[0] * numbers[1];
}