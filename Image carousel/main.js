const prev = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');

prev.onclick = () => nextSlide(-1);
next.onclick = () => nextSlide(1);

let slideIndex = 1;

showSlides(slideIndex);
function nextSlide(n){
    showSlides((slideIndex += n));
}

function currentSlide(n){
    showSlides((slideIndex = n));
}

function showSlides(n){
    let i;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if(n>slides.length){
        slideIndex = 1;
    }
    if(n<1){
        slideIndex = slides.length;
    }
    for(i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }

    for(i = 0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides.forEach(slide => slide.classList.add('fade'));
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex-1].classList.add('active');
}