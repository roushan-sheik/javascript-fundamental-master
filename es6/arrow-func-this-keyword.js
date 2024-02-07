const sum = (a, b) => a + b;
console.log(sum(5, 10));
const sqr = (x) => x * x;
console.log(sqr(10));
// NOTE - Lets talk about this keyword
// If we use fat arrow function this refer the window object
// But if we use normal function this will refer the parent object.
let obj = {
  named: "Arifa Moni",
  print: () => {
    console.log("Name is ", this.named);
  },
};
obj.print();

let obj2 = {
  named: "Arifa Moni",
  print: function () {
    // let self = this;
    // setTimeout(function () {
    setTimeout(() => {
      console.log("Name is ", this.named);
    }, 1000);
  },
};

obj2.print();
