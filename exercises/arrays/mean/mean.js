/**
 * Given an array of numbers, return their mean. We use "mean" instead of
 * average because "average" can mean many things — mean, median, or mode —
 * while mean only ever means one thing.
 *
 * The mean of three numbers a,b,c is (a + b + c) / 3.
 *
 * The mean of four numbers a,b,c,d is (a + b + c + d) / 4.
 *
 * etc.
 *
 * See https://en.wikipedia.org/wiki/Arithmetic_mean
 *
 * @example
 * mean([30, 10, 20]); // => 20 (i.e., (30 + 10 + 20) / 3)
 * mean([-10, 10]); // => 0 (i.e., (-10 + 10) / 2)
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The mean of the numbers in the array
 */
function mean(array) {
  let total = 0
  for (i = 0; i < array.length; i++ ){
    total = total + array[i]
  }
theMean = total / array.length
console.log('The array is: ', array)
console.log('The total is: ',total)
console.log('The mean is: ',theMean)
return theMean
}

  



if (require.main === module) {
  console.log('Running sanity checks for mean:');
  console.log(mean([1,1])=== 1)
  console.log(mean([1,2,3])=== 2)

}

module.exports = mean;
