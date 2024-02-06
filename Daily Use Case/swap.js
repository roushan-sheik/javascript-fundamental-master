// Swap
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);
// Another way to swapping
a = b + (b = a) - b;
console.log(a, b);
