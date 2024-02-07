// Just like var in Javascript, let keyword is also used for variable
// declaration.But the only difference is the variable declared with
//the “let” keyword is block - scoped and local variable.
//A variable declared with let will be out of scope outside the block
// within which it has been declared.
let named = "Arifa Moni";
for (var i = 0; i < named.length; i++) {
  console.log(i);
}
// if we use var keyword we can access our loop variable
console.log(i); // 10
//NOTE- lets talk about const========>
//  if we define a variable with const we cannot change the value of that variable
const age = 20;
// age = 40; We cant do this
