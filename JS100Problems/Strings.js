/**1
Determine the length of the string 
"These aren't the droids you're looking for.".
*/
console.log("These aren't the droids you're looking for.".length)
/**2
 Take the string 'confetti floating everywhere' 
 and transform it to upper case.
*/
console.log('confetti floating everywhere'.toUpperCase())
/**3
Implement a function repeat that repeats an input string 
a given number of times, as shown in the example below; 
without using the pre-defined string method 
String.prototype.repeat().
*/
function repeat(num,str) {
  let i=1;
  let a=str
  while ( i < num ) {
    str += a;
    i += 1;
 }
 return str;
}

console.log(repeat(5,'ha'));

/**4
 Take the following rhyme:

A pirate I was meant to be!
Trim the sails and roam the sea!

How can you assign this string to a 
single variable, preserving the line break?

using the \n
also known as escape notation
*/

let str4="A pirate I was meant to be!\nTrim the sails and roam the sea!"
console.log(str4)
/**5
Given strings like the following, how can you check 
whether they're equal irrespective of whether the 
characters they contain are upper or lower case?

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

using toUpperCase(); or toLowerCase(); methods
like so
*/
function check(str1,str2){
  if ( str1.toUpperCase() === str2.toUpperCase() ) {
    return true
  }
  return false
}
let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

console.log(check(string1,string2))
console.log(check(string1,string3))

/**6
 Write code that checks whether the string byteSequence contains the character x.

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu'
*/
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu'
if (byteSequence.split('x').length > 1) {
  console.log('yes there is an x')
} else {
  console.log('no')
}
console.log(byteSequence.includes('x'));
/**7
Write a function that checks whether a string is 
empty or not. For example:

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true
*/
function isBlank(str){
  return (str.length===0)
}
console.log("7---------")
console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true
/**8
 hange your isBlank function from the 
 previous exercise to return true if the 
 string contains only whitespaces. For example:
*/
function isBlank2(str){
  /*
  if (str == false){
    return true
  }
  return false
  */
  //could also use trim()
  return str.trim().length === 0;
}
console.log("8---------")
console.log(isBlank2('mars')); // false
console.log(isBlank2('  '));   // true
console.log(isBlank2(''));     // true/
/**9
Write code that capitalizes the words in the
string 'launch school tech & talk', so that you
get the string 'Launch School Tech & Talk'.
*/

function capitalize(str) {
  return str.split(" ").map((word)=>{
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')
}

let exa='launch school tech & talk';
console.log(capitalize(exa))
