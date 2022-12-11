const time = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");

let secs = 0;
let hrs=0;
let mins=0;
let interval = null;


start_btn.addEventListener('click', start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);


function timer () {

    secs=parseInt(secs);
    mins=parseInt(mins);
    hrs=parseInt(hrs);

	secs++;

    if(secs==60){
        mins=mins+1;
        secs=0;
    }

    if(mins==60){
        hrs=hrs+1;
        mins=0;
        secs=0;
    }

	if (secs < 10)
    {
        secs = '0' + secs;
    }
	if (mins < 10){
         mins = "0" + mins;
    }
	if (hrs < 10){
         hrs = "0" + hrs;
    }

	time.innerText = `${hrs}:${mins}:${secs}`;
}

function start () {
	if (interval) {
		return;
	}

	interval = setInterval(timer, 1000);
}

function stop () {
	clearInterval(interval);
	interval = null;
}

function reset () {
	stop();
	secs = 0;
    mins=0;
    hrs=0;
	time.innerText = '00:00:00';
}