const set = new Set([1, 2]);
console.log(set);
set.add(3);
set.add(4);
console.log(set);
set.add(5);
set.add(5);
console.log(set);
console.log(set.has(2)); // true
console.log(set.size);
console.log(set.keys().next());
 
