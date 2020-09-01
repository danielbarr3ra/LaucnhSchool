/*
#1
the falsy values are
null, undefined, NaN, //forgot 0 '' "" -0 0n (BigInt zero)
everything else even objects are truthy
*/
/*
#2
The code provided below will randomly initialize
randomNumber to either 0 or 1 each time it is executed.

Write an if statement that logs 'Yes!' if randomNumber
is 1, and 'No.' if randomNumber is 0.
*/
let randomNumber = Math.round(Math.random());
if (randomNumber){
  console.log('Yes.')
} else {
  console.log('No')
}

/*
#3
Take your code from the previous exercise and rewrite
the conditional so that it uses the ternary if-then-else 
operator.
*/
randomNumber ? console.log("YES") : console.log("NO");
// also you can use consoel.log(ternary operaotor) 
// since it is an expression that eva to string value
// it can be used as argument to console.log
/*
#4Initialize a variable weather with a string value 
being "sunny", "rainy", or anything else.

Write an if statement that logs:

"It's a beautiful day!" if weather 
is assigned to the string "sunny",

"Grab your umbrella." if weather is 
assigned to the string "rainy", and

"Let's stay inside." otherwise.

Test your code with different values for weather.
*/
let weather='sunny'

if (weather === 'sunny') {
  console.log("It's a beautiful day!");
} else if (weather === 'rainy' ) {
  console.log("Grab your umbrella.");
} else {
  console.log("Let's stay inside.");
}
/*
#5Take a look at the code below. Without running it, 
determine what it will log to the console. 
If you're not sure, refer to the MDN documentation on 
switch statements.

let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}
//since there is no break it will fall through
so you logs "neigh","tweet tweet","*cricket*"

perform the cae that matches the switch
and perform everythign afters it
(it switches on the actions)
so you gotta add break
if not it falls thorugh
*/
/*
#6Take your code from the previous Check the 
Weather exercise and rewrite it as a switch statement. 
Feel free to add more cases besides 'sunny' and 'rainy'.
*/
weather="rainy"
switch (weather) {
  case "sunny":
    console.log("It's a beautiful day!")
    break;
  case "rainy":
    console.log("Grab your umbrella.")
    break;
  default:
    console.log("lets stay inside.")
    break; //no break needed defensive programming
    //in case you add another case in the future
}
/*
#7
Predict the output of the following code:

if (false || true) {
  console.log('Yes!');
} else {
  console.log('No...');
}

//if statemenent evaluates to truu becasue of or
consoel.log('yes!')
*/
/*
#8
Predict the output of the following code:

if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}

// consoel.log("no...")
if evaluates to false
*/
/*
#9Without running the below code, determine what will 
be logged to the console.

let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);

$3.99
cinse true is negated to false so the
ternary operators uses the operand for the
false case whcih is the second one 3.99
*/
/*
#10
Determine what the following code snippet logs. 
First solve it in your head or on paper, and only 
then run it in your JavaScript console to check the
 result.

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration &&
 (speed > 0 || acceleration > 0);

console.log(isMoving);


it returns true


Bonus question: Do we need the parentheses in 
the boolean expression or could we also have written 
the following?

let isMoving = brakingForce < acceleration &&
 speed > 0 || acceleration > 0;

 
 yes becaeu < > <= >= get evaluated first from left to right
  and then && have precenece over || 
  so it boils down to
  true && false || true
  false || true
  true

  in this case this order ends up giving
 the same answer but the logic is not the same 
 and it could lead to bugs in the future
*/