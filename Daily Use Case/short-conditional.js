//  Short conditionals
const country = "Bangladesh";
if (country === "Bangladesh") {
  console.log("My country"); // "My country";
}
// shorthand
const result1 = country === "Bangladesh" && "My country";
console.log(result1);
// Or shorthand
// If country name is not Bangladesh
// Then print this is not my country 
const result = country === "Arabia" || "This is not my country";
console.log(result);
