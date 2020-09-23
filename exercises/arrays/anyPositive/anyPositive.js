/**
 * Given an array of numbers, returns true if _any_ element is positive
 * and false otherwise.
 *
 * @example
 * anyPositive([1, 2, 3, 4, 5]); // => true
 * anyPositive([1, 2, -3, 4, 5]); // => true
 * anyPositive([0, 0, 1]); // => true
 * anyPositive([-10, -10, -10]); // => false
 * anyPositive([-10, -10, 1]); // => true
 *
 * @param {number[]} array - An array of numbers
 * @returns {boolean} True if every number in the input array is positive
 *   and false otherwise.
 */
function anyPositive(array) {
  let countPositive = 0
  console.log('The array is: ', array)
  for (let i = 0; i < array.length; i++){
    if(Math.sign(array[i]) === 1){
      console.log('Math.Sign(',array[i],')=', Math.sign(array[i]))
      console.log('The positive element in the array is: ', array[i])
      countPositive++
      }
  }
  if(countPositive > 0){
    console.log('Yup, we have a positive in the array!', countPositive, 'to be exact!')
    return true
  }
  if (countPositive === 0){
    console.log('Dang man! There were no positive values in the array. Better luck next time!')
    return false
  }
}

if (require.main === module) {
  console.log('Running sanity checks for anyPositive:');
  console.log(anyPositive([1, 2, 3, 4, 5]) === true);
  console.log(anyPositive([1, 2, -3, 4, 5]) === true);
  console.log(anyPositive([0, 0, 1]) === true);
  console.log(anyPositive([-10, -10, -10]) === false);
  console.log(anyPositive([-10, -10, 1]) === true);
}

module.exports = anyPositive;
