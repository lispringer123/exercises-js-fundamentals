/**
 * Given an input string, returns the shortest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The shortest word in the input string
 */

function shortestWord(string) {
    array = string.split(' ')
    console.log('The array is: ',array)
    let shortestWordSoFar = array[0]
    var i;
    for (i = 0; i < array.length; i++){
      if (array[i].length < shortestWordSoFar.length){
        shortestWordSoFar = array[i]
      }
    }
    console.log('The shortest Word is: ',shortestWordSoFar)
    return shortestWordSoFar
  } 


if (require.main === module) {
  console.log('Running sanity checks for shortestWord:');
  console.log(shortestWord('mm tt iii i') === 'i');
  console.log(shortestWord('mmm t tt') === 't');
}

module.exports = shortestWord;
