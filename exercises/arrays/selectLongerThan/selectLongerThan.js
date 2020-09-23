/**
 * Given an array of strings and a threshold length, returns a new array
 * consisting of only the strings with length strictly greater than the
 * given threshold.
 *
 * Return an empty array if no such strings exist.
 *
 * @example
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], -1); // => ['', 'aaa', 'bb', 'c', 'dddd']
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 0); // => ['aaa', 'bb', 'c', 'dddd']
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 1); // => ['aaa', 'bb', dddd']
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 2); // => ['aaa', dddd']
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 3); // => ['dddd']
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 4); // => []
 *
 * @param {string[]} array - An array of strings
 * @param {number} threshold - A length threshold
 * @returns {string[]} An array of all strings in the input array with length
 *  strictly greater the given threshold
 */
function selectLongerThan(array, threshold) {
  let newArray = []
  for (let i = 0; i < array.length; i++){
    if (array[i].length > threshold){
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
  console.log('Running sanity checks for selectLongerThan:');
  console.log(JSON.stringify(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], -1)) === JSON.stringify(['', 'aaa', 'bb', 'c', 'dddd']));
  console.log(JSON.stringify(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 0)) === JSON.stringify(['aaa', 'bb', 'c', 'dddd']));
  console.log(JSON.stringify(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 1)) === JSON.stringify(['aaa', 'bb', 'dddd']));
  console.log(JSON.stringify(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 3)) === JSON.stringify(['dddd']));
  console.log(JSON.stringify(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 4)) === JSON.stringify([]));

  
}

module.exports = selectLongerThan;
