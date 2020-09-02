/** 1

*/
let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

console.log(student["courses"])
//or
console.log(student.courses)
student.locker
console.log(student.locker)
/** 2
retrive countyr
*/
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};

console.log(jane.location.country)
console.log(jane["location"]["country"])

/** 3
add properties 'age' and 'favorite food'
 to the fido object.
*/
let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido.age=9
fido["favorite food"]="vegetables"
console.log(fido.age)
console.log(fido["favorite food"])
/** 4
Add a property to the below object, jane, 
so that the code on line 13 logs 'Hej, Bobby!' 
to the console.
*/
let jane2 = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // add code here
  greet: (str) =>{console.log(`hej, ${str}`)}
};

jane2.greet('Bobby'); // Hej, Bobby!
/** 5
Snippet 1:

let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?
{prefix: "Pacific"}


Snippet 2:

let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // ?
{Indian: 'Pacific" }
*/

/** 6
let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

why "its true" never an output
all the properites names are
always strings
you should use obj.prop===true

*/

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  //prop is the name of the property not value of property
  if (prop === 'true') {
    console.log("It's true!");
  }
}
/** 7
Write code that stores all of the vehicle property names in an array called keys.

*/
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys=Object.keys(vehicle);
console.log(keys)

/** 8
convert to array
*/

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedPerson=Object.entries(person)
console.log(nestedPerson)

/** 9
doo the same but backwrards
*/
let nestedArray2 = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
let person2={}
nestedArray2.forEach(propp => {
  person2[propp[0]]=propp[1]
});

console.log(person2)
/** 10
write clone function
takes objec
and returns shallow copy
new object that has same key/value pairs
dont need to clone values as well
*/

/** long way
 * function clone(obj) {
  let pairs=Object.entries(obj);
  let clone={}
  pairs.forEach(pair=>{
    clone[pair[0]]=pair[1]
  })
  return clone
}
*/

function clone(obj){
  return Object.assign({},obj)
}
let person3 = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let clonedPerson3 = clone(person3);
person3.age = 34;

console.log(person3.age);       // 34
console.log(clonedPerson3.age); // 33


