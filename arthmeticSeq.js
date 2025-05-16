// arthmetic sequence 



// user instruction to solve arthmetic sequence 

// what is sequence in math?
// A sequence is an ordered list of numbers that follow a particular pattern.
// Each number in the sequence is called a term, and the position of each term is called its index.
// Sequences can be finite or infinite, and they can be defined by a formula or a recursive relation.
// Sequences are often used in mathematics to study patterns, relationships, and functions.
// In this code, we will create a sequence of numbers using a function.

// sequence and serires role in programming language


// find any term of arthmetic sequence in serires 

let userReuiredTerm = parseInt(prompt("Enter the term you want to find:"));
console.log(`The term you want to find is: ${userReuiredTerm}`);

let userEnter1stTerm = parseInt(prompt("Enter the first term:"));
console.log(`The first term is: ${userEnter1stTerm}`);

let userEnterCommonDifference = parseInt(prompt("Enter the common difference:"));
console.log(`The common difference is: ${userEnterCommonDifference}`);

let userEnterNumberOfTerms = parseInt(prompt("Enter the number of terms:"));
console.log(`The number of terms is: ${userEnterNumberOfTerms}`);


// apply formula for nth term of arithmetic sequence
let nthTerm = userEnter1stTerm + (userReuiredTerm - 1) * userEnterCommonDifference; // formula for nth term of arithmetic sequence

console.log("The " + userReuiredTerm + " term of the arithmetic sequence is: " + nthTerm);


