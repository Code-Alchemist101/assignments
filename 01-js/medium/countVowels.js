/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let counter = 0;
  let arr = str.toLowerCase().split('').sort();
  let vowels = ['a','e','i','o','u'];
  arr.forEach((x) =>{
    if(vowels.includes(x)){ counter++; }
  })
  return counter;
}

console.log(countVowels("aeios"));

module.exports = countVowels;