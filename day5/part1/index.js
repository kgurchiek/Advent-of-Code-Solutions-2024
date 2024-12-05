const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();
let [rules, produce] = input.split('\r\n\r\n').map(a => a.split('\r\n'));
rules = rules.map(a => a.split('|'));
produce = produce.map(a => a.split(','));
let sum = 0;
for (const item of produce) {
	let valid = true;
	for (const rule of rules) if (item.includes(rule[0]) && item.includes(rule[1]) && item.indexOf(rule[0]) > item.indexOf(rule[1])) valid = false;
	if (valid) sum += parseInt(item[Math.floor(item.length / 2)]);
}
console.log(sum)