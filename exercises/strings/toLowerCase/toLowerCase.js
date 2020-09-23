/**
 * Given an input string, returns a copy of the string with all-lowercase letters.
 *
 * Don't use JavaScript's built-in string.toLowerCase
 *
 * Only worry about characters in the ASCII range: http://www.asciitable.com/
 *
 * Do nothing to characters that have no corresponding lowercase character, e.g.,
 * don't do anything special for a space, a number, a dash, etc.
 *
 * @example
 * toLowerCase('HelLo fRiends!'); // => 'hello friends!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */

function toLowerCase(string) {
  console.log('The string is: ', string)
  let newString = ''
  for (let i = 0; i < string.length; i++){
    console.log('the original string is:', string)
    var theCurrentChar = string.charCodeAt(i);
    if (theCurrentChar >= 65 && theCurrentChar<= 95){
      console.log('The capitalized character is: ', string[i])
      theCurrentChar = theCurrentChar + 32
      console.log(theCurrentChar)
      let newChar = String.fromCharCode(theCurrentChar)
      console.log('the new, lowercase letter is: ', newChar)
      newString = newString + newChar
    } else{
        newString = newString + string[i]
    }

  }
  console.log('The new string is: ', newString)
  return newString
}


if (require.main === module) {
  console.log('Running sanity checks for toLowerCase:');
  console.log(toLowerCase('HelLo fRiends!') === 'hello friends!')
  console.log(toLowerCase('HelLO fRiEnds!') === 'hello friends!')
  console.log(toLowerCase('hello friends!') === 'hello friends!')

}

module.exports = toLowerCase;
