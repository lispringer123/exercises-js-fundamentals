/**
 * Given an array of numbers, return their sum.
 *
 * @example
 * sum([1, 2, 3]); // => 6 (i.e., 1 + 2 + 3)
 * sum([-10, 10]); // => 0 (i.e., -10 + 10)
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum of the numbers in the array
 */
function sum(array) {
  var i;
  let sumSoFar = 0
  for (i = 0; i < array.length; i++) {
    sumSoFar = sumSoFar + array[i]
    } 
  return sumSoFar
}
















if (require.main === module) {
  console.log('Running sanity checks for sum:');
  console.log(sum([1, 2, 3]) === 6);
  console.log(sum([1, 3, 4]) === 8);
  console.log(sum([4, 6, 10]) === 20);
  console.log(sum([3, 23, 4]) === 30);
  
}

module.exports = sum;

