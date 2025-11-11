let stopwatchCounter = document.getElementById("stopwatch");

const playBtn = document.querySelector(".start")
const stopBtn = document.querySelector(".stop")
const restartBtn = document.querySelector(".restart")
console.log(stopBtn)
let [hours, minutes, seconds] = [0,0,0];

let timer = null;

function stopWatch(){
    seconds++;
    if(seconds > 60){
        seconds = 0;
        minutes++;
        if(minutes > 60){
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours: hours
    let m = minutes < 10 ? "0" + minutes: minutes
    let s = seconds < 10 ? "0" + seconds: seconds
    stopwatchCounter.innerHTML = h + ":" + m + ":" + s
}

playBtn.addEventListener("click", ()=>{
    if(timer !== null){
        clearInterval(stopWatch)
    }
    timer = setInterval(stopWatch,1000)
})
stopBtn.addEventListener("click",()=>{
    clearInterval(timer)
})
restartBtn.addEventListener("click",()=>{
    clearInterval(timer)
    [hours, minutes, seconds] = [0,0,0];
    stopwatchCounter.innerHTML = "00:00:00";
})
restartBtn.addEventListener("click",()=>{
    clearInterval(timer);
    [hours, minutes, seconds] = [0,0,0];
    stopwatchCounter.innerHTML = "00:00:00";
})
