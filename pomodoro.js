/* var now = Date.now();
var end = new Date();
end.setMinutes(end.getMinutes() + 25);


function countdown(){
   
    var now = Date.now;
    var diff = end - now;
    var mins = Math.floor(diff/(1000*60*60));
    var secs = Math.floor((diff % (1000*60))/  (1000*60));
   //var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   //var secs = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = mins + "m" + secs + "s";
}

function addMinutes(date, minutes) {
    var tmp = new Date(date.getTime() + minutes*60000);
    return tmp;
}

function main() {
    //var time = addMinutes(Date.now, 25);
    setInterval(countdown, 1000);
} */

var timer = 25*60;
var breakTime = 5*60;
var isPaused;
var running;
var isTimerRunning;
var canRunTimer = true;
var canRunBreak = true;

function beginCountdown(isTimer){
        isPaused = false;
        if(isTimer && canRunTimer){
            runTime();
            canRunTimer = false;
        } else if (canRunBreak) {
            runBreak();
            canRunBreak = false;
        }
    
}

function runTime(){
    isTimerRunning = true;
    running = setInterval( 
        function(){
            timer --;
            updateTime();
        }, 1000);
}

function runBreak(){
    isTimerRunning = false; 
    running = setInterval( 
        function(){
            breakTime --;
            updateTime();
        }, 1000);

}


function updateTime(){
    //calculates time

    //displays regular time
    var min = Math.floor(timer/60);
    var secs = Math.floor(timer %((1000*60)/1000));
    document.getElementById("timer").innerHTML = min + "m" + secs + "s";

    //displays break time
    var bMin = Math.floor(breakTime/60);
    var bSec = Math.floor(breakTime%((1000*60)/1000));
    document.getElementById("breakTime").innerHTML = bMin + "m" + bSec + "s";
}

function listenerSetup(){
    //add the 4 event listeners
    document.getElementById("timeDown").addEventListener("click", function(){
        onClick("timeDown")});
    document.getElementById("timeUp").addEventListener("click", function(){ 
        onClick("timeUp")});
    document.getElementById("breakDown").addEventListener("click", function(){
        onClick("breakDown")});
    document.getElementById("breakUp").addEventListener("click", function(){
        onClick("breakUp")});
    document.getElementById("stop").addEventListener("click", function(){
        onClick("stop")});
    document.getElementById("reset").addEventListener("click", function(){
        onClick("reset")});
}

function onClick(button){
    switch (button){
        case "timeDown" :
        timer = timer - 60;
        updateTime();
        break;

        case "timeUp" :
        timer = timer + 60;
        updateTime();
        break;
        
        case "breakDown" :
        breakTime = breakTime - 60;
        updateTime();
        break;

        case "breakUp" :
        breakTime = breakTime + 60;
        updateTime();
        break;

        case "stop" :
        if(isPaused){
            //resume
            isRunning = true;
            beginCountdown(isTimerRunning);
            document.getElementById("stop").innerHTML = "Pause";
        } else {
            //pause
            clearInterval(running);
            document.getElementById("stop").innerHTML = "Resume";
            isPaused = true

            if(isTimerRunning){
                canRunTimer = true;
            } else {
                canRunBreak = true;
            }
        }
        break; 

    }
}

function quickSetup(){
    listenerSetup();
    updateTime();
}


window.onload = quickSetup();


