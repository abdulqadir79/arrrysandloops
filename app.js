//========ARRAYS AND LOOP=============

/*1. Declare and initialize an empty multidimensional array.
(Array of arrays)
let emptyArray = [[]]; // Initialize an empty array of arrays*/

/*2. Declare and initialize a multidimensional array
representing the following matrix:
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
*/

/*3. Write a program to print numeric counting from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
*/

/*User
4. Write a program to print multiplication table of any
number using for loop. Table number & length should be
taken as an input from user.


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the number for multiplication table: ', (tableNumber) => {
  rl.question('Enter the length of the table: ', (tableLength) => {
    tableNumber = parseInt(tableNumber);
    tableLength = parseInt(tableLength);

    console.log(`Multiplication table of ${tableNumber} up to length ${tableLength}:`);
    for (let i = 1; i <= tableLength; i++) {
      console.log(`${tableNumber} * ${i} = ${tableNumber * i}`);
    }

    rl.close();
  });
});
*/

/*5. Write a program to print items of the following array
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”,
“strawberry”]
const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log("Printing items of the array using a for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
*/

/*6. Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// Counting: 1 to 15
document.write("<p>Counting: ");
for (let i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("</p>");

// Reverse counting: 10 to 1
document.write("<p>Reverse counting: ");
for (let i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("</p>");

// Even numbers: 0 to 20
document.write("<p>Even: ");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}
document.write("</p>");

// Odd numbers: 1 to 19
document.write("<p>Odd: ");
for (let i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}
document.write("</p>");

// Series: 2k to 20k
document.write("<p>Series: ");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}
document.write("</p>");
*/

/*7. You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array.
After searching, prompt the user whether the given item is
found in the list or not. Example:
const A = ["cake", "apple pie", "cookie", "chips", "patties"];

const userInput = prompt("Enter the item you want to search:");

let found = false;
for (let i = 0; i < A.length; i++) {
    if (A[i] === userInput) {
        found = true;
        break;
    }
}

if (found) {
    alert(`Yes, '${userInput}' is found in the list.`);
} else {
    alert(`No, '${userInput}' is not found in the list.`);
}
*/

/*8. Write a program to identify the largest number in the
given array.
A = [24, 53, 78, 91, 12].
const A = [24, 53, 78, 91, 12];

let largest = A[0]; // Assume the first element as the largest initially

for (let i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i]; // Update largest if the current element is greater
    }
}

console.log("The largest number in the array is:", largest);
*/

/*9. Write a program to identify the smallest number in the
given array.
A = [24, 53, 78, 91, 12]
const A = [24, 53, 78, 91, 12];

let smallest = A[0]; // Assume the first element as the smallest initially

for (let i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i]; // Update smallest if the current element is smaller
    }
}

console.log("The smallest number in the array is:", smallest);
*/

/*10. Write a program to print multiples of 5 ranging 1 to
100..
console.log("Multiples of 5 ranging from 1 to 100:");

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
*/