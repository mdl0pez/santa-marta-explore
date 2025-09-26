// Pequeño script para el ojo de la contraseña
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const icon = document.querySelector('.toggle-password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
}

// Seleccionamos el botón de iniciar sesión.
    const loginButton = document.querySelector('.btn-login');

    // Creamos un evento que "escuche" el clic sobre el botón.
    loginButton.addEventListener('click', () => {
        // Redirigimos al usuario a la página de login.
        window.location.href = '../webwindows/login.html'; // <-- Cambia 'login.html' al nombre de tu archivo.
    });