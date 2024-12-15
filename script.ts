// Calculate your age based on the current year and your birth year
var currentYear = 2025;
var birthYear = 1996;
var dob = currentYear - birthYear;
console.log(dob, "Your age")

// Write a program that calculates the area of a rectangle using length and width variables.

var length = 50;
var width = 160;
var area = length * width;
console.log(area,"area of a rectangle")

// Write a program that calculates the area of a circle.
// Area=π * radius 

var radius = 7;
var area = Math.PI * 7**2;
console.log(area,"area of circle");

// Write a program that calculates the area of the cube
// Surface Area=6 * side ** 2

var side_length = 6;
var surface_area = 6 * 6**2;
console.log(surface_area, "surface_area")

// Convert a given number of seconds into minutes and seconds using variables.
var seconds = 7890;
var minutes = 60;
var total_minutes = seconds/ minutes;
console.log(total_minutes);

// Write a program that calculates the percentage.
var total_marks = 100;
var obtain_marks = 74;
var percentage = obtain_marks/total_marks * 100;
console.log(percentage, "percentage");

// increment and decrement operater
// - Q1:
var a = 2;
var b = ++a * 2; 
console.log(b, "question 1");

var x = 5;
var y = x-- + 2;
console.log(y, "question 2");

let c = 3;
let d = ++c + c++ + ++c;
console.log(d, "question 3");

var m = 2;
var n = ++m * m++ * --m;
console.log(n, "question 4");

var a1 = 3;
var b1 = 5;
let result = ++a1 + b1-- - a1++ + --b1;
console.log(result, "question 5");

var m1 = 2;
var n1 = 4;
var p2 = m1++ + ++n1 - --m1+ n1--;
console.log(m1, n1, p2, "question 6");

