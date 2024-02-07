//NOTE Default Parameter
function Sum(a = 5, b = 10) {
  console.log(a + b);
}
Sum();
// If we use default parameter we cannot provide ( null)
// as a parameter this is throw an error.
function greet(name = "Tasmiya", msg = "Hello") {
  console.log(msg, name);
  console.log(name.length);
}
greet(undefined, null);
