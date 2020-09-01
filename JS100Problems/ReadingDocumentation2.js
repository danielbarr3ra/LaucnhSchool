/*
READING DOCUMENTATION 2
1. Style Guide
In the following code snippet, find all violations of the style guide.
Rewrite it so that it conforms with the guide.

let ice_cream_taste = 'chocolate'
let ice_cream_density = 10

while(ice_cream_density > 0)
{
    console.log('Drip...');
    ice_cream_density -= 1;
}

console.log('The '+ ice_cream_taste +' ice creaam melted.');
------
let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while ( iceCreamDensity > 0 ){
  console.log('Drip...');
  iceCreamDensity -= 1;
}

console.log('The ' + iceCreamTaste + ' ice creaam melted.');


2. Data Types
Without looking into your notes, try to remember which primitive 
data types are defined in JavaScript. Then find this information on MDN.
string,number,bolean,undefined, null did not remember bigint, symbol

Largest Number
3.Using the documentation, determine how we can find the largest numeric 
value that can be represented in JavaScript. Write a line of code that 
returns this value.

function largest() {
  let i=1;
  while (true) {
    if ( i < Infinity ){
      i += 1;
   } else {
    return i;
    break;
  }
}
}

Actually Number.MAX_VALUE property represents the maximum numeric
value represented in javascritp
it is a static property
MAX_SAFE_INTEGER LARGEST NUMBER THAT CAN BE PROCESSED AND BOMPARED
WITH PRECISION  


4.Find the MDN documentation on operator precedence, and use it to find
out which result the expression 4 * 5 + 3 ** 2 / 10 evaluates to.
4*5+9/10=20+0.9=20.9

5.Date
Find out what Date.now() returns.
numeric values corresponidn to current time
numeric milliseconds elapsed since jan 1 1970 0:00:00 UTC with
leap second igonre

6.
The MDN page for Date lists two methods to get the year of a date.

let today = new Date();

today.getYear();
today.getFullYear();
What is the difference between the two methods and which one should you use?
.getYear() returns 2-3 digitis  of year of specified date acc to local time
.getFullYear() returns 4 digits for 4 digit years of the specified date
accoridng to local time

use getFull year


7.Argument Signatures
How many arguments does the Array.prototype.join() 
method expect? What happens if you call it with less 
or more arguments?
it expects the separator
if ommited the array elements are separated with ","
if empty string all elements are joined without any char. between them

8.String Concatenation
Find out how we can join two or more strings together.
could use the + operator or
use .concat() method expectin a string

9. SyntaxError
The below code raises a SyntaxError. If you run the code, you'll see the following error message:

SyntaxError: Unexpected token &&
Find and read the documentation about this error on MDN. Then, fix the code.

let speedLimit = 60;
let currentSpeed = 80;

if (currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}
------
should ecnloces the if statement compeltoly:
if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5))


10. TypeError
Run the following code.

let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}
You'll see that it raises an error:

TypeError: tweet.length is not a function



why type error:
o when the JavaScript engine encounters 
tweet.length(), there is a type mismatch: 
tweet.length is expected to be a number, 
but we use it as a function.

you are trying to access a method named lenght()
you schould be accesing the property .length  no parenthesis


You can't usually do this, because there is no difference in 
JavaScript between a method and a property containing a function
-- they are exactly the same thing! You create methods by assigning
functions to properties.

so using () tells the engine how to use that property intereist
thats why there is a type mismatch
*/