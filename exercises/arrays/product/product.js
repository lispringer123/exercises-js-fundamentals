/**
 * Given an array of numbers, return their product.
 *
 * @example
 * product([2, 4, 6]); // => 48 (i.e., 2 * 4 * 6)
 * product([-10, 10]); // => -100 (i.e., -10 * 10)
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The product of the numbers in the array
 */
function product(array) {
  theCurrentProduct = 1
  for (i = 0; i < array.length; i++){
    theCurrentProduct = array[i] * theCurrentProduct
    
  }
  console.log('The array is: ', array)
  console.log('The product of the array is: ',theCurrentProduct) 
  return theCurrentProduct
}

if (require.main === module) {
  console.log('Running sanity checks for product:');
  console.log(product([2,2]) === 4)
  console.log(product([3,2]) === 6)
}

module.exports = product;
