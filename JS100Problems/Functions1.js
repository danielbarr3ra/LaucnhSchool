/*
#1
*/
function sum(num,num2){
  return num+num2;
}
/*
#2
*/
function brendanEichQuote(){
  console.log("lways bet on JavaScript.")
}
//returns undefined; no return statement
/*
#3
*/
function cite(Author,quote) {
  console.log(`${Author}: ${quote}`)
}
cite('Brendan Eich', 'Always bet on JavaScript.');
/*
#4
*/
function squareNumber(num) {
  return num**2;
}
/*
#5
Determine the output that the following code will log to the console.

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree;


>it will give out a syntax error it is not calling a function
since it is missin gthe ()
*/
/*
#6
*/
function compareByLength(str1,str2) {
  if ( str1.length < str2.length ) {
    return -1;
  } else if ( str1.length > str2.length ) {
    return 1;
  } else {
    return 0;
  }
}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));   
/*
#7Use JavaScript's string methods on the string 'Captain Ruby' 
to produce the string 'Captain JavaScript'.
*/
let str='Captain Ruby'
str=str.replace("Ruby","JavaScript")
console.log(str)
//could have usede

//str.substring(0,8)+'JavaScript'
//str.split(' ')[0]+ ' JavaScript' coherces array to string
/*
#8
*/
function greet(str) {
  switch (str) {
    case 'en' : return "hi";
    case 'fr' : return "salut!";
    case 'pt' : return "Ola";
    case 'de' : return "hallo";
    case 'sv' : return "hej";
    case 'af' : return 'Haai!';
    default : return 'Not a Language';

  }
}
/*
Note that if we use return statements in the clauses, 
we don't need to include additional break statements, 
because return will immediately exit from the function
anyway.
*/
console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
console.log(greet('pt')); // 'Olá!'
console.log(greet('de')); // 'Hallo!'
console.log(greet('sv')); // 'Hej!'
console.log(greet('af')); // 'Haai!
/*
#9
Write a function that extracts the language code from a 
locale. A locale is a combination of a language code, 
a region, and usually also a character set, 
e.g en_US.UTF-8.
*/
function extractLanguage(locale) {
  return locale.split('_')[0];
}
console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16'));
/*
#10
Similar to the previous exercise, now write a function 
that extracts the region code from a locale. 
*/
function extractRegion(locale) {
  return locale.split('_')[1].split('.')[0];
}
console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'

/*
#11
Building on your solutions from the previous exercises,
write a function localGreet that takes a locale as input,
and returns a greeting. The locale allows us to greet people 
from different countries differently also when they share the 
language, for example:

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'

Distinguish greetings for English speaking countries like 
the US, UK, Canada, or Australia in your implementation, and 
feel free to fall back on the language-specific greetings in 
all other cases, for example:

localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'

When implementing localGreet, make sure to re-use your 
extractLanguage, extractRegion and greet functions from the previous exercises.
*/
console.log("-------------")
function localGreet(locale) {
  let lan = extractLanguage(locale);
  let reg = extractRegion(locale);
  
    switch (reg) {
      case 'US' : return 'Hey!';
      case 'GB' : return 'Hello!';
      case 'AU' : return 'Howdy';
      default : return greet(lan);;
    }

}

//dont use if statemnt use the default to put the
//else function ass such
//  case 'AU' : return 'Howdy';
//  default : return greet(language);
/*if i know that I wont have unexptected regions
i should not bother to add the not region case
so i can shorten my code to impment the greeting
for other ragions there there
*/

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'

