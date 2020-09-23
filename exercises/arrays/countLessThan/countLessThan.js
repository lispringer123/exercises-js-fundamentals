/**
 * Given an array of numbers and a threshold number, return the count of
 * elements in the array strictly less than the threshold number.
 *
 * "Strictly less than" means we want numbers less than (<) and not
 * less than or equal to (<=).
 *
 * @example
 * countLessThan([1, 2, 3, 4, 5], 2); // => 1
 * countLessThan([1, 2, 3, 4, 5], 17); // => 5
 * countLessThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1); // => 0
 * countLessThan([10, 10, 10, -10, 15, 7], 10); // => 2
 *
 * @param {number[]} array - An array of numbers
 * @param {number} threshold - The threshold for counting
 * @returns {number} The number of elements in the array less than threshold
 */
function countLessThan(array, threshold) {
  numberToBeat = threshold;
  count = 0
  for (i = 0; i < array.length; i++){
    if (array[i] < numberToBeat){
      count ++
    }
  }
  return count
}

if (require.main === module) {
  console.log('Running sanity checks for countLessThan:');
  console.log(countLessThan([1, 2, 3, 4, 5], 2) === 1);
  console.log(countLessThan([1, 2, 3, 4, 5], 17) === 5);
  console.log(countLessThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1) === 0);
  console.log(countLessThan([10, 10, 10, -10, 15, 7], 10) === 2);
  

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countLessThan;


