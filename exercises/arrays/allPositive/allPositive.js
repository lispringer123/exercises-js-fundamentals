/**
 * Given an array of numbers, returns true if _every_ element is positive
 * and false otherwise.
 *
 * @example
 * allPositive([1, 2, 3, 4, 5]); // => true
 * allPositive([1, 2, -3, 4, 5]); // => false
 * allPositive([0, 0, 1]); // => false
 *
 * @param {number[]} array - An array of numbers
 * @returns {boolean} True if every number in the input array is positive
 *   and false otherwise.
 */
function allPositive(array) {
  let countNegative = 0
  let countPositive = 0
  console.log('The array is: ', array)
  for (let i = 0; i < array.length; i++){
    if(Math.sign(array[i]) === -1){
      console.log('Math.Sign(',array[i],')=', Math.sign(array[i]))
      console.log('The negative element in the array is: ', array[i])
      countNegative++
      }
  }
  for (let i = 0; i < array.length; i++){
    if(Math.sign(array[i]) === 1){
      console.log('Math.Sign(',array[i],')=', Math.sign(array[i]))
      console.log('The positive element in the array is: ', array[i])
      countPositive++
      }
  }
  if(countNegative > 0){
    console.log('Turns out there were some negatives')
    return false
  }
  if (countNegative === 0){
    console.log('All good here, everything is positive')
    return true
  }
}

     


if (require.main === module) {
  console.log('Running sanity checks for allPositive:');
  console.log(allPositive([1, 2, 3, 4, 5]) === true);
  console.log(allPositive([2, 5, 6, 7, 7]) === true);
  console.log(allPositive([-1, 2, 3, 4, 5]) === false);
  console.log(allPositive([1, 2, -3, 4, 5]) === false);
  console.log(allPositive([1, -2, -3, -4, 5]) === false);
  console.log(allPositive([1]) === true);


}

module.exports = allPositive;
