document.addEventListener('DOMContentLoaded', () => {
    // --- CÓDIGO PARA LA VENTANA EDITAR PERFIL ---
    // Selecciona los elementos del DOM que necesitamos
    const editProfileBtn = document.getElementById('edit_profile_btn');
    const modal = document.getElementById('edit_profile_modal');
    const closeModalBtn = document.querySelector('.close_modal_btn');
    const modalContent = document.querySelector('.modal_content');

    // Comprueba si los elementos del modal existen en la página actual
    if (editProfileBtn && modal && closeModalBtn) {

        // Abre el modal al hacer clic en el botón "Editar Perfil"
        editProfileBtn.addEventListener('click', () => {
            modal.classList.add('active');
        });

        // Cierra el modal al hacer clic en el botón de la "X"
        closeModalBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        // Cierra el modal al hacer clic en "Guardar Cambios"
        const saveChangesBtn = document.querySelector('.save_changes_btn');
        saveChangesBtn.addEventListener('click', (event) => {
            modal.classList.remove('active');
        });
    }

    // --- CÓDIGO PARA LA VENTANA CAMBIAR CONTRASEÑA ---
    const changePasswordBtn = document.getElementById('chg_passwprd_btn');
    const changePasswordModal = document.getElementById('change_password_modal');

    // Si los elementos existen, añade los event listeners
    if (changePasswordBtn && changePasswordModal) {

        changePasswordBtn.addEventListener('click', () => {
            changePasswordModal.classList.add('active');
        });

        const closePasswordModalBtn = changePasswordModal.querySelector('.close_modal_btn');
        closePasswordModalBtn.addEventListener('click', () => {
            changePasswordModal.classList.remove('active');
        });
    }

    // --- CÓDIGO PARA LA VENTANA DE CERRAR SESIÓN ---
    const logoutIcon = document.querySelector('.logout_icon_container');
    const logoutModal = document.getElementById('logout_confirm_modal');
    const confirmLogoutBtn = document.getElementById('confirm_logout_btn');
    const cancelLogoutBtn = document.getElementById('cancel_logout_btn');

    if (logoutIcon && logoutModal) {

        // 1. Mostrar el modal al hacer clic en el ícono de logout
        logoutIcon.addEventListener('click', (event) => {
            event.preventDefault(); // Evita que el enlace salte a una nueva página si tiene #
            logoutModal.classList.add('active');
        });

        // 2. Cerrar el modal al hacer clic en 'Cancelar'
        cancelLogoutBtn.addEventListener('click', () => {
            logoutModal.classList.remove('active');
        });

        // 3. Lógica al CONFIRMAR el cierre de sesión
        confirmLogoutBtn.addEventListener('click', () => {
            // Por ahora, solo se cierra el modal y se redirecciona a la página de inicio de sesión
            logoutModal.classList.remove('active');
            window.location.href = './login.html';
        });

        // 4. Cerrar el modal al hacer clic en el fondo oscuro
        logoutModal.addEventListener('click', (event) => {
            if (event.target === logoutModal) {
                logoutModal.classList.remove('active');
            }
        });
    }
});