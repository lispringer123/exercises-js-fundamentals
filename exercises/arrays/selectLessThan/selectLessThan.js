/**
 * Given an array of numbers and a treshold value, returns a new array
 * consisting of only those numbers strictly less than the threshold.
 *
 * Return an empty array if no such numbers exist.
 *
 * @example
 * selectLessThan([1, 2, 3, 4, 5], 2); // => [1]
 * selectLessThan([1, 2, 3, 4, 5], 17); // => [1, 2, 3, 4, 5]
 * selectLessThan([-20, 2, 1, 0, 1, 2, 1, 2], 1); // => [-20, 0];
 * selectLessThan([10, 4, 10, -10, 15], 10); // => [4, -10]
 * selectLessThan([10, 20, 30, 40], -100); // => []
 *
 * @param {number[]} array - An array of numbers
 * @param {number} threshold - The threshold for selecting
 * @returns {number[]} A new array consisting of all the numbers in input array
 *  strictly less than the threshold
 */
function selectLessThan(array, threshold) {
  let newArray = []
  for (let i = 0; i < array.length; i++){
    if (array[i] < threshold){
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
  console.log('Running sanity checks for selectLessThan:');
  console.log(JSON.stringify(selectLessThan([1, 2, 3, 4, 5], 2)) === JSON.stringify([1]));
  console.log(JSON.stringify(selectLessThan([1, 2, 3, 4, 5], 17)) === JSON.stringify([1, 2, 3, 4, 5]));
  console.log(JSON.stringify(selectLessThan([-20, 2, 1, 0, 1, 2, 1, 2], 1)) === JSON.stringify([-20, 0]));
  console.log(JSON.stringify(selectLessThan([10, 4, 10, -10, 15], 10)) === JSON.stringify([4, -10]));
}

module.exports = selectLessThan;
