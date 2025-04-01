"use strict"; //why use strict? treat all js code as new js code

// alert(3 + 3); //this will show an error because we are in .js mean we are in node it on shows in html

// numbers 
let one = 1;
let two = 2;
let three = 3.1;
let sum = one + two + three;
console.log(`The sum of these numbers =  ${sum}`);

// Strings 
let fName = 'Imtiaz';
let lName = 'Hussain';
let fullName = fName + lName;
console.log(`Hello! my name is  ${fullName}`)

// Objects 
const Imtiaz = {
    fullName: 'Imtiaz Hussain',
    Age: 26,
    fatherName: "Niaz Ahmad"
}
console.table(typeof Imtiaz);

// Array 

const qualification = ['MSC',26, 'PTCL' ];
console.log(qualification);