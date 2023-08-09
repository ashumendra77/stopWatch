
//Variable declareation 

let timer = document.querySelector('.time');
let start = document.querySelector('.start');
let reStart = document.querySelector('.reset');
let stop = document.querySelector('.stop');

// First we initilize hour, minute,second with 0
let sec = 0;
let min = 0;
let hrs = 0;
let displayTimer = null;

// Funtionallty when we click start button
start.addEventListener('click', function () {

    if (displayTimer !== null) {

        clearInterval(displayTimer);
    }
    displayTimer = setInterval(startWatch, 1000)
})
//  End start Funtionallty


//Function whcih calculate time and convert in min, hrs and sec
function startWatch() {
    sec++;
    if (sec == 60) {
        min++;
        sec = 0;
        if (min == 60) {
            hrs++;
            min = 0;
        }
    }

    //if we have value lesss then 10 then we will add Zero and show them
    let s = sec < 10 ? '0' + sec : sec;
    let m = min < 10 ? '0' + min : min;
    let h = hrs < 10 ? '0' + hrs : hrs;

    timer.innerHTML = h + ":" + m + ":" + s;

}

//  End  Funtionallty


//  Start reset Funtionallty
reStart.addEventListener('click', restart);

function restart() {
    clearInterval(displayTimer);

    sec = 0;
    min = 0;
    hrs = 0;
    timer.innerHTML = "00:00:00"


}


//  End reset Funtionallty


//  Start stop Funtionallty

stop.addEventListener('click', stopTimer);
function stopTimer() {
    clearInterval(displayTimer);
}

//  End stop Funtionallty

