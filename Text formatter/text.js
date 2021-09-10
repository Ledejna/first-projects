const input = document.getElementById('input-field');
const output = document.getElementById('output-field');
input.addEventListener('keyup', getValue);

function getValue(){
    output.innerHTML = input.value;
}

document.querySelector('.uppercase').onclick = () =>
    (output.innerHTML = output.innerHTML.toUpperCase())
;

document.querySelector('.lowercase').onclick = () =>
    (output.innerHTML = output.innerHTML.toLowerCase())
;

document.querySelector('.capitalize').onclick = () =>
    (output.innerHTML = output.innerHTML.charAt(0).toUpperCase() + output.innerHTML.slice(1).toLowerCase())
;

const bold = document.querySelector('.bold');

bold.addEventListener('click', () => {
    if(bold.classList.contains('active')){
        bold.classList.remove('active');
        output.style.fontWeight = '400';
    }else{
        bold.classList.add('active');
        output.style.fontWeight = '900';
    }
});

const italic = document.querySelector('.italic');

italic.addEventListener('click', () => {
    if(italic.classList.contains('active')){
        italic.classList.remove('active');
        output.style.fontStyle = 'normal';
    }else{
        italic.classList.add('active');
        output.style.fontStyle = 'italic';
    }
});

const underline = document.querySelector('.underline');

underline.addEventListener('click', () => {
    if(underline.classList.contains('active')){
        underline.classList.remove('active');
        output.style.textDecoration = 'none';
    }else{
        underline.classList.add('active');
        output.style.textDecoration = 'underline';
    }
});