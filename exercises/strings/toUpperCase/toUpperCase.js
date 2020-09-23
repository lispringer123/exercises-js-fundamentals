/**
 * Given an input string, returns a copy of the string with all-uppercase letters.
 *
 * Don't use JavaScript's built-in string.toUpperCase
 *
 * Only worry about characters in the ASCII range: http://www.asciitable.com/
 *
 * Do nothing to characters that have no corresponding uppercase character, e.g.,
 * don't do anything special for a space, a number, a dash, etc.
 *
 * @example
 * toUpperCase('HelLo fRiends!'); // => 'HELLO FRIENDS!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A uppercase copy of the input string
 */

function toUpperCase(string) {
  console.log('The string is: ', string)
  let newString = ''
  for (let i = 0; i < string.length; i++){
    console.log('the original string is:', string)
    var theCurrentChar = string.charCodeAt(i);
    if (theCurrentChar >= 97 && theCurrentChar <= 122){
      console.log('The lowercase character is: ', string[i])
      theCurrentChar = theCurrentChar - 32
      console.log(theCurrentChar)
      let newChar = String.fromCharCode(theCurrentChar)
      console.log('the new, uppercase letter is: ', newChar)
      newString = newString + newChar
    } else{
        newString = newString + string[i]
    }

  }
  console.log('The new string is: ', newString)
  return newString
}

if (require.main === module) {
  console.log('Running sanity checks for toUpperCase:');
  console.log(toUpperCase('HelLo fRiends!') === 'HELLO FRIENDS!')
  console.log(toUpperCase('HelLO fRiEnds!') === 'HELLO FRIENDS!')
  console.log(toUpperCase('hello friends!') === 'HELLO FRIENDS!')



}

module.exports = toUpperCase;
