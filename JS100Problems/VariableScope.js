/**1
hat will the following code log to the console
and why? Don't run it until you have tried to answer.

console.log(greeting);

var greeting = 'Hello world!';


will log undefined, the variable should
be declared and assiigned before the console
*/
console.log(greeting);

var greeting = 'Hello world!';
/**2
console.log(greeting);

let greeting = 'Hello world!';

error let variables are not hoisted
*/

/**3
if (true) {
  let myValue = 20;
}

console.log(myValue);

error the scope of let is only within the if block
*/

/**4
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

1, because the if block can acces a since it is within 
the funciton block
*/

/**5
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

reference error, if let would be dclared before line 54
then this new a wouuld shadow the a in 51, instaed the line
51 gives a reference error becuase a is not available yet

shadowing
function myFunction() {
  let a = 1;

  if (true) {
    let a = 2;
    console.log(a);
  }
  console.log(a)
}

myFunction(); > 2 1
*/

/**6
What will the following code log to the console and why? 
Don't run it until you have tried to answer.

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

false
the be inside the scope of the if block
disapears once it is over
*/

/**7
let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();
1 outerscope variables accesible inside their scopes
*/

/**8
let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);


2, the a in the function is now a parameter
so by declaring b as 2 and passing it as an argument to
my function it prints out 2
*/

/**9
const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

error, the variable was declared with const so you
 cant reasing it

 if it was a let the a would be rasigned to 2
 and when accesed out of the function it would
 become two if the funciton is invoked before
*/


/**10
const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);


{firstName: 'Jane',
  lastName: 'Doe'}

  yes the object was declared with const and
  cant be reasigned but its properties can be modified
  in other words const objects are still mutable
  the Objec.freeze() method makes it immutable, it 
  only applies to immediate properties of the
  object, if the value of those properties are
  objects themselves they can still be mutated
*/

