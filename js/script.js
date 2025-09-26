document.addEventListener('DOMContentLoaded', () => {

    // --- CÓDIGO PARA EL BOTÓN DE AÑADIR A FAVORITOS ---
    const addToFavoritesBtn = document.getElementById('btn_add_favorites');
    if (addToFavoritesBtn) {
        addToFavoritesBtn.addEventListener('click', () => {
            addToFavoritesBtn.classList.toggle('added');
            if (addToFavoritesBtn.classList.contains('added')) {
                addToFavoritesBtn.innerHTML = 'Añadido a favoritos <i class="fas fa-heart"></i>';
            } else {
                addToFavoritesBtn.innerHTML = 'Añadir a favoritos <i class="far fa-heart"></i>';
            }
        });
    }

    // --- CÓDIGO PARA EL VISOR DE FOTOS ---
    const photosGrid = document.querySelector('.photos_grid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.querySelector('.close-btn');

    if (photosGrid) {
        photosGrid.addEventListener('click', (event) => {
            if (event.target.tagName === 'IMG') {
                const imageUrl = event.target.src;
                lightboxImage.src = imageUrl;
                lightbox.classList.add('active');
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    }

    document.addEventListener('keydown', event => {
        if (event.key === "Escape" && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
        }
    });

    // Lógica para la navegación en el lightbox
    const allImages = document.querySelectorAll('.photos_grid img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentImageIndex = 0;

    if (photosGrid && lightbox && closeBtn) { // Verifica si existen los elementos
        photosGrid.addEventListener('click', (event) => {
            if (event.target.tagName === 'IMG') {
                const clickedImage = event.target;
                const imageUrl = clickedImage.src;
                lightboxImage.src = imageUrl;
                lightbox.classList.add('active');

                // Encuentra el índice de la imagen clickeada
                currentImageIndex = Array.from(allImages).indexOf(clickedImage);
            }
        });

        prevBtn.addEventListener('click', () => {
            currentImageIndex--;
            if (currentImageIndex < 0) {
                currentImageIndex = allImages.length - 1; // Vuelve al final si llega al principio
            }
            lightboxImage.src = allImages[currentImageIndex].src;
        });

        nextBtn.addEventListener('click', () => {
            currentImageIndex++;
            if (currentImageIndex >= allImages.length) {
                currentImageIndex = 0; // Vuelve al inicio si llega al final
            }
            lightboxImage.src = allImages[currentImageIndex].src;
        });
    }

    // --- CÓDIGO PARA EL MAPA INTERACTIVO (LEAFLET) ---
    const mapContainer = document.getElementById('interactive_map');
    if (mapContainer) { // Verifica si el contenedor del mapa existe
        const santaMartaCoords = [11.2407, -74.1904];
        const map = L.map('interactive_map').setView(santaMartaCoords, 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        const cascadaOcultaCoords = [11.24, -74.19];
        L.marker(cascadaOcultaCoords).addTo(map)
            .bindPopup('<b>Cascada Oculta</b>')
            .openPopup();
    }

    // --- CÓDIGO PARA OCULTAR/MOSTRAR CONTRASEÑA ---
    const togglePassword = document.querySelector('.toggle_password');
    const passwordInput = document.querySelector('.password_group input');

    if (togglePassword && passwordInput) { // Verifica si los elementos existen
        togglePassword.addEventListener('click', function () {
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';
        });
    }

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

});