/**
 * Given a temperature in Celsius, return the temperature in Fahrenheit.
 *
 * @param {number} temp - The temperature in Celsius
 * @returns {boolean} The temperature in Fahrenheit
 */
function celsiusToFahrenheit(temp) {
  let c = temp
  let f = c * (9/5) + 32
  console.log(c +' degrees celisus is ' + f + ' degrees fahrenheit')
  return f
}

if (require.main === module) {
  console.log('Running sanity checks for celsiusToFahrenheit:');
  console.log(celsiusToFahrenheit(0)=== 32)
  console.log(celsiusToFahrenheit(1)=== 33.8)
  console.log(celsiusToFahrenheit(100)=== 212)
  console.log(celsiusToFahrenheit(0)=== 32)
 
  



}

module.exports = celsiusToFahrenheit;
