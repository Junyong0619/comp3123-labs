/*
COMP 3123 - Full Stack Development
Lab Exercise 2 - ES6 Practice Exercises
Student: Junyong Choi (101539862)
*/

//1. es5 (origin)
// function gretter(myArray,counter) {
//     var greetText = 'Hello ';

//     for (var index =0; index < myArray.length; index++) {
//         console.log(greetText + myArray[index]);
//     }
// }
// gretter (['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// es5 => es6
const greeter = (myArray, counter) => {
    const greetText = 'Hello ';

    for (const name of myArray) {
        console.log(`${greetText}${name}`);
    }
};
greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

//====================================

//ex2.
const capitalize = (str) => {
    const [first, ...rest] = [...str];
    const head = first.toUpperCase();
    const tail = rest.join('').toLowerCase();
    return `${head}${tail}`;
};

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

//=====================================

//ex3. Using array.proto.map
const colors = ['red', 'green', 'blue'];
//code
const capitalizeAll = (arr) => arr.map(capitalize);

const capitalizedColors = capitalizeAll(colors);
console.log(capitalizedColors);
//output
// ['Red', 'Green', 'Blue']

//=====================================

//ex4.Using array.proto.filter

const values = [1, 60, 34, 30, 20 ,5];
//code..
const lessThan20 = (arr) => arr.filter((n) => n < 20); //[1,5]
const filterLessThan20 = lessThan20(values);
console.log(filterLessThan20);
//output [1,5]


//=====================================

//ex5. reduce 

const array = [1, 2, 3, 4];
//code

const sumOf = (arr) => arr.reduce((acc, cur) => acc + cur, 0);
const productOf = (arr) => arr.reduce((acc, cur) => acc * cur, 1);
const calculateSum = sumOf(array);
const calculateProduct = productOf(array);


console.log(calculateSum);
console.log(calculateProduct);
//Output
//10
//24


//======================================
//ex6.
class Car{
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());
//subclass - extends Car super class
class Sedan extends Car {
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }
    info(){
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}
const sedan = new Sedan('Volvo SD', 2018, 30000);

console.log(sedan.info());

//Output
//Model: Pontiac Firebird Engine 1976
//Volvo SD has a balance of $30000.00
