
// Este evento se asegura de que todo el código se ejecute solo cuando
// el documento HTML se haya cargado por completo.
document.addEventListener('DOMContentLoaded', () => {

    // SECCIÓN 0: LÓGICA PARA LA PANTALLA DE BIENVENIDA

    // Seleccionamos la pantalla de bienvenida
    const splashScreen = document.getElementById('splash-screen');

    // Usamos setTimeout para ejecutar una función después de un tiempo
    setTimeout(() => {
        // Después de 3 segundos (3000 milisegundos), añade la clase 'hidden'
        splashScreen.classList.add('hidden');
    }, 1000); // <-- Puedes cambiar este número (en milisegundos)

    // SECCIÓN 1: LÓGICA PARA EL MENÚ HAMBURGUESA (MÓVIL)

    // Seleccionamos los elementos del DOM que necesitamos para el menú.
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');

    // Creamos un evento que "escuche" el clic sobre el ícono de hamburguesa.
    hamburger.addEventListener('click', () => {
        // Cuando se hace clic, se añade o quita la clase 'active'.
        // Esta clase es la que usamos en CSS para mostrar u ocultar el menú.
        navLinks.classList.toggle('active');
        authButtons.classList.toggle('active');
    });


    // SECCIÓN 2: LÓGICA PARA LA BARRA DE BÚSQUEDA

    // Seleccionamos los elementos para la funcionalidad de búsqueda.
    const searchButton = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-bar input');

    // Creamos un evento que "escuche" el clic sobre el botón de buscar.
    searchButton.addEventListener('click', () => {
        // Obtenemos el texto que el usuario escribió en el campo.
        const searchTerm = searchInput.value;

        // Verificamos si el usuario escribió algo.
        if (searchTerm) {
            // Si hay texto, mostramos una alerta de búsqueda.
            alert(`Buscando: "${searchTerm}"... \n(Esta es una demostración frontend)`);
        } else {
            // Si no hay texto, pedimos que escriba un destino.
            alert('Por favor, escribe un destino para buscar.');
        }
    });

    // SECCIÓN 3: NAVEGACIÓN DE BOTONES

    // Seleccionamos el botón de iniciar sesión.
    const loginButton = document.querySelector('.btn-login');

    // Creamos un evento que "escuche" el clic sobre el botón.
    loginButton.addEventListener('click', () => {
        // Redirigimos al usuario a la página de login.
        window.location.href = '../webwindows/login.html'; // <-- Cambia 'login.html' al nombre de tu archivo.
    });

    // Seleccionamos el botón de registrarse.
    const registerButton = document.querySelector('.btn-register');

    // Creamos un evento que "escuche" el clic sobre el botón.
    registerButton.addEventListener('click', () => {
        // Redirigimos al usuario a la página de login.
        window.location.href = '../webwindows/registration.html'; // <-- Cambia 'login.html' al nombre de tu archivo.
    });

    // SECCIÓN 4: NAVEGACIÓN DE TARJETAS DE RECOMENDACIÓN

    // Seleccionamos todas las tarjetas que tienen la clase 'clickable-card'.
    const clickableCards = document.querySelectorAll('.clickable-card');

    if (clickableCards.length > 0) {
        // Recorremos todas las tarjetas encontradas
        clickableCards.forEach(card => {
            card.addEventListener('click', () => {
                // Obtenemos la URL del atributo 'data-href'
                const destinationURL = card.getAttribute('data-href');

                // Verificamos que la URL exista
                if (destinationURL) {
                    // Redirigimos al usuario a la página específica
                    window.location.href = destinationURL;
                }
            });
        });
    }

    // ====================================================================
    // SECCIÓN 4: LÓGICA DEL MAPA (AHORA DENTRO DE DOMContentLoaded)
    // ====================================================================

    // 1. Inicializar el mapa
    const map = L.map('map', { zoomControl: false }).setView([11.17, -74.02], 11.45);

    // 2. Añadir una capa de mapa base satelital
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri'
    }).addTo(map);

    // 3. Añadir control de zoom en otra posición
    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);

    // 4. Iconos personalizados para los marcadores
    const customIcons = {
        agua: L.icon({ iconUrl: '../img/Sea.png', iconSize: [50, 65], iconAnchor: [20, 40], popupAnchor: [0, -35] }),
        senderismo: L.icon({ iconUrl: '../img/Mountains.png', iconSize: [50, 65], iconAnchor: [20, 40], popupAnchor: [0, -35] }),
        museo: L.icon({ iconUrl: '../img/Museum.png', iconSize: [50, 65], iconAnchor: [20, 40], popupAnchor: [0, -35] }),
        parapente: L.icon({ iconUrl: '../img/Parapente.png', iconSize: [50, 65], iconAnchor: [20, 40], popupAnchor: [0, -35] }),
        cascada: L.icon({ iconUrl: '../img/Waterfall.png', iconSize: [50, 65], iconAnchor: [20, 40], popupAnchor: [0, -35] }),
        iglesia: L.icon({ iconUrl: '../img/Church.png', iconSize: [50, 65], iconAnchor: [20, 40], popupAnchor: [0, -35] }),
        bosque: L.icon({ iconUrl: '../img/Forest.png', iconSize: [50, 65], iconAnchor: [20, 40], popupAnchor: [0, -35] }),
        default: L.icon({ iconUrl: 'https://i.imgur.com/80t3f2A.png', iconSize: [50, 65], iconAnchor: [20, 40], popupAnchor: [0, -35] })
    };
    
    // 5. Lista de lugares
    const locations = [
    {
        name: "Playa Chengue",
        coords: [11.317452, -74.132434],
        info: "<h3>Playa Chengue</h3><p>Una playa virgen y tranquila dentro del Parque Tayrona, ideal para desconectarse.</p><a href='ver-mas.html' class='button-link'>Ver más...</a>",
        type: 'agua'
    },
    {
        name: "Río Buritaca",
        coords: [11.263781, -73.767478],
        info: "<h3>Río Buritaca</h3><p>Famoso por el encuentro del río con el mar, una experiencia única para disfrutar de la naturaleza.</p><a href='ver-mas.html' class='button-link'>Ver más...</a>",
        type: 'agua'
    },
    {
        name: "Cascada Oculta",
        coords: [11.234231, -73.802480],
        info: "<h3>Cascada Oculta</h3><p>Una joya escondida en las cercanías de la Sierra Nevada, perfecta para los amantes del senderismo.</p><a href='ver-mas.html' class='button-link'>Ver más...</a>",
        type: 'cascada'
    },
    {
        name: "Bahía Concha",
        coords: [11.297815, -74.150461],
        info: "<h3>Bahía Concha</h3><p>Una de las bahías más populares y accesibles cerca de Santa Marta, con aguas tranquilas y cristalinas.</p><a href='#' class='button-link'>Ver más...</a>",
        type: 'agua'
    },
    {
        name: "Playa Cristal",
        coords: [11.328379, -74.077403],
        info: "<h3>Playa Cristal</h3><p>Conocida por sus arenas blancas y aguas turquesas, un paraíso para el snorkel y el descanso.</p><a href='#' class='button-link'>Ver más...</a>",
        type: 'agua'
    },
    {
        name: "Pozo Azul",
        coords: [11.134202, -74.102812],
        info: "<h3>Pozo Azul</h3><p>Un conjunto de pozos y cascadas de agua fría en Minca, ideal para un refrescante baño.</p><a href='#' class='button-link'>Ver más...</a>",
        type: 'agua'
    },
    {
        name: "Cascadas de Marinka",
        coords: [11.117245, -74.118646],
        info: "<h3>Cascadas de Marinka</h3><p>Dos imponentes caídas de agua con pozos para nadar, ubicadas en el corazón de Minca.</p><a href='#' class='button-link'>Ver más...</a>",
        type: 'cascada'
    },
    {
        name: "Ciudad Perdida",
        coords: [11.038523, -73.925182],
        info: "<h3>Ciudad Perdida (Teyuna)</h3><p>Antigua ciudad de los Taironas, un destino arqueológico que se alcanza tras una caminata de varios días.</p><a href='#' class='button-link'>Ver más...</a>",
        type: 'bosque'
    },
    {
        name: "Río Guachaca",
        coords: [11.127531, -73.950591],
        info: "<h3>Río Guachaca</h3><p>Un río de la Sierra Nevada que desemboca en el mar, con hermosos paisajes y playas tranquilas.</p><a href='#' class='button-link'>Ver más...</a>",
        type: 'agua'
    },
    {
        name: "Vista Nieve",
        coords: [11.084246, -74.083300],
        info: "<h3>Vista Nieve</h3><p>Una finca cafetera en la Sierra Nevada con impresionantes vistas a los picos nevados.</p><a href='#' class='button-link'>Ver más...</a>",
        type: 'senderismo'
    },
    {
        name: "La Tagua",
        coords: [11.081491, -74.044816],
        info: "<h3>La Tagua</h3><p>Una pequeña vereda en la Sierra Nevada, punto de partida para varias caminatas a cascadas.</p><a href='#' class='button-link'>Ver más...</a>",
        type: 'senderismo'
    },
    {
        name: "Laberinto Macondo",
        coords: [11.280312, -73.873282],
        info: "<h3>Laberinto Macondo</h3><p>Un lugar mágico y tranquilo para conectarse con la naturaleza, cerca del Parque Tayrona.</p><a href='#' class='button-link'>Ver más...</a>",
        type: 'bosque'
    },
    {
        name: "Parque de los Novios",
        coords: [11.242371, -74.213236],
        info: "<h3>Parque de los Novios</h3><p>El corazón de la vida nocturna de Santa Marta, rodeado de bares, restaurantes y un ambiente animado.</p><a href='#' class='button-link'>Ver más...</a>",
        type: 'museo'
    },
    {
        name: "Quinta de San Pedro Alejandrino",
        coords: [11.229411, -74.177662],
        info: "<h3>Quinta de San Pedro Alejandrino</h3><p>Lugar histórico donde Simón Bolívar pasó sus últimos días, un museo y jardín botánico imprescindible.</p><a href='#' class='button-link'>Ver más...</a>",
        type: 'museo'
    },
    {
        name: "Catedral Basílica",
        coords: [11.243444, -74.211024],
        info: "<h3>Catedral Basílica de Santa Marta</h3><p>Una de las iglesias más antiguas de Colombia y un importante hito arquitectónico en el centro histórico.</p><a href='#' class='button-link'>Ver más...</a>",
        type: 'iglesia'
    },
    {
        name: "Museo del Oro",
        coords: [11.248391, -74.213136],
        info: "<h3>Museo del Oro Tairona</h3><p>Ubicado en la antigua Casa de la Aduana, alberga una fascinante colección de piezas precolombinas de la cultura Tairona.</p><a href='#' class='button-link'>Ver más...</a>",
        type: 'museo'
    },
    {
        name: "Balneario Bachicha",
        coords: [11.188660, -74.151897],
        info: "<h3>Balneario Bachicha</h3><p>Un refrescante pozo de agua dulce en el río Gaira, ideal para escapar del calor de la ciudad.</p><a href='#' class='button-link'>Ver más...</a>",
        type: 'agua'
    },
    {
        name: "Minca",
        coords: [11.161284, -74.113779],
        info: "<h3>Minca</h3><p>Un pintoresco pueblo en la Sierra Nevada, famoso por sus fincas cafeteras, cascadas y avistamiento de aves.</p><a href='#' class='button-link'>Ver más...</a>",
        type: 'senderismo'
    },
    {
        name: "Playa Pozos Colorados",
        coords: [11.164845, -74.230169],
        info: "<h3>Playa Pozos Colorados</h3><p>Una playa cercana al aeropuerto, con aguas tranquilas y arenas oscuras, perfecta para un día de sol y mar.</p><a href='#' class='button-link'>Ver más...</a>",
        type: 'agua'
    },
    {
        name: "Cuchilla San Lorenzo",
        coords: [11.117005, -74.033684],
        info: "<h3>Cuchilla San Lorenzo</h3><p>Un mirador en la Sierra Nevada que ofrece vistas espectaculares de los picos nevados y el mar Caribe.</p><a href='#' class='button-link'>Ver más...</a>",
        type: 'senderismo'
    },
    {
        name: "Cabo de San Juan",
        coords: [11.333400, -73.962246],
        info: "<h3>Cabo de San Juan</h3><p>Uno de los puntos más icónicos del Parque Tayrona, conocido por sus hamacas con vista al mar y la confluencia de dos playas.</p><a href='#' class='button-link'>Ver más...</a>",
        type: 'agua'
    },
    {
        name: "Punto de Vuelo de Parapente",
        coords: [11.200500, -74.265000],
        info: "<h3>Punto de Vuelo de Parapente</h3><p>Un lugar popular para practicar parapente con vistas panorámicas de la bahía y la ciudad.</p><a href='#' class='button-link'>Ver más...</a>",
        type: 'parapente'
    }
    ];

    // 6. Añadir marcadores al mapa
    locations.forEach(location => {
        let icon = customIcons[location.type] || customIcons.default;
        const marker = L.marker(location.coords, { icon: icon }).addTo(map);
        marker.bindPopup(location.info);
    });

});