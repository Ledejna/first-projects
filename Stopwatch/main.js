window.onload = function () {
    let minutes = document.getElementById('mins');
    let seconds = document.getElementById('secs');
    let tenss = document.getElementById('tens');
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');
    let resetBtn = document.getElementById('resetBtn');

    let min = 00;
    let sec = 00;
    let tens = 00;
    let Interval;

    startBtn.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    stopBtn.onclick = () => {
        clearInterval(Interval);
        let li = document.createElement('li');
        let lap = document.getElementById('laps');
        li.innerHTML = `Lap: <span>${minutes.innerHTML}<span/>:<span>${seconds.innerHTML}<span/>,<span>${tenss.innerHTML}<span/>`;
        lap.appendChild(li);
    }

    resetBtn.onclick = () => {
        clearInterval(Interval);
        min = 00;
        sec = 00;
        tens = 00;
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";
        tenss.innerHTML = "00";
        let lap = document.getElementById('laps');
        lap.innerHTML ="";
    }

    function startTimer() {
        tens++;
        if (tens < 9) {
            tenss.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            tenss.innerHTML = tens;
        }
        if (tens > 99) {
            sec++;
            seconds.innerHTML = "0" + sec;
            tens = 0;
            tenss.innerHTML = "0" + tens;
        }
        if (sec < 9) {
            seconds.innerHTML = "0" + sec;
        }
        if (sec > 9) {
            seconds.innerHTML = sec;
        }
        if (sec == 60) {
            min++;
            minutes.innerHTML = "0" + min;
            sec = 0;
        }
        if (min > 9) {
            minutes.innerHTML = min;
        }

    }
}