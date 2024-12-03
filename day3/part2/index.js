const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();
let sum = 0;
let enabled = true;
for (let i = 0; i < input.length; i++) {
	i = input.indexOf('(', i);
	if (i == -1) {
		console.log('Final:', sum)
		return;
	}
	if (i >= 3 && input.slice(i - 3, i) == 'mul') {
		let end = input.indexOf(')', i);
		let numbers = input.slice(i + 1, end).split(',').map(a => (a == '' || isNaN(a)) ? 'NaN' : parseInt(a));
		if (numbers.length != 2 || numbers.find(a => isNaN(a))) continue;
		console.log(numbers);
		if (enabled) sum += numbers[0] * numbers[1];
	}
	if (i >= 2 && input.slice(i - 2, i) == 'do') {
		enabled = true;
		console.log('do')
	}
	if (i >= 5 && input.slice(i - 5, i) == 'don\'t') {
		enabled = false;
		console.log('don\'t');
	}
}