import { login, register } from './auth.js';
import { loadEvents } from './events.js';

document.addEventListener('DOMContentLoaded', () => {
    // Load initial content
    loadPage('login');

    // Setup navigation
    document.querySelector('nav').addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            const page = event.target.getAttribute('href').substring(1);
            loadPage(page);
            event.preventDefault();
        }
    });
});

function loadPage(page) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    switch (page) {
        case 'login':
            mainContent.innerHTML = login();
            break;
        case 'register':
            mainContent.innerHTML = register();
            break;
        case 'events':
            loadEvents(mainContent);
            break;
        case 'admin':
            // Admin functions to be implemented
            break;
        default:
            mainContent.innerHTML = '<h2>Page not found</h2>';
    }
}
