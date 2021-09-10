document.querySelectorAll('.accordion-item-header').forEach((headers) => 
    (headers.onclick = () => {
        headers.classList.toggle('active');
        const body = headers.nextElementSibling;
        
        headers.classList.contains('active')? (body.style.maxHeight = body.scrollHeight + 'px') : (body.style.maxHeight = 0);
    })
);