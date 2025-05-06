const loginButton = document.getElementById('loginButton');
const errorMessage = document.getElementById('errorMessage');
const registerButton = document.getElementById('registerButton');
const registerErrorMessage = document.getElementById('registerErrorMessage');
const showRegisterLink = document.getElementById('showRegister');
const loginForm = document.querySelector('.signin');
const registerForm = document.getElementById('registerForm');

showRegisterLink.addEventListener('click', function(e) {
    e.preventDefault();
    if (registerForm.style.display === 'none') {
        registerForm.style.display = 'flex';
        loginForm.style.display = 'none';
        errorMessage.textContent = '';
        registerErrorMessage.textContent = '';
    } else {
        registerForm.style.display = 'none';
        loginForm.style.display = 'flex';
        errorMessage.textContent = '';
        registerErrorMessage.textContent = '';
    }
});

registerButton.addEventListener('click', function() {
    const regUsername = document.getElementById('regUsername').value.trim();
    const regPassword = document.getElementById('regPassword').value.trim();

    if (!regUsername || !regPassword) {
        registerErrorMessage.textContent = "Please enter both username and password";
        return;
    }

    localStorage.setItem('registeredUsername', regUsername);
    localStorage.setItem('registeredPassword', regPassword);

    alert('Successfully registered');

    document.getElementById('regUsername').value = '';
    document.getElementById('regPassword').value = '';

    registerForm.style.display = 'none';
    loginForm.style.display = 'flex';
    registerErrorMessage.textContent = '';
});

loginButton.addEventListener('click', function(){
    const username = document.getElementById('Username').value.trim();
    const password = document.getElementById('password').value.trim();

    const registeredUsername = localStorage.getItem('registeredUsername');
    const registeredPassword = localStorage.getItem('registeredPassword');

   

    if ((username === registeredUsername && password === registeredPassword) || (username === validname && password === validpassw)) {
        window.location.href = "htm.htm";
        alert('login successful!');
    } else {
        errorMessage.textContent = "Invalid username or password";
        alert('Please enter valid credentials');
    }
});
