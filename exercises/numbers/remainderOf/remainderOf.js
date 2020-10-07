/**
 * Given two positive, `n` and `d`, returns the remainder of `n` after
 * dividing by `d`.
 *
 * Do not use the built-in modulo operator (`%`). The goal is to gain
 * insight into how the modulo operator works.
 *
 * @example
 * remainderOf(10, 1); // => 0
 * remainderOf(10, 2); // => 0
 * remainderOf(10, 3); // => 1
 * remainderOf(10, 4); // => 2
 * remainderOf(129, 17); // => 10
 *
 * @param {number} num The input number
 * @returns {boolean} True if num is even and false otherwise
 */
function remainderOf(n, d) {
  let division = parseInt(n/d)
  console.log(division)
  let subtraction = division * d
  console.log(subtraction)
  let remainder = n - subtraction
  console.log('The remainder of ' + n + ' divided by ' + d + ' is ' +  remainder)
  return remainder

}


if (require.main === module) {
  console.log('Running sanity checks for remainderOf');
  console.log(remainderOf(10, 3) === 1)
  console.log(remainderOf(9, 3) === 0)
  console.log(remainderOf(10, 5) === 0)
  console.log(remainderOf(129, 17)=== 10)
}
  

module.exports = remainderOf;

