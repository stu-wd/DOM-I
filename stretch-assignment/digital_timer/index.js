const timerDisplay = document.querySelector('#digits')
const startBtn = document.querySelector('#start-button')
let timeStart = 0

const counter = () => {
    setInterval(() => {
        if(time >= 10) {
        timerDisplay.addClass('redDigit')
        clearInterval(time = 10)
        }
        timerDisplay.innerHTML = time
        time +=1
    }, 100)
}

startBtn.addEventListener('click', counter)