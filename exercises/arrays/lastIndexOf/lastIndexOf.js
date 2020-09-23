/**
 * Given an array and a value, returns the index of the last occurence of
 * the value. If the value is not found, returns -1.
 *
 * The array doesn't need to contain a single type of data.
 *
 * @example
 * lastIndexOf([10, 20, 30, 20], 20); // => 3
 * lastIndexOf([10, 20, 30, 20], 17); // => -1
 * lastIndexOf(['giraffe', giraffe', 'banana'], 'giraffe'); // => 1
 * lastIndexOf(['giraffe', giraffe', 'banana'], 'banana'); // => 2
 *
 * @param {object[]} haystack - An array
 * @param {object} needle - The value to search for
 * @returns {boolean} The index of the last occurrence of the value in the
 *  array, or -1 if it's not found.
 */
function lastIndexOf(haystack, needle) {
  console.log('The original array is: ', haystack);
  backwardsArray = haystack.reverse();
  console.log('The reversed array is: ', backwardsArray);
  for (i = 0; i < backwardsArray.length; i++){
    if(backwardsArray[i] === needle){
      indexOfReverse = backwardsArray.indexOf(backwardsArray[i]);
      console.log('The index of the needle in the reversed array is:', indexOfReverse);

      indexOfLastElement = haystack.length - 1
      console.log('The index of the last element in the original array is: ', indexOfLastElement);

      theLastIndexOf = indexOfLastElement - indexOfReverse;
      console.log('The index of the first occurence of the needle is: ', theLastIndexOf );
      return theLastIndexOf;
    }
  }
  return -1
}

if (require.main === module) {
  console.log('Running sanity checks for lastIndexOf:');
  console.log(lastIndexOf([1, 2, 2], 2) === 2)
  console.log(lastIndexOf([1, 2, 2, 2], 2) === 3)
  console.log(lastIndexOf([1, 3, 1, 1, 3], 3) === 4)
  console.log(lastIndexOf([1, 3, 3, 3, 3], 1) === 0)
  console.log(lastIndexOf([1, 3, 1, 1, 3, 1, 5], 1) === 5)
}

module.exports = lastIndexOf;
