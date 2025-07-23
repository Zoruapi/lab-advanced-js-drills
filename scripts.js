
//============ HOISTING AND FUNCTIONS ===================

// ------ Objectives from 1 to 4

/*
 name = 'Zorua';
 var name;
 console.log(name);
// --Q: What do you expect to be logged?
// --A: The value of name as the declaration of the variable will be hoisted
 */

// ------ Objectives 5 and 6

/*
// name = 'Zorua';
// let name;
// console.log(name);
*/

// ------ Objectives from 7 to 9

/*
setName();

function setName() {
    var name = 'Covalence';
    console.log(name);
}
// --Q: What do you expect to be logged in the console?
// --A: The value of the variable name as the functions are hoisted
*/

// ------ Objectives 10 and 11

/* console.log('Start');
let avg = findAvg(2, 3);
console.log('The average is', avg);

function findAvg(num1, num2) {
    console.log('Calculating Average');
    let avg = (num1 + num2) / 2;
    return avg;
}
// --Q: In what order will the logs be printed in the console?
// --A: The fist console will be the one that says "Start", then it will show
//      the "Calculating Average" since we call the function and store the result on a
//      variable. The last console.log will be the one that says what's the average */

//============ SCOPING ===================

// ------ Objectives from 1 to 10

/*
let fruits = ['Apple', 'Strawberry', 'Watermelon'];
let favFruit;

showFruits();

function showFruits() {
    console.log(fruits[0]);
    favFruit = fruits[2];
}

function showFavFruit() {
    console.log(favFruit);
}
// --Q: Why was the showFavFruit function able to log favFruit?
// --A: The showFavFruit function was able to log favFruit cause both the variable and
// the function where within the same scope, in this case, the global scope */

// ------ Objectives from 11 to 13

/*
let fruits = ['Apple', 'Strawberry', 'Watermelon'];

showFruits();
showFavFruit();

function showFruits() {
    console.log(fruits[0]);
    let favFruit = fruits[2];
}

function showFavFruit() {
    console.log(favFruit);
} */

// ------ Objectives from 14 tp 16

/*
let fruits = ['Apple', 'Strawberry', 'Watermelon'];

showFruits();

function showFruits() {
    console.log(fruits[0]);
    let favFruit = fruits[2];

    showFavFruit();

    function showFavFruit() {
        console.log(favFruit);
    }

} */

// ------ Objectives from 17 to 20

/*
let fruits = ['Apple', 'Strawberry', 'Watermelon'];

showFruits();

function showFruits() {
    console.log(fruits[0]);
    let favFruit = fruits[2];

    showFavFruit();

    function showFavFruit() {
        let leastFav = 'kiwi';
        console.log(favFruit);
    }

}

console.log(leastFav); */

// ------ Objective 21

/*
sayHello();

function sayHello() {
    console.log('Hello, Zorua');
} */

// ------ Objectives 22 and 23

// newAlert();

let newAlert = function () { alert('Some text of your choosing'); }

newAlert();