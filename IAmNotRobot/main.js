let checkbox = document.getElementById('checkbox');
let submitBtn = document.getElementById('submitBtn');

checkbox.disabled = true;
submitBtn.disabled = true;

let elements = document.querySelectorAll('.element');
let selectColor = document.getElementById('selectColor');

elements.forEach(element => {
    const color = getRandomColors();
    element.style.backgroundColor = color;
    selectColor.innerHTML = color;
    element.innerHTML = color;
});

elements.forEach(element => {
    element.addEventListener('click', () => {
        if (selectColor.innerHTML === element.innerHTML) {
            alert('You are human!');
            checkbox.disabled = false;
            submitBtn.disabled = false;
            submitBtn.classList.remove('btn-light');
            submitBtn.classList.add('btn-success');
        } else {
            alert('Please vreify that you are human!');
            location.reload(true);
        }
    })
});

function getRandomColors() {
    const letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}