function isPalindrome(word) {
  // Write your algorithm here
  
  let reversed = [...word].reverse().join("")
  return word === reversed
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  1. split the word to an array and declare it a variable
  2. Use reverse function to reverse the array
  3. Put it back together using join
  4. Compare both
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
