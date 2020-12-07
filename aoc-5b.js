/**
 * 
 --- Day 5: Binary Boarding ---
You board your plane only to discover a new problem: you dropped your boarding pass! You aren't sure which seat is yours, and all of the flight attendants are busy with the flood of people that suddenly made it through passport control.

You write a quick program to use your phone's camera to scan all of the nearby boarding passes (your puzzle input); perhaps you can find your seat through process of elimination.

Instead of zones or groups, this airline uses binary space partitioning to seat people. A seat might be specified like FBFBBFFRLR, where F means "front", B means "back", L means "left", and R means "right".

The first 7 characters will either be F or B; these specify exactly one of the 128 rows on the plane (numbered 0 through 127). Each letter tells you which half of a region the given seat is in. Start with the whole list of rows; the first letter indicates whether the seat is in the front (0 through 63) or the back (64 through 127). The next letter indicates which half of that region the seat is in, and so on until you're left with exactly one row.

For example, consider just the first seven characters of FBFBBFFRLR:

Start by considering the whole range, rows 0 through 127.
F means to take the lower half, keeping rows 0 through 63.
B means to take the upper half, keeping rows 32 through 63.
F means to take the lower half, keeping rows 32 through 47.
B means to take the upper half, keeping rows 40 through 47.
B keeps rows 44 through 47.
F keeps rows 44 through 45.
The final F keeps the lower of the two, row 44.
The last three characters will be either L or R; these specify exactly one of the 8 columns of seats on the plane (numbered 0 through 7). The same process as above proceeds again, this time with only three steps. L means to keep the lower half, while R means to keep the upper half.

For example, consider just the last 3 characters of FBFBBFFRLR:

Start by considering the whole range, columns 0 through 7.
R means to take the upper half, keeping columns 4 through 7.
L means to take the lower half, keeping columns 4 through 5.
The final R keeps the upper of the two, column 5.
So, decoding FBFBBFFRLR reveals that it is the seat at row 44, column 5.

Every seat also has a unique seat ID: multiply the row by 8, then add the column. In this example, the seat has ID 44 * 8 + 5 = 357.

Here are some other boarding passes:

BFFFBBFRRR: row 70, column 7, seat ID 567.
FFFBBBFRRR: row 14, column 7, seat ID 119.
BBFFBBFRLL: row 102, column 4, seat ID 820.
As a sanity check, look through your list of boarding passes. What is the highest seat ID on a boarding pass?
FBF BBFF RLR

010 1100 | 101
=> 4+8+32 = 44

 */

const readFile = require('fs').readFileSync;

const file = readFile('inputs/input-5.txt', 'utf-8')
.split('\n')
.filter((_) => _.trim());
let file2 = [];

console.log(file);
file.forEach(element => {
  file2.push(
      element.split('')
  );  
});
// file2 = file.map(split(''));
// .map((_) => parseInt(_, 10));
// console.log(file2);
let file3 =[];

file.forEach(element => {
    element = element.replace(/B/g, 1)
    element = element.replace(/R/g, 1)
    element = element.replace(/F/g, 0)
    element = element.replace(/L/g, 0)
    const seatId = parseInt(element, 2);
    file3.push(seatId);
});

console.log('----------');
console.log(file);
console.log(file3);

// sort function sorts by default alphabetically!
file3.sort((a,b) => a-b);
console.log(file3);

// file3.forEach(element => {
//   console.log(element)
// });

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
console.log('max value')
console.log(myArrayMax(file3))



// test1= ['1', '7', '11'].map(parseInt);
// test2= ['1', '7', '11'].map(numStr => parseInt(numStr));

// console.log(test1)
// console.log(test2)



// var str = "Twas the night before Xmas...";
// var newstr = str.replace(/xmas/i, "Christmas");
// console.log(newstr);


// function compareNumbers(a, b)
// {
//     return a - b;
// }


// numArray.sort(compareNumbers);


// var numArray = new Float64Array([140000, 104, 99]);
// numArray = numArray.sort();
// console.log(numArray)

// numArray.sort((a,b) => a-b);