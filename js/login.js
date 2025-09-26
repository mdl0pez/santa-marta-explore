document.addEventListener('DOMContentLoaded', () => {
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

    // Seleccionamos el botón de registro.
    const registerButton = document.querySelector('.btn-register');

    // Creamos un evento que "escuche" el clic sobre el botón.
    registerButton.addEventListener('click', () => {
        // Redirigimos al usuario a la página de login.
        window.location.href = '../webwindows/registration.html';
    });

    const loginForm = document.querySelector('form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            // 1. Previene el comportamiento por defecto del formulario (enviar datos y recargar)
            event.preventDefault();

            // 2. Aquí iría la lógica para validar el usuario y la contraseña (no incluida)
            // if (credencialesSonValidas) { ... }

            // 3. Si las credenciales son válidas (o para el propósito de la maquetación):
            // Redirige a la página principal. Usamos '..' para subir una carpeta (de 'webwindows' a la raíz).
            window.location.href = '../index.html';
        });
    }
})