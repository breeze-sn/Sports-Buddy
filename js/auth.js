import { auth } from './firebaseConfig.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js';

function login() {
    return `
        <h2>Login</h2>
        <form id="login-form">
            <label for="login-email">Email:</label>
            <input type="email" id="login-email" required>
            <label for="login-password">Password:</label>
            <input type="password" id="login-password" required>
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="#register">Register here</a></p>
    `;
}

document.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (event.target.id === 'login-form') {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('Logged in:', userCredential.user);
        } catch (error) {
            console.error('Error logging in:', error);
        }
    }
});

export { login };
import { auth } from './firebaseConfig.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js';

function register() {
    return `
        <h2>Register</h2>
        <form id="register-form">
            <label for="register-email">Email:</label>
            <input type="email" id="register-email" required>
            <label for="register-password">Password:</label>
            <input type="password" id="register-password" required>
            <button type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="#login">Login here</a></p>
    `;
}

document.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (event.target.id === 'register-form') {
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('Registered:', userCredential.user);
        } catch (error) {
            console.error('Error registering:', error);
        }
    }
});

export { register };
