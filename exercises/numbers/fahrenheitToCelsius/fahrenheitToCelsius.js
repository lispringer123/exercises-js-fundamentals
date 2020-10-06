/**
 * Given a temperature in Fahrenheit, return the temperature in celsius.
 *
 * @param {number} temp - The temperature in Fahrenheit
 * @returns {boolean} The temperature in celsius
 */
function fahrenheitToCelsius(temp) {
  let f = temp
  let c = (f-32) * (5/9)
  console.log(f +' degrees fahrenheit is ' + c + ' degrees celsius')
  return c
  
}

if (require.main === module) {
  console.log('Running sanity checks for fahrenheitToCelsius:');
  console.log(fahrenheitToCelsius(32)=== 0)
  console.log(fahrenheitToCelsius(33.8)=== 1)
  console.log(fahrenheitToCelsius(212)=== 100)
}

module.exports = fahrenheitToCelsius;
