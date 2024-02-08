let arr = [1, 2, 3, 4];
function* generate(arr) {
  for (const i of arr) {
    yield i;
  }
}
const getData = generate(arr);
console.log(getData.next());
console.log(getData.next());
console.log(getData.next());
console.log(getData.next());
console.log(getData.next());
