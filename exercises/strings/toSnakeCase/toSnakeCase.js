/**
 * Given an input string, returns a copy of the string in snake case.
 *
 * In snake case, every letter is lowercase and spaces are replaced
 * with underscores.
 *
 * See https://en.wikipedia.org/wiki/Snake_case
 *
 * @example
 * toSnakeCase('HeLlo fRIENds'); // => 'hello_friends'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A snake-case copy of the input string
 */

function toSnakeCase(string) {
  console.log('The string is: ', string)
  newString = string.toLowerCase()
  newString = newString.replace(/ /g, '_')
  return newString
}





if (require.main === module) {
  console.log('Running sanity checks for toSnakeCase:');
  console.log(toSnakeCase('HeLlo fRIENds') === 'hello_friends') 
  console.log(toSnakeCase('HELLO FRIENDS I AM JIMMY') === 'hello_friends_i_am_jimmy')
  console.log(toSnakeCase('hEy mAn what is up') === 'hey_man_what_is_up')

  
}

module.exports = toSnakeCase;
