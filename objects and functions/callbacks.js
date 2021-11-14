// Callback functions
let val;
function multiplyByTwo(a, b, c, callback) {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr[i] = callback(arguments[i] * 2);
  }

  return arr;
}

function addOne(a) {
  return a + 1;
}

val = multiplyByTwo(5, 10, 20);

// for (let i = 0; i < val.length; i++) {
//   val[i] = addOne(val[i]);
// }

console.log(val);
