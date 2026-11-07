function toggleForms() {
    const signup = document.getElementById('signup-container');
    const login = document.getElementById('login-container');

    if (signup.style.display === 'none') {
        signup.style.display = 'block';
        login.style.display = 'none';
    } else {
        signup.style.display = 'none';
        login.style.display = 'block';
    }
}