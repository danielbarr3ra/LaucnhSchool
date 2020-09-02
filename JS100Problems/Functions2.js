/**1

*/
function greet(greeting="hello") {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
// should log: Hello, world!
/**2

*/
function greet2(greeting="hello", recip='world') {
  console.log(greeting +", "+ recip+"!");
}
greet2();                                // logs: Hello, world!
greet2('Salutations');                   // logs: Salutations, world!
greet2('Good morning', 'Launch School'); 

/**3
Now we are going to outsource the greeting and 
recipient to functions. Change the function greet
 from the previous exercise, so that it doesn't 
 take any arguments, and instead calls the functions
  greeting and recipient defined below.
*/
function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}
function greet3() {
  console.log(greeting() +", "+ recipient()+"!");
}
console.log('-----3')
greet3()
/**4
function of bmi
*/
function calculateBMI(h,w){
  return (w / (h/100)**2).toFixed(2)
}
console.log(calculateBMI(180,80))
/**5
get cat age
human y=15 cat y
sec hu y = 9 c y
after 4 cat year
*/
function catAge(age){
  if (age===0) {
    return 0
  } else if (age===1){
    return 15
  } else if (age===2){
    return 24
  } else{
    return 24 + (age-2)*4
  }
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32
/**6
function that return string w/o last char
*/
function removeLastChar(str) {
  return str.slice(0,-1)
}
console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'

/**7
fix this using arrow syntax should still log same
sentence

const template = 'I VERB NOUN.';

function sentence(verb, noun) {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

console.log(sentence('like', 'birds'));
*/
const template = 'I VERB NOUN.';

const sentence = (verb, noun) =>{
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}


console.log(sentence('like', 'birds'));

/**8
let initGame = function () {
  return {
    level: 1,
    score: 0
  }
};

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);
fix it to arrow function
*/


let initGame = () => ({level: 1,score: 0});

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);

