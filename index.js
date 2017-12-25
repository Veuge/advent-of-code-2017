var fs = require('fs');

var day1 = require('./day-1');
var day2 = require('./day-2');

var input1 = fs.readFileSync('./day-1.txt').toString().trim();
day1.captcha(input1, 1, true);

var increment = input1.length / 2;
day1.captcha(input1, increment, false);

var input2 = fs.readFileSync('./day-2.txt').toString().trim();
day2.checksum(input2, 1);
day2.checksum(input2, 2);