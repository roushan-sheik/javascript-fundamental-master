let myArr = [1, 2, 3, 4];
// Es5 iterator
function makeIterator ( val )
{
  let i = 0;
  return {
    next() {
      return {
        done: i >= val.length,
        value: val[i++],
      };
    },
  };
}
let iterate = makeIterator(myArr);
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
