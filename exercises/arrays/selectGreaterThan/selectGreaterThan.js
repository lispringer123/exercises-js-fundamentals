/**
 * Given an array of numbers and a treshold value, returns a new array
 * consisting of only those numbers strictly greater than the threshold.
 *
 * Return an empty array if no such numbers exist.
 *
 * @example
 * selectGreaterThan([1, 2, 3, 4, 5], 2); // => [3, 4, 5]
 * selectGreaterThan([1, 2, 3, 4, 5], 17); // => []
 * selectGreaterThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1); // => [2, 2, 3, 4, 2];
 * selectGreaterThan([10, 10, 10, -10, 15], 10); // => [15]
 * selectGreaterThan([10, 20, 30, 40], 100); // => []
 *
 * @param {number[]} array - An array of numbers
 * @param {number} threshold - The threshold for selecting
 * @returns {number[]} A new array consisting of all the numbers in input array
 *  strictly greater than the threshold
 */
function selectGreaterThan(array, threshold) {
  let newArray = []
  for (let i = 0; i < array.length; i++){
    if (array[i] > threshold){
      newArray.push(array[i])
      console.log(newArray)
    }
  }
  if (newArray.length === 0){
    return []
}
console.log('The original array was:', array)
console.log('The new array is:', newArray)
return newArray
}

if (require.main === module) {
  console.log('Running sanity checks for selectGreaterThan:');
  console.log(JSON.stringify(selectGreaterThan([1, 2, 3, 4, 5], 2)) === JSON.stringify([3, 4, 5]));
  console.log(JSON.stringify(selectGreaterThan([1, 2, 3, 4, 5], 17)) === JSON.stringify([]));
  console.log(JSON.stringify(selectGreaterThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1)) === JSON.stringify([2, 2, 3, 4, 2]));
  console.log(JSON.stringify(selectGreaterThan([10, 10, 10, -10, 15], 10)) === JSON.stringify([15]));

}

module.exports = selectGreaterThan;
