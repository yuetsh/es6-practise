let x = 2;
console.log(x);

console.log('=====================');

function JSA() {
  for (let i = 1; i < 6; i++) {
    console.log(i);
  }
  console.log(i); // undefined
  console.log('=====================');

  for (var i = 1; i < 6; i++) {
    console.log(i);
  }
  console.log('=====================');
  console.log(i); // i == 6
}

JSA();

function JSB(num) {
  // let num = 5;  // ERROR
  let number = 5;
}

JSB(11);

console.log('=====================');

function varTest() {
  var x = 5;
  if (true) {
    var x = 55;
    console.log(x);
  }
  console.log(x);
}

varTest();
// See the compiled.js for difference.
function letTest() {
  let x = 5;
  if (true) {
    let x = 55;
    console.log(x);
  }
  console.log(x);
}

letTest();
