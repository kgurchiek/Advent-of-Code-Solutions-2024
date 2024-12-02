const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\r\n');
let column1 = [];
let column2 = [];
for (const line of input) {
  column1.push(line.split(' ')[0]);
  column2.push(line.split(' ')[line.split(' ').length - 1]);
}
column1.sort((a, b) => a - b);
column2.sort((a, b) => a - b);
let sum = 0;
for (let i = 0; i < column1.length; i++) sum += Math.abs(column1[i] - column2[i]);
console.log(sum)