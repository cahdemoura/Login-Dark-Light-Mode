const mode = document.getElementById('mode-icon');

mode.addEventListener('click', () => {
    const dark = document.getElementById('login-form');

    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun');
        dark.classList.add('dark');
    }
    else {
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon')
        dark.classList.remove('dark');
    }
})