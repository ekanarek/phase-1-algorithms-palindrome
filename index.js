function isPalindrome(word) {
  const wordBackwards = word.split("").toReversed().join("");
  return word === wordBackwards ? true : false;
}

/*
Pseudocode:
Takes string as an argument
Iterates over the string and creates a new string of the same letters, backwards
Compares argument to the new string
Returns true if word === backwards word
Returns false if word !== backwards word
*/

/*
Code Explanation:  
- the wordBackwards variable is set to the argument split into an array, reversed, and then re-joined into a string
  - argument is compared to wordBackwards, returns true if they are deeply equal and false if they are not
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log(isPalindrome("tacocat"));

  console.log("");

  console.log("Expecting: false");
  console.log(isPalindrome("palindrome"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
