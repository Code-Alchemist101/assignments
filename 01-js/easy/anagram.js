/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length==str2.length){
    let arr1 = str1.split('').sort();
    let arr2 = str2.split('').sort();
    if(JSON.stringify(arr1)==JSON.stringify(arr2)){
      return true
    } else{
      return false
    }
  } else{
    return false;
  }
}

console.log(isAnagram("hello","olleh"));

module.exports = isAnagram;
