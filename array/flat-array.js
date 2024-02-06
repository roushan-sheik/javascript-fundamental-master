// How to flattern a multi-dimensional array
const arr = [1, 2, [3, 4], [5, 6], 7];

// We can use array.flat() method to flattern one level array
console.log(arr.flat()); //[1,2,3,4,5,6,7]

// Multi level array
const multiaArr = [1, 2, [3, 4], [5, 6, [7, 8]], 9];

// We can pass 'Infinity' parameter to array.flat function
console.log(multiaArr.flat(Infinity)); //
