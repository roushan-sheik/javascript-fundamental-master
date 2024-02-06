let a = "Tasmiya Zaman";
//* function invoking
printName(); //* ফাংশনটা declare করার আগে কল করা হয়েছে।
//* এবং এটা সঠিকভাবে আউটপুট দিবে, কারন এটার ref store করা হয়েছে।
let b;
//!undefined দিবে কারন value assign এর আগে print করা হয়েছে।
console.log(b);
b = "Sourov Khan";
//* function declaration
function printName() {
  console.log("Md Rowshan Sheikh");
}
let c = "Green Tea";
console.log(c);

//! creational phase // ক্রিয়েশনাল ফেস
//* a = undefined // ভেরিয়েবল এর ক্ষেত্রে আনডিফাইনড স্টোর করবে।
//* b = undefined // ভেরিয়েবল এর ক্ষেত্রে আনডিফাইনড স্টোর করবে।
//* printName = ref // ফানশন এর ক্ষেত্রে রেফারেন্স স্টোর করবে।
//* c = undefined// ভেরিয়েবল এর ক্ষেত্রে আনডিফাইনড স্টোর করবে।
//! execution context // এক্সিকিউশন কনটেক্সট
//* print a = "Tasmiya Zaman"
//* print printName() clg()
//* print b = undefined // এটাতে value assign করার আগেই print হয়েছে।
//* print c = "Green Tea"

//! Roushan Sheik
