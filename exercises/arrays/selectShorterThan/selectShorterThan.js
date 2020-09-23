/**
 * Given an array of strings and a threshold length, returns a new array
 * consisting of only the strings with length strictly less than the
 * given threshold.
 *
 * Return an empty array if no such strings exist.
 *
 * @example
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 0); // => []
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 1); // => ['']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 2); // => ['', 'c']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 3); // => ['', 'bb', 'c']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 4); // => ['', 'aaa', 'bb', 'c']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 5); // => ['', 'aaa', 'bb', 'c', 'dddd']
 *
 * @param {string[]} array - An array of strings
 * @param {number} threshold - A length threshold
 * @returns {string[]} An array of all strings in the input array with length
 *  strictly less the given threshold
 */
function selectShorterThan(array, threshold) {
  let newArray = []
  for (let i = 0; i < array.length; i++){
    if (array[i].length < threshold){
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
  console.log('Running sanity checks for selectShorterThan:');
  console.log('Running sanity checks for selectLongerThan:');
  console.log(JSON.stringify(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 0)) === JSON.stringify([]));
  console.log(JSON.stringify(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 1)) === JSON.stringify(['']));
  console.log(JSON.stringify(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 2)) === JSON.stringify(['', 'c']));
  console.log(JSON.stringify(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 3)) === JSON.stringify(['', 'bb', 'c']));
  console.log(JSON.stringify(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 4)) === JSON.stringify(['', 'aaa', 'bb', 'c']));
  console.log(JSON.stringify(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 5)) === JSON.stringify(['', 'aaa', 'bb', 'c', 'dddd']));
}

module.exports = selectShorterThan;
