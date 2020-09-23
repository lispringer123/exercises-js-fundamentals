/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

function longestWord(string) {
  array = string.split(' ')
  console.log('The array is: ',array)
  let longestWordSoFar = array[0]
  var i;
  for (i = 0; i < array.length; i++){
    if (array[i].length > longestWordSoFar.length){
      longestWordSoFar = array[i]
    }
  }
  console.log('The longest Word is: ',longestWordSoFar)
  return longestWordSoFar
} 
 

if (require.main === module) {
  console.log('Running sanity checks for longestWord:');
  console.log(longestWord('t mm') === 'mm');
  console.log(longestWord('t mmm') === 'mmm');


}

module.exports = longestWord;