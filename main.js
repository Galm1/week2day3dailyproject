// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

let num1 = 1;
let num2 = 2;

function max(x, y) {
  if (x >= y) {
    return x
  }
   return y
}

console.log(max(num1, num2));

//If you need to know which cup is larger to hold more *enter drink of your choice*


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x,y,z){
    if (x > y && x > z) {
      return x
    } else if (y > x && y > z) {
      return y
    } else {
      return z
    }
}

let x = 1
let y = 2
let z = 3

console.log(maxOfThree(x,y,z));

//to find the tallest person to reach on top of the fridge for *enter drink of your choice*

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true
  } else if (char = 'y') {
    return 'sometimessss'
  }else {
    return false
  }
}

console.log(isVowel('y'));

//for someone learning english. they can enter the letter and find out if it is as vowel or not.

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(x, y){
   return x + y
}

console.log(sum(1, 2));

//to find out if you added one cup of *enter drink of your choice* to another cup of *enter drink of your choice* then how much of *enter drink of your choice* would you have?

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(x, y, z){
  return (x + y + z)/3
}

console.log(avg(1, 2, 3));

//to find out your average daily intake of *enter your drink of choice* over a span of three days.


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(x){
  return x.length;
}

console.log(getLength('stringalingdingding'));

//to find out out many letters are in the name of *enter your drink of choice*

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(x,y){
  if (y > x) {
    return true
  }
    return false

}

console.log(greaterThan(2,5));

//so you can compare the weight of one cup of *enter drink of your choice* to another.

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(x){
  return 'hello, ' + x;

}

console.log(greet('YO MAMA'));

//to greet people to your website after they enter thier info.

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madlib(x,y,z,outofletters){
  return x + outofletters + z + y;
}

console.log(madlib('quick brown ','e','jumps over the fenc','fox '));

//to make a madlib. duh.
