const startEl = document.getElementById("start")
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("reset")
const timerEl = document.getElementById("timer")

let interval
let timeleft = 70;

function updateTimer() {
    let minutes = Math.floor(timeleft / 60)
    let seconds = timeleft % 60
    let formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")} `

    timerEl.innerHTML = formattedTime
}

function startTimer() {
    interval = setInterval(() => {
        // console.log("timer")
        timeleft--;
        updateTimer();

        if (timeleft === 0) {
            clearInterval(interval)
            alert("Time's up!")
            timeleft = 1500
        }
    }, 1000)
}

function stopTimer() {
    // console.log("stop")
    clearInterval(interval);
}
function resetTimer() {
    // console.log("reset")
    clearInterval(interval);
    timeleft = 1500;
    updateTimer();

}
startEl.addEventListener("click", startTimer)
stopEl.addEventListener("click", stopTimer)
resetEl.addEventListener("click", resetTimer)

