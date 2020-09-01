/*
READING DOCUMENTATION 1
1 What is an excellent destination when looking for JavaScript documentation?

the MDN website

2.
Find out whether JavaScript has a method to lowercase a string, for example 
converting 'Aloha, World!' into 'aloha, world!.
yes!
console.log('Aloha, World'.toLowerCase())

3.
Is there a method to capitalize a string, for example turning 
'mountain' into 'Mountain'?
no only for all of the string letters, we will
have to implement it
console.log('mountain'.toUpperCase())

4.
How can we access the element 'and' in the array ['fish', 'and', 'chips']?
['fish','and','chips'][1]

5
What happens if we take the array ['fish', 'and', 'chips'] and try to access the element at index position 10? Try this in your JavaScript console.
it returns undefined (forgiving language)

6.
What are the return values of the statements on lines 3 to 5? Refer to the MDN documentation about the Array object for help.

let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

trees[trees.length - 1];   >palm tree
trees.pop();  >palm tree
trees[trees.length - 1]; >sequoia

7.
Look up the MDN documentation for the typeof operator. What is its return value? Determine what the following statements will return:

typeof 23.5; > number
typeof 'Call me Ishmael.'; >string
typeof false; > bolean
typeof 0; >number
typeof null; > OBJECT NULLL IS OBJECT
typeof undefined; >undefined

8. Return Values
Consider the following code snippet:

let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;
What will the following statements return?

typeof tweet; string
typeof words; object
typeof isValid; bolean

9. Method Chaining
Given the following tweet:

let tweet = 'Starting to get the hang of it... #javascript #launchschool';
What will the following statements evaluate to?

tweet.split(' '); Array=[Starting, to, get, the, hang, of, it..., 
  #javascript, #launchschool]
tweet.split(' ').reverse(); [launchschool,javascript...Starting]
tweet.split(' ').reverse().join(' '); "#launchshool #javascript .... Starting"
Reference the documentation to learn about the return value of each method.


10.Equality
In your JavaScript console, execute the following two lines of code to check whether their return values differ and if so, how. Take a look at the MDN documentation on equality comparisons to read about how == and === differ.

'8' == 8; true they are getting coherced truthy
'8' === 8; false it is comparing the typeoff also


