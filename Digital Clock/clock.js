window.onload = showTime();

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    let am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    let currentTime = `${hour}:${min}<span>,${sec}|${am_pm}</span>`;

    document.getElementById("clock").innerHTML = currentTime;

    setTimeout(showTime, 1000);

    let bg;
    const username = "Ledejna";
    const user = document.getElementById("User");
    if (hour < 8 && am_pm === "AM"){
        bg = `url(https://source.unsplash.com/r4L98e_1deI)`;
        user.innerHTML = `Good morning ${username}`;
    }else if (hour < 11 && am_pm === "AM"){
        bg = `url(https://source.unsplash.com/ns5Valsrpho)`;
        user.innerHTML = `Good day ${username}`;
    }else if (hour < 8 && am_pm === "PM"){
        bg = `url(https://source.unsplash.com/EkL1OWV0qvc)`;
        user.innerHTML = `Good day ${username}`;
    }else{
        bg = `url(https://source.unsplash.com/V--aUXMkKBo)`;
        user.innerHTML = `Good day ${username}`;
    }
    const body = document.querySelector("body");
    body.style.background = `${bg} center/cover`;
}
document.querySelector('.focus-container input').addEventListener('keypress', event => {
    if(event.key == "Enter"){
        const input = document.querySelector('.focus-container input');
        document.querySelector('.focus-container').innerHTML = `Today: ${input.value}`;
    }
});
