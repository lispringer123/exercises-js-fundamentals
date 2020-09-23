/**
 * Given an array of integers, returns the count of odd integers in the array.
 *
 * See https://simple.wikipedia.org/wiki/Odd_number
 *
 * @example
 * countOdds([1, 2, 3, 4, 5, 19]); // => 4
 * countOdds([10, 10, 10]); // => 0
 * countOdds([1, 1, 1, 2]); // => 3
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The count of even integers in the array
 */
function countOdds(array) {
  count = 0
  for (i = 0; i < array.length; i++){
    if (array[i]%2 != 0){
      count ++
    }
  } 
  return count

}

if (require.main === module) {
  console.log('Running sanity checks for countOdds:');
  console.log(countOdds([1, 2, 3, 4, 5, 19]) === 4);
  console.log(countOdds([10, 10, 10]) === 0); 
  console.log(countOdds([1, 1, 1, 2]) === 3);
  console.log(countOdds([2, 2, 2, 1]) === 1);
}

module.exports = countOdds;
