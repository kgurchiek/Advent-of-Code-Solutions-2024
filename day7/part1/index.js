const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
let sum = 0;
for (const line of input) {
	let [value, nums] = line.split(': ');
	value = parseInt(value);
	nums = nums.split(' ').map(a => parseInt(a));
	for (let i = 0; i < 2**(nums.length - 1); i++) {
		let operations = i.toString(2);
		while (operations.length < (2**(nums.length - 2)).toString(2).length) operations = `0${operations}`;
		let result = nums[0];
		for (let j = 1; j < nums.length; j++) {
			// console.log(nums, operations, j, operations[j - 1])
			if (operations[j - 1] == '0') result += nums[j];
			else result *= nums[j];
		}
		if (result == value) {
			sum += value;
			break;
		}
	}
}
console.log(sum);