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


function main(){
    updateTime();
    beginCountdown();
}
function beginCountdown(){
    setInterval( function(){
        timer --;
        updateTime();
    }, 1000);

}

function updateTime(){
    //calculates time
    var min = Math.floor(timer/60);
    var secs = Math.floor(timer %((1000*60)/1000));
    document.getElementById("timer").innerHTML = min + "m" + secs + "s";
}

function listenerSetup(){
    document.getElementById("timeDown").addEventListener("click",onClick("timeDown"));
    document.getElementById("timeUp").addEventListener("click",onClick("timeUP"));
    document.getElementById("breakDown").addEventListener("click",onClick("breakDown"));
    document.getElementById("breakUp").addEventListener("click",onClick("breakUp"));
}

function onClick(button){
    switch (button){
        case "timeDown" :
        timer = time - 60
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
        breakUp = breakUp + 60;
        updateTime();
        break;
    }
}


