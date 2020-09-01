/*
LOOPS
1.
Add some code inside of the for loop below that logs 
the current value of i to the console on each iteration. 
Before you run the code: What sequence of numbers do you 
expect to be logged?
0 2 4 6 8 10
*/
for (let i = 0; i <= 10; i += 2) {
  // include your code here
  console.log(i)
}
/*
2.The code below logs the numbers from 1 to 10.
Change it, so that it instead logs the numbers 
from 10 to 1 in decreasing order, and then logs 
'Launch!'.

for (let i = 1; i <= 10; i += 1) {
  console.log(i);
}
*/
for (let i = 10; i > 0; i -= 1){
  console.log(i)
  i===1 ? console.log("launch") : {}
}
/*
3. write  loop that loggs greeting three times
*/
let greeting ='Aloha!';
for (let i = 0; i < 3; i++) {
  console.log(greeting)
}
/*
4.
Write a for loop that iterates over all numbers from 1 to 
100, and outputs the result of multiplying each 
element by 2.
*/
for (let i = 1; i <= 100; i++) {
  console.log(i*2)
}
/*
5.
Using the code below as a starting point, write a while 
loop that logs the elements of array at each index, and 
terminates after logging the last element of the array.
*/
let array = [1, 2, 3, 4];
let index = 0;
while (index < ( array.length )) {
  console.log(array[index]);
  index += 1
}



/*
6.Then write a for loop that loops over the elements of 
the array cities and logs the length of each string to the
console. If the element is null, skip forward to the next
iteration without logging anything to the console.
*/
let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let index = 0; index < cities.length; index += 1) {
  if ( cities[index] === null){
    continue
  }
  console.log(cities[index].length)
}
/*

7. The following code keeps looping forever. 
(You can hit Ctrl-C to stop it.) Why is that? 
Also modify it so that it stops after the first iteration.

for (let i = 0; ; i += 1) {
  console.log("and on");
}

there is no condition that checs when to stop
the three parameters inside the for loop are optional
you can add it inside the block or in the parameters
===
for (let i = 0; i < 10 ; i += 1) {
  console.log("and on");
}

or 

for (let i = 0; ; i += 1) {
  console.log("and on");
  if (i >= 10) {
    break
  }
}
===
*/

/*
8.
Write a while loop that logs all odd natural 
numbers between 1 and 40.
*/
let count=1;
while (count<41){
  if ( count%2 === 1 ){
    console.log(count)
  }
  count += 1; // count += 2 and you can remove the if above
}
//shouold instead use the increment by two to avoid the
// the need of logic
/*
9.
loop over the elements of the array fish, logging each one. 
Terminate the loop immediately after logging the string 
'Nemo'.
*/
let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
for (let index = 0; index < fish.length; index += 1) {
  console.log(fish[index])
  if (fish[index]==='Nemo') {
    break
  } 
}

/*
10.
What is the difference between the following two code 
snippets? Check the MDN documentation on while 
and do...while.

let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}
let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

the do while will execute console.log('whoool) 
at least one once the counter is  set to -1 then it wont
satisfy the while condition and not be able to ru

in the while case the counter since counter is set to 0
it iwll not exectue at all because it does not satify the
condtion

*/


