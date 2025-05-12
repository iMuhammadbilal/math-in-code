// what is sequence in math?
// A sequence is an ordered list of numbers that follow a particular pattern.
// Each number in the sequence is called a term, and the position of each term is called its index.
// Sequences can be finite or infinite, and they can be defined by a formula or a recursive relation.
// Sequences are often used in mathematics to study patterns, relationships, and functions.
// In this code, we will create a sequence of numbers using a function.

// Arthemetic sequence means the difference between two consecutive terms is constant.
// For example, 2, 4, 6, 8, 10 is an arithmetic sequence with a common difference of 2.

// Geometric sequence means the ratio between two consecutive terms is constant.
// For example, 2, 4, 8, 16, 32 is a geometric sequence with a common ratio of 2.

// Fibonacci sequence is a sequence of numbers in which each number is the sum of the two preceding ones.
// The sequence starts with 0 and 1, and the next number is obtained by adding the two previous numbers.
// For example, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 is a Fibonacci sequence.
// The Fibonacci sequence can be defined using the following recursive relation:
// F(n) = F(n-1) + F(n-2), where F(0) = 0 and F(1) = 1.


// Example of arithmetic sequence

function arithmeticSequence(a, d, n) {
    // a is the first term
    // d is the common difference
    // n is the number of terms
    let sequence = [];
    for (let i = 0; i < n; i++) { // loop to generate n terms
        // i is the index of the term
        sequence.push(a + i * d); // formula for nth term of arithmetic sequence
    }
    return sequence;
}

let a = 2; // first term
let d = 3; // common difference
let n = 12; // number of terms

let arithmeticSeq = arithmeticSequence(a, d, n);
console.log("Arithmetic Sequence: " + arithmeticSeq.join(", "));

// Mujhe 7th term chahiye
