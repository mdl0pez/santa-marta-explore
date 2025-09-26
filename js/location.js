document.addEventListener('DOMContentLoaded', () => {
    // NAVEGACIÓN DE BOTONES
    
    // Seleccionamos el botón de iniciar sesión.
    const loginButton = document.querySelector('.btn_login');

    // Creamos un evento que "escuche" el clic sobre el botón.
    loginButton.addEventListener('click', () => {
        // Redirigimos al usuario a la página de login.
        window.location.href = '../webwindows/login.html'; // 
    });

    // Seleccionamos el botón de registrarse.
    const registerButton = document.querySelector('.btn_register');

    // Creamos un evento que "escuche" el clic sobre el botón.
    registerButton.addEventListener('click', () => {
        // Redirigimos al usuario a la página de login.
        window.location.href = '../webwindows/registration.html'; // <-- Cambia 'login.html' al nombre de tu archivo.
    });

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
});