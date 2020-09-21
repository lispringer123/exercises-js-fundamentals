/**
 * Given an input string, returns a copy of the input string with the
 * first letter capitalized.
 *
 * See:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 *
 * @param {string} string - The string to capitalized
 * @returns {string} A capitalized copy of the string
 */

function capitalize(string) {
  let firstLetter = string.slice(0,1)
  let everythingElse = string.slice(1)
  capitalizedFirstLetter = firstLetter.toUpperCase()
  capitalizedVersion = capitalizedFirstLetter + everythingElse
  return capitalizedVersion 
}

if (require.main === module) {
  console.log('Running sanity checks for capitalize:');
  console.log(capitalize('that hat is super cool man!') === 'That hat is super cool man!');
  console.log(capitalize('hold your horses rider.') === 'Hold your horses rider.');
  console.log(capitalize('abcd') === 'Abcd');
  console.log(capitalize('') === '');
  console.log(capitalize('ABC')=== 'ABC');
}



module.exports = capitalize;
