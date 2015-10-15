'use strict';

var x = 2;
console.log(x);

console.log('=====================');

function JSA() {
  for (var _i = 1; _i < 6; _i++) {
    console.log(_i);
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
  var number = 5;
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
  var x = 5;
  if (true) {
    var _x = 55;
    console.log(_x);
  }
  console.log(x);
}

letTest();
