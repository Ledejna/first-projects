const search = document.querySelector('.input-search');
const icon = document.getElementById('icon');
icon.addEventListener('click', () => {
    search.classList.toggle("active-search");
});

document.querySelector('main').addEventListener('click', () => {
    search.classList.remove("active-search");
});
