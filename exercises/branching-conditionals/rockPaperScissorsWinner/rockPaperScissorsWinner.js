/**
 * Given two numbers representing two players' moves in a game of rock,
 * paper, scissors, 
 * 
 * 
 * return: --> whether the first player's move was a win, loss, or draw.
 *
 * To play: two people count off to three. 
 * 
 * On the count: each hold out their hand in the shape of a rock, a piece
 * of paper, or a pair of scissors. Scissors beats paper, paper beats
 * rock, and rock beats scissors. If both players play
the same item, it's a draw.
 *
 * See https://en.wikipedia.org/wiki/Rock_paper_scissors
 *
 * We will represent scissors with the number 0, paper with the number 1,
 * and rock with the number 2.
 *
 * @example
 * rockPaperScissorsWinner(0, 1); // => 'win' (scissors beats paper)
 * rockPaperScissorsWinner(1, 0); // => 'lose' (paper loses to scissors)
 * rockPaperScissorsWinner(1, 2); // => 'win' (paper beats rock)
 * rockPaperScissorsWinner(2, 2); // => 'draw' (both players played rock)
 * 
 * 
 * scisscors = 0
 * paper = 1
 * rock = 2
 *
 * @param {number} firstPlayerMove - The first player's move
 * @param {number} secondPlayerMove - The second player's move
 * @returns {string} Returns 'win', 'lose', or 'draw' depending on
 *  whether the first player won, lost, or drew the match.
 */
function rockPaperScissorsWinner(firstPlayerMove, secondPlayerMove) {
  let x = firstPlayerMove
  let y = secondPlayerMove

  if (x === 0){
    if (y === 0) {
      return('draw')
      console.log('Double or nothing prick')
    }
    else if (y === 1) {
      return('win')
      console.log('This is easy no?')
    }
    else if (y === 2) {
      return('lose')
      console.log('yeah right ref')
    }
  }
  else if (x === 1){
    if (y === 1) {
      return('draw')
      console.log("In the words of Churchill: 'Never...' just keep playing who cares?")
    }
    else if (y === 2) {
      return('win')
      console.log('For some winning can be addicting, but not me, I am a gambling man')
    }
    else if (y === 0) {
      return('lose')
      console.log('das ist nicht gut! Schreiben sie den Papier!')
    }
  }
  else if (x === 2) {
    if (y=== 2) {
      return('draw')
      console.log('hopefully not the election in November')
    }
    else if (y === 0) {
      return('win')
      console.log('A hard earned, very brutal, and exceedingly tough win')
    }
    else if (y === 1) {
      return('lose')
      console.log('silly paper, tricks are for kids')
    }
  }



}

if (require.main === module) {
  console.log('Running sanity checks for rockPaperScissorsWinner:');
  console.log(rockPaperScissorsWinner(0, 1)); // => 'win' (scissors beats paper))
  console.log(rockPaperScissorsWinner(1, 0)); // => 'lose' (paper loses to scissors))
  console.log(rockPaperScissorsWinner(1, 2)); // => 'win' (paper beats rock))
  console.log(rockPaperScissorsWinner(2, 2)); // => 'draw' (both players played rock))

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = rockPaperScissorsWinner;
