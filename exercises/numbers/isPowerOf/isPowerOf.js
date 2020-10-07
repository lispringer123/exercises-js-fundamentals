/**
 * Given two non-negative integers, `num` and `base`, return `true` if `num`
 * is a power of `base` and `false` otherwise.
 *
 * A number is a `num` power of `base` if it can be written as `base**k` for
 * some non-negative integer `k`, where "`**`" represents the exponentiation
 * operator. 
 *
 * For example, `8` is a power of `2` since `8` equals `2 * 2 * 2 === 2**3`.
 * Conversely, `81` is not a power of `2` since there's no integer `k` such that
 * `81 === 2**k`.
 *
 * However, `81` _is_ a power of `3` since `81 === 3**4`.
 *
 * @example
 * isPowerOf(2, 2) // => true
 * isPowerOf(3, 3) // => true
 * isPowerOf(10, 2) // => false
 *
 * @param {number} num - The input number
 * @param {number} base - The base
 * @returns {boolean} True if `num` is a power of `base` and false otherwise.
 */
function isPowerOf(num, base) {
  let currentSize = base
  let count = 0
  while (currentSize < num){
  currentSize**
  console.log('the current size is: ' + currentSize)
  count++
  console.log('the count is: ' + count)
  }
  if (base**count === num){
    console.log(base + 'to the ' + count + 'power is: ' + num)
    return true
    
  } else{
    return false
  }

}

if (require.main === module) {
  console.log('Running sanity checks for isPowerOf:');
  console.log(isPowerOf(2, 2) === true);
  console.log(isPowerOf(3, 3)=== true);
  console.log(isPowerOf(10, 2)=== true);
  console.log(isPowerOf(1, 3) === false);
  console.log(isPowerOf(0, 2) === false);
  console.log(isPowerOf(1, 2) === false);

}

module.exports = isPowerOf;
