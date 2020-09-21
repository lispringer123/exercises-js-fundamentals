/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

function longestWord(string) {
  string.split(' ')
  let longestWordSoFar = string[0]
  for (element in string){
    if(element.length >longestWordSoFar.length){
      longestWordSoFar = element
      console.log('The longest word so far is:', longestWordSoFar)
    }
  }
  return longestWordSoFar
}

if (require.main === module) {
  console.log('Running sanity checks for longestWord:');
  console.log(longestWord('t mm sss') === 'sss');
  console.log(longestWord('a mm sss mmmm') === 'mmmm');

}

module.exports = longestWord;
