// palindrome.js
function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome; // Export the function

// indexTest.js
//const isPalindrome = require('./palindrome'); // Import the function

// Test cases
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: true");
console.log("=>", isPalindrome("mom"));

console.log("");

console.log("Expecting: true");
console.log("=>", isPalindrome("abba"));

console.log("");

console.log("Expecting: true");
console.log("=>", isPalindrome("a"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("hi"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));
