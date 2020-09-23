/**
 * Given an array of integers, returns a new array consisting of only
 * the odd integers from the original array.
 *
 * Return an empty array if no such numbers exist.
 *
 * @example
 * selectOdds([1, 2, 3, 4, 5]); // => [1, 3, 5]
 * selectOdds([10, 2, 19, 10, -103]); // => [19, -103]
 * selectOdds([1, 1, 2, 1]); // => [1, 1, 1]
 * selectOdds([10, 20, 30]); // => []
 *
 * @param {number[]} array - An array of numbers
 * @returns {number[]} A new array consisting of all the odd numbers in the input array
 */
function selectOdds(array) {
  let newArray = []
  for (let i = 0; i < array.length; i++){
    if (array[i]%2 != 0){
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
  console.log('Running sanity checks for selectEvens:');
  console.log(JSON.stringify(selectOdds([1, 2, 3, 4, 5])) === JSON.stringify([1, 3, 5]));
  console.log(JSON.stringify(selectOdds([10, 2, 19, 10, -103])) === JSON.stringify([19, -103]));
  console.log(JSON.stringify(selectOdds([1, 1, 1, 2])) === JSON.stringify([1, 1, 1]));
  console.log(JSON.stringify(selectOdds([10, 20, 30])) === JSON.stringify([]));

}




module.exports = selectOdds;
