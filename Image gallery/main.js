const imgs = document.querySelectorAll('.img');
const body = document.querySelector('body');

let activeImg = 0;

function bgImg(){
    body.style.backgroundImage = imgs[activeImg].style.backgroundImage;
}
bgImg();

function activateImgs(){
    imgs.forEach(img => {
        img.classList.remove('active');
        img.classList.remove('animateTransition');
    });
    imgs[activeImg].classList.add('active');
    imgs[activeImg].classList.add('animateTransition');
}

const arrowBtns = document.querySelectorAll('.arrows');

arrowBtns.forEach(btn => {
    btn.onclick = ()=>{
        if(btn.className == 'right-arrow'){
            activeImg++;
            if(activeImg > imgs.length-1){
                activeImg = 0;
            }
        }else{
            activeImg--;
            if(activeImg < 0){
                activeImg = imgs.length-1;
            }
        }
        bgImg();
        activateImgs();
    }
})