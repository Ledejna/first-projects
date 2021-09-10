const menuToggle = document.getElementById('menu-toggle');
const activeElement = document.querySelectorAll('.active-element');

menuToggle.addEventListener('click', function()  {
    for(let active=0; active<activeElement.length; active++){
        activeElement[active].classList.toggle("active");
    }
    const navBtnIcon = menuToggle.childNodes[1];
    navBtnIcon.classList.toggle("fa-times");

    const pageBg = document.querySelector('.main-container');

    if (navBtnIcon.classList.contains("fa-times")){
        pageBg.style.filter = "blur(3px)";
    }else{
        setTimeout(()=>{
            pageBg.style.filter = "blur(0px)";
        }, 500);
        
    }
    const listItems = document.querySelectorAll('.main-nav-list a');
    listItems.forEach(function(item, index){
        item.style.transition = `all 0.5s linear ${index * 0.3}s`;
    });
});