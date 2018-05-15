// Psuedocode
// 1. Timer should start at 30 seconds
// 2. When the user clicks on the start game, the timer should start decreasing by 1 second and show mole
// 3. Set Interval to countdown from 30, clear Interval to stop counting down
// 4. Once the timer starts (button is clicked), the mole needs to appear
// 5. When user clicks on mole the score increments by 1
// 6. The mole needs to move to a random spot after 1 second from when it first appears and continues to do so until timer runs out
// 7. When game ends, alert box pops up with score
// 8. Click ok in box to reset gameboard

const button = document.getElementById('start-button');
const timer = document.getElementById('timer');
const score = document.getElementById('score');
const mole = document.getElementById('mole');
const holes = document.getElementsByClassName('hole');

var startButton = document.querySelector('#start-button');

var scoreBoard = 0

function increaseScore() {
    scoreBoard++
    score.innerText = `${scoreBoard} points`
}

function clearScore() {
    scoreBoard = 0
    score.innerText = `${scoreBoard} points`
}

function countDown() {
    var counter = 5;
    var countDown = setInterval(
      function(){
          showMole()
          moveMole()
          counter--
          timer.innerText = `${counter} seconds`
          // disable the start game button
        //   button.setAttribute(`disabled`, true)
          if(counter === 0) {
          clearInterval(countDown)
          alert(`Game over! You scored ${scoreBoard} points!`)
          clearScore()
        //   button.setAttribute(`enabled`, true)

          }
    }, 1000) 
}


function showMole() {
    mole.style.display = "initial"
}

function moveMole() {
    newHole = Math.floor(Math.random() * Math.floor(holes.length))
    holes[newHole].appendChild(mole)
}

startButton.addEventListener('click', countDown)
mole.addEventListener('click', increaseScore)