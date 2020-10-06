/**
 * Given an input string, returns a copy of the string in title case.
 *
 * For our purposes, title case is words separated by spaces with the
 * first letter of each word being capitalized and every other letter
 * being lowercsae.
 *
 * Don't do anything special with non-alphabetic characters (numbers,
 * puncuation, etc.). Don't worry about special rules like not capializing
 * definite articles (a, an, the, etc).
 *
 * @example
 * toTitleCase('wElCoMe to THE wILD wiLD WEST!'); // => 'Welcome To The Wild Wild West!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */

function toTitleCase(string) {
  lowerCaseString = string.toLowerCase()
  array = lowerCaseString.split(' ')
  console.log('The array is:', array)


  
  for (let i = 0; i < array.length; i++){
    firstChar = array[i][0]
    console.log('The first character of the word: ', firstChar)
    updatedFirstChar = firstChar.toUpperCase()
    console.log('The updated first character of the word is: ', updatedFirstChar)
    array[i][0] = array[i][0].replace(array[i][0], updatedFirstChar)
    console.log(array[i][0])

  }


}

if (require.main === module) {
  console.log('Running sanity checks for toTitleCase:');
  console.log(toTitleCase('wElCoMe to THE wILD wiLD WEST!') === 'Welcome To The Wild Wild West!' )

}

module.exports = toTitleCase;
