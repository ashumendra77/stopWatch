let timer = document.querySelector('.time');
let start = document.querySelector('.start');
let reStart = document.querySelector('.reset');
let stop = document.querySelector('.stop');
let sec = 0;
let min = 0;
let hrs = 0;
let displayTimer = null;
start.addEventListener('click', function () {

    if (displayTimer !== null) {

        clearInterval(displayTimer);
    }
    displayTimer = setInterval(startWatch, 1000)
})
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
    // console.log(hrs, min, sec)
    let s = sec < 10 ? '0' + sec : sec;
    let m = min < 10 ? '0' + min : min;
    let h = hrs < 10 ? '0' + hrs : hrs;

    timer.innerHTML = h + ":" + m + ":" + s;

}

reStart.addEventListener('click', restart);

function restart() {
    clearInterval(displayTimer);

    sec = 0;
    min = 0;
    hrs = 0;
    timer.innerHTML = "00:00:00"


}

stop.addEventListener('click', stopTimer);
function stopTimer() {
    clearInterval(displayTimer);
}


