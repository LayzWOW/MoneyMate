// Theme Toggle Logic
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-toggle');
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        btn.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        btn.textContent = '🌙';
    }
}

// Initialize Theme
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const btn = document.getElementById('theme-toggle');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (btn) btn.textContent = '☀️';
    }
});
