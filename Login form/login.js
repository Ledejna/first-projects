const password = document.getElementById('password');
const eyeIcon = document.querySelector('i.fa-eye');
const username = document.getElementById('username');
const loginForm = document.getElementById('loginForm');
const loginContainer = document.querySelector('.login-container');

eyeIcon.addEventListener('click', showPassword);

//show hide password

function showPassword() {
    if (password.type === 'password') {
        password.type = 'text';
        eyeIcon.style.color = '#5151FD';
    } else {
        password.type = 'password';
        eyeIcon.style.color = '#ddd';
    }
}

// simple validation

loginForm.addEventListener('submit', submitValidation);

function submitValidation(event) {
    event.preventDefault();

    if (username.value === "" || username.value.length < 3) {
        showError(username, "Username can not be empty or less than 3");
    } else {
        showSucces(username);
    }
    if (password.value === "" || password.value.length < 6) {
        showError(password, "Password can not be empty or less than 6");
    } else {
        showSucces(password);
    }
};

// error message

function showError(input, message) {
    const formField = input.parentElement;
    formField.className = "form-field error";

    if (formField.className = "form-field error") {
        const alertMsg = formField.querySelector('.alert-msg');
        alertMsg.style.visibility = 'visible';
        alertMsg.style.color = 'red';
        alertMsg.innerText = message;
    }
}

//succses message

function showSucces(input, message) {
    const formField = input.parentElement;
    formField.className = "form-field succes";

    if (formField.className = "form-field succes") {
        const alertMsg = formField.querySelector('.alert-msg');
        alertMsg.style.visibility = 'hidden';
        alertMsg.innerText = message;
    }
}

//request form
const requestForm = document.querySelector('.form-request');
const resetPassword = document.querySelector('.reset-password');



requestForm.style.display = 'none';
resetPassword.addEventListener('click', e => {
    e.preventDefault();
    if (requestForm.style.display !== 'block') {
        loginContainer.style.minHeight = '600px';
        requestForm.style.display = 'block';
    } else {
        loginContainer.style.height = 'initial';
        requestForm.style.display = 'none';
    }
});

requestForm.addEventListener('submit', request);

function request(e) {
    e.preventDefault();
    if (requestForm.style.display === "block") {
        const email = document.getElementById('email');
        if (email.value === "") {
            showError(email, "Email can not be empty");
        } else {
            showSucces(email);
        }
    }
};