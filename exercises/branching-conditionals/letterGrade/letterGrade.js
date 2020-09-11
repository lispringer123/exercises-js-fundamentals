/**
 * Given a numerical grade from 0 to 100, return a letter grade.
 *
 * The minus/plus cutoffs are at 2 and 6, respectively. For example,
 * 80-82 is a B+, 83-86 is a B, and 87-89 is a B+. Anything below 60 is an F.
 *
 * @example
 * letterGrade(50); // => 'F'
 * letterGrade(70); // => 'C-'
 * letterGrade(89); // => 'B+'
 *
 * @param {number} percentGrade - A number between 0 and 100 (inclusive), representing
 *  a student's percentage grade.
 * @return {string} The corresponding letter grade for the given percentage grade
 */


function letterGrade(percentGrade) {
  let gpa = (percentGrade / 100)
  if (0.97<= gpa >= 1.00) {
    console.log('A+')
  } else if (0.93 >= gpa <= 0.96) {
    console.log('A')
  } else if (0.90 >= gpa <= 0.92) {
    console.log('A-')
  } else if (0.87 >= gpa <= 0.89) {
    console.log('B+')
  } else if (0.83 >= gpa <= 0.86) {
    console.log('B')
  } else if (0.80 >= gpa <= 0.82) {
    console.log('B-')
  } else if (0.77 >= gpa <= 0.79) {
    console.log('C+')
  } else if (0.73 >= gpa <= 0.76) {
    console.log('C')
  } else if (0.70 >= gpa <= 0.72) {
    console.log('C-')
  } else if (0.67 >= gpa <= 0.69) {
    console.log('D+')
  } else if (0.63 >= gpa <= 0.66) {
    console.log('D')
  } else if (0.60 >= gpa <= 0.62) {
    console.log('D-')
  } else if (0.00 <= gpa < 0.60) {
    console.log('F')
  }
  








if (require.main === module) {
  console.log('Running sanity checks for letterGrade:');
  letterGrade(100) //A+
  
  
  letterGrade(97) //A+
  letterGrade(93)
  letterGrade(92)
  letterGrade(90)

  letterGrade(89)
  letterGrade(87)
  letterGrade(83)
  letterGrade(82)
  letterGrade(80)

  letterGrade(79)
  letterGrade(77)
  letterGrade(73) 
  letterGrade(72)// c
  letterGrade(70) //c -

  letterGrade(69) //d +
  letterGrade(67) // d
  letterGrade(63) // d 
  letterGrade(62) // d-
  letterGrade(60) // d-

  letterGrade(59) //f
  letterGrade(50)

  letterGrade(40)

  letterGrade(30)

  letterGrade(20)

  letterGrade(10)
  letterGrade(0)  // f



  
  




  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = letterGrade;
