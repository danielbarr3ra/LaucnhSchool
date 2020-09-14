//1
function isOdd(num) {
  return ( (num%2)**2 === 1 ) ? true: false;
}
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
//2
for (let index = 1; index < 100; index += 2) {
  //console.log(index); to avoid clutter in the console
  }
//3
for (let index = 2; index < 99; index += 2) {
  //console.log(index);
  }
//4
let rlSync = require('readline-sync');

function room() {
  let length = rlSync.question("Enter the length of the room in meters:");
  let width = rlSync.question("Enter the width of the room in meters:");
  console.log(`The area of the room is ${(width*length).toFixed(2)} square meters (${(width*length*10.7639).toFixed(2)})`)
  }

//room()


//5
function tip() {
  let bill = parseInt(rlSync.question("what is the bill "))
  let percent = parseInt(rlSync.question("what is the tip percentage? "))
  let tiped = (bill*percent/100)
  let total = (tiped+bill)
  console.log(`The tip is $${tiped.toFixed(2)}`)
  console.log(`The total is $${total.toFixed(2)}`)
}
tip()
//6