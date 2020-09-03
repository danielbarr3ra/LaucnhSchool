/**1
 Write a function that returns the first element of
an input array. For example:

first(['Earth', 'Moon', 'Mars']); // 'Earth'
What would you return if the input array was empty?
//undefined
*/
function first(arr) {
  return arr[0]
}
console.log(first(['Earth', 'Moon', 'Mars']));
console.log(first([]))
/**2
function last element
*/
function last(arr) {
  return arr[arr.length-1]
}
console.log(last(['Earth', 'Moon', 'Mars']));
console.log(last([]))
/**3
 Remove 'fossil' from the array,
  then add 'geothermal' to the end of the array.
*/
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion']
energy.shift()
energy.push('geothermal')
console.log(energy)
/**4
Split the string alphabet into an array of characters. 
*/
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
console.log(alphabet.split(''))
//Array.from(alphabet) would work too
/**5
 Count the number of elements in scores that are 100 or above.
*/
let scores = [96, 47, 113, 89, 100, 102];
console.log(scores.filter(score=>score >= 100).length)

/**6
  Write some code that iterates through the sub-arrays 
  and logs each vocabulary word to the console.
*/
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  [['excited','ha','ha',['no','no']], 'eager', 'enthused', 'animated']
];

function nested(arr) {
  return (arr.forEach(word => {
    if (Array.isArray(word)){
      return nested(word)
    }
    return console.log(word)
  }))
}

nested(vocabulary)
/**7
let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);
//false the objects are not in the same location in 
memory!
strict equlaity evalutes values of primitiwves
with objects it checks the location 
*/

/**8
 function filter(input) {
  // Is input an array?
  Array.isArray(input)
  typeOf returns object
}
*/

/**9
 Write a function that checks whether or not a 
 particular destination is included within destinations,
  without using the built-in method Array.prototype.
  includes()
*/
let destinations = ['Prague', 'London', 'Prague ','Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City', 'Barcelona'];

function contains(str,arr) {
  return (arr.reduce((acc,curr)=>{
    if (curr===str){
      return !acc
    }
    return acc
  },false))
}
console.log('-----------9')
console.log(contains('Prague',destinations)) //true
console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false
/**10
 join using -
*/
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
console.log(passcode.join('-'))
/**11
 write function that returns one by one and logs it
*/
let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

function removes(arr) {
  console.log('log: \n')
  while (arr.length>0) {
    console.log(arr.shift())
  }
}
removes(groceryList)



