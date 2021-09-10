const form = document.createElement('form');

form.id = 'myForm';
form.style.width = '360px';

// function to create labels
function createLabel(text) {
    const label = `<label>${text}</label>`;
    return label;
}

// function to create inputs
function createInput(type, placeholder, id) {
    const input = `<input type='${type}' placeholder='${placeholder}' id='${id}'/>`;
    return input;
}

//form
form.innerHTML = `
    <h2>Add User</h2>
    <div>${createLabel('First name:')}${createInput('text', 'First name', 'FirstName')}</div>
    <div>${createLabel('Last name:')}${createInput('text', 'Last name', 'LastName')}</div>
    <div>${createLabel('Last name:')}${createInput('date', null, 'birthDate')}</div>
    <div>${createLabel('Email:')}${createInput('email', 'Email', 'Email')}</div>
    <div>${createLabel('Password:')}${createInput('password', 'Password', 'Password')}</div>
    <button class='btn' type='submit'>Submit</button>
`;

document.body.appendChild(form);

// adding class to divs
document.querySelector('form').querySelectorAll('div').forEach(div => {
    div.className = 'input-container';
});

//output
form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.body.style.display = 'grid';
    document.body.style.gridTemplateColumns = '1fr 1fr';

    const firstName = document.getElementById('FirstName').value;
    const lastName = document.getElementById('LastName').value;
    const birthDate = document.getElementById('birthDate').value;
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;

    function getFullName() {
        const fullName = `${firstName} ${lastName}`;
        return fullName;
    }

    validation();
    function validation() {
        if(firstName == "" || lastName == "" || birthDate == "" || email == "" || password == ""){
            alert('All fields must be completed');
            return;
        }else{
            createUser();
            document.querySelectorAll('input').forEach(input => {
                input.value = '';
            })
        }
    }

    function calculateAge(dob) {
        let birthday = new Date(dob);
        let ageDif = Date.now() - birthday;
        const ageDate = new Date(ageDif);

        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    function createUser() {
        const ul = document.createElement('ul');
        ul.id = 'userDetails';

        ul.innerHTML = `
            <h4>${getFullName()}</h4>
            <img src="https://source.unsplash.com/jzz_3jWMzHA" style="height
            :150px;border-radius:25px"/>
            <li>First Name: <span>${firstName}</span></li>
            <li>Last Name: <span>${lastName}</span></li>
            <li>Birth date: <span>${birthDate}</span></li>
            <li>Age: <span>${calculateAge(birthDate)}</span></li>
            <li>Email: <span>${email}</span></li>
        `;
        document.body.appendChild(ul);
        ul.className = 'animate-in';
    }
})