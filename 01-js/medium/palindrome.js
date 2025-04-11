/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    let arr = str.toLowerCase().split('');
    let newarr = arr.reverse()
    return arr === newarr;
}

console.log(isPalindrome("Malayalam"));

module.exports = isPalindrome;
