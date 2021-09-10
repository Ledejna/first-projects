let btn = document.getElementById('Start-btn');
let mybar = document.getElementById('Mybar');
let bgImg = document.querySelector('.bg-img');
bgImg.classList.add('blur');

let root_speed = getComputedStyle(document.documentElement);

// console.log(root_speed.getPropertyValue('--speed'));

document.documentElement.style.setProperty('--speed', "15s");

let speed = 50;

document.documentElement.style.setProperty('--speed', `${speed / 10}s`);

let i = 0;

btn.addEventListener('click', () => {
    if (i == 0) {
        i = 1;
    }
    let width = 0;
    setInterval(frame, speed);
    function frame() {
        if (width >= 100) {
            i = 0;
        } else {
            width++;
            mybar.style.width = width + "%";
            mybar.innerHTML = width + "%";
            bgImg.classList.remove('blur');
            bgImg.classList.add('clear');
        }
    }
})