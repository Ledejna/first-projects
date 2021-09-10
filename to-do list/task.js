const enter = document.getElementById('enter');
const input = document.getElementById('userInput');
const ul = document.querySelector('ul');
const items = document.querySelector('.list-items');

function inputLength(){
    return input.value.length;
}

function createListElement(){
    const li = document.createElement('li');

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    function crossOut(){
        li.classList.toggle('done');
    }
    li.addEventListener('click', crossOut);

    //create delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);

    function deleteListItem(){
        li.remove();
    }
    deleteBtn.addEventListener('click', deleteListItem);
}

//add item using click btn
enter.addEventListener('click', addListAfterClick);

function addListAfterClick(){
    if(inputLength() > 0){
        createListElement();
    }
}

//add item using enter key
input.addEventListener('keypress', () => {
    if(inputLength() > 0 && event.which === 13){
        createListElement();
    }
});