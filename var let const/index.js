//*NOTE- var is function scope

function printName() {
  // if we define variable with var we can access our myFriend variable
  // out of the if condition
  if (typeof myName === "string") {
    var myFriend = "Tasmiya";
    console.log("My friend is Tasmiya");
  }
  console.log(myFriend);
  // if we define variable with var we can access our loop variable
  // out of the loop
  for (var i = 0; i < 20; i++) {
    let age = i;
    // console.log(i)
  }
  console.log(i);
}
printName();

//*NOTE let and const block scope =========================>
function printName2() {
  // if we define variable with let keyword we can not access
  // our myFriend variable out of the if condition
  if (typeof myName === "string") {
    let myFriend = "Tasmiya";
    console.log("My friend is Tasmiya");
  }
  console.log(myFriend); // myFriend is not defined
  // if we define variable with var keyword we can not access
  // our loop variable out of the loop
  for (let i = 0; i < 20; i++) {
    let age = i;
    // console.log(i)
  }
  console.log(i); // i is not defined
}
// printName2();
