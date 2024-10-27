const authModal = document.getElementById('authModal');
const loginBtn = document.getElementById('loginBtn');
const closeModal = document.getElementById('closeModal');
const authForm = document.getElementById('authForm');
const toggleAuth = document.getElementById('toggleAuth');
const getStartedBtn = document.getElementById('getStartedBtn');

let isLoginMode = true;

loginBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
});

getStartedBtn.addEventListener('click', () => {
    if (!localStorage.getItem('currentUser')) {
        authModal.style.display = 'flex';
    } else {
        window.location.href = 'Create-Superhero.html';
    }
});

closeModal.addEventListener('click', () => {
    authModal.style.display = 'none';
});

toggleAuth.addEventListener('click', (e) => {
    e.preventDefault();
    isLoginMode = !isLoginMode;
    toggleAuth.textContent = isLoginMode ? 'Register' : 'Login';
    authForm.querySelector('button').textContent = isLoginMode ? 'Login' : 'Register';
    authForm.querySelector('h2').textContent = isLoginMode ? 'Login' : 'Register';
});

authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || {};

    if (isLoginMode) {
        // Login
        if (users[username] && users[username].password === password) {
            localStorage.setItem('currentUser', username);
            window.location.href = 'Create-Superhero.html';
        } else {
            alert('Invalid credentials');
        }
    } else {
        // Register
        if (users[username]) {
            alert('Username already exists');
            return;
        }
        users[username] = {
            password: password,
            heroes: []
        };
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', username);
        window.location.href = 'Create-Superhero.html';
    }
});

// Check if user is logged in
window.addEventListener('load', () => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        loginBtn.textContent = 'Logout';
        loginBtn.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            window.location.reload();
        });
    }
});

window.addEventListener('click', (e) => {
    if (e.target === authModal) {
        authModal.style.display = 'none';
    }
});
