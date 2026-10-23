// Ocultar Preloader con seguridad
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }
}

window.addEventListener('load', hidePreloader);
setTimeout(hidePreloader, 2000);

// ===================================================
// CONFIGURACIÓN DE TELÉFONOS DE WHATSAPP
// (Cambiá los ceros por los números reales sin el +)
// ===================================================
const NUMERO_DIRECTORA = "5493815390467"; // Número de Prof. Mirta Valdez
const NUMERO_PROFESORA = "5493865644570"; // Número de Prof. Sofía Quispe

// Mensajes iniciales automáticos
const MSG_DIRECTORA = encodeURIComponent("Hola Prof. Mirta, quisiera realizar una consulta sobre OPEN School of English.");
const MSG_PROFESORA = encodeURIComponent("Hola Prof. Sofía, quisiera consultar sobre los cursos y horarios disponibles.");

// Información Interactiva
const infoData = {
    core: {
        avatar: "",
        title: "OPEN School of English",
        subtitle: "A Door to the World",
        text: "Bienvenido a nuestra institución. Nuestra misión es abrir puertas a nuevas oportunidades globales a través de la enseñanza de excelencia del idioma inglés.",
        btnText: "Ver Cursos",
        btnLink: "javascript:openModal('cursos')"
    },
    mirta: {
        avatar: "assets/profesoras/mirta.jpg",
        title: "Prof. Mirta Valdez",
        subtitle: "Directora Académica | Miembro Rotary Club",
        text: "Líder institucional con amplia trayectoria en la educación del idioma inglés. Comprometida con la excelencia pedagógica, los valores éticos y el desarrollo integral de cada alumno.",
        btnText: "WhatsApp Directora",
        btnLink: `https://wa.me/${NUMERO_DIRECTORA}?text=${MSG_DIRECTORA}`
    },
    sofia: {
        avatar: "assets/profesoras/sofia.jpg",
        title: "Prof. Sofía Quispe",
        subtitle: "Profesora de Inglés",
        text: "Especialista en metodologías de enseñanza dinámicas e interactivas. Enfocada en potenciar la fluidez conversacional y la confianza.",
        btnText: "WhatsApp Profesora",
        btnLink: `https://wa.me/${NUMERO_PROFESORA}?text=${MSG_PROFESORA}`
    },
    cursos: {
        avatar: "",
        title: "Nuestra Oferta Educativa",
        subtitle: "Inglés Inicial hasta Avanzado",
        text: "• Niños & Adolescentes<br>• Inglés Intensivo para Adultos<br>• Clases Particulares y Apoyo Universitario<br>• Talleres de Conversación",
        btnText: "Consultar Inscripciones",
        btnLink: `https://wa.me/${NUMERO_DIRECTORA}?text=${MSG_DIRECTORA}`
    },
    rotary: {
        avatar: "",
        title: "Compromiso Rotary Club",
        subtitle: "Valores & Servicio Comunitario",
        text: "Nuestra dirección forma parte del Rotary Club, promoviendo el servicio a la comunidad, la paz, la integridad académica y la comprensión internacional.",
        btnText: "Cerrar",
        btnLink: "javascript:closeModal()"
    },
    contacto: {
        avatar: "",
        title: "Comunicate con Nosotros",
        subtitle: "Inscripciones Abiertas",
        text: "¡Sumate a OPEN! Seleccioná con quién deseas comunicarte para recibir información de aranceles y horarios:",
        buttons: [
            { text: "Escribir a la Directora (Mirta)", link: `https://wa.me/${NUMERO_DIRECTORA}?text=${MSG_DIRECTORA}` },
            { text: "Escribir a la Profesora (Sofía)", link: `https://wa.me/${NUMERO_PROFESORA}?text=${MSG_PROFESORA}` }
        ]
    }
};

const album1 = [
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.35.jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.35 (1).jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.36.jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.36 (1).jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.37.jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.37 (1).jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.38.jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.38 (1).jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.39.jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.43.jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.43 (1).jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.44.jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.44 (1).jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.44 (2).jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.44 (3).jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.45.jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.45 (1).jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.45 (2).jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.46.jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.46 (1).jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.46 (2).jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.46 (3).jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.47.jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.47 (1).jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.47 (2).jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.48.jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.48 (1).jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.48 (2).jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.48 (3).jpeg",
    "assets/FOTOS1/WhatsApp Image 2026-09-16 at 15.00.49.jpeg"
];

const album2 = [
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.05.50.jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.05.51.jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.05.51 (1).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.05.51 (2).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.05.54.jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.05.55.jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.05.55 (1).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.05.56.jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.05.56 (1).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.05.59.jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.05.59 (1).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.05.59 (2).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.00.jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.00 (1).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.00 (2).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.01.jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.01 (1).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.01 (2).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.01 (3).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.02.jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.02 (1).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.02 (2).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.03.jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.03 (1).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.03 (2).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.03 (3).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.04.jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.04 (1).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.04 (2).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.05.jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.05 (1).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.05 (2).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.05 (3).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.06.jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.06 (1).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.06 (2).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.07.jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.07 (1).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.07 (2).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.07 (3).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.08.jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.08 (1).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.08 (2).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.09.jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.09 (1).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.09 (2).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.09 (3).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.10.jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.10 (1).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.10 (2).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.11.jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.11 (1).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.11 (2).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.11 (3).jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.12.jpeg",
    "assets/FOTOS2/WhatsApp Image 2026-09-16 at 15.06.12 (1).jpeg"
];

const videos = [
    "assets/VIDEOS/VID-20260916-WA0052.mp4",
    "assets/VIDEOS/VID-20260916-WA0054.mp4",
    "assets/VIDEOS/VID-20260916-WA0056.mp4",
    "assets/VIDEOS/VID-20260917-WA0005.mp4",
    "assets/VIDEOS/VID-20260917-WA0006.mp4",
    "assets/VIDEOS/VID-20260917-WA0007.mp4"
];

function openModal(key) {
    const data = infoData[key];
    if (!data) return;
    
    const modalBody = document.getElementById('modalBody');
    const modalCard = document.querySelector('.modal-card');
    
    modalCard.classList.remove('large');
    
    let imgHTML = data.avatar ? `<img src="${data.avatar}" class="modal-avatar" alt="${data.title}" onerror="this.style.display='none'">` : '';
    
    let buttonsHTML = '';
    if (data.buttons && Array.isArray(data.buttons)) {
        buttonsHTML = `<div style="display: flex; flex-direction: column; gap: 10px; margin-top: 15px;">` +
            data.buttons.map(btn => `<a href="${btn.link}" target="_blank" class="btn-action">${btn.text}</a>`).join('') +
            `</div>`;
    } else if (data.btnText && data.btnLink) {
        buttonsHTML = `<a href="${data.btnLink}" ${data.btnLink.startsWith('http') ? 'target="_blank"' : ''} class="btn-action">${data.btnText}</a>`;
    }

    modalBody.innerHTML = `
        ${imgHTML}
        <h3>${data.title}</h3>
        <div class="modal-subtitle">${data.subtitle}</div>
        <p>${data.text}</p>
        ${buttonsHTML}
    `;

    document.getElementById('infoModal').classList.add('active');
}

function openGallery(type) {
    const modalBody = document.getElementById('modalBody');
    const modalCard = document.querySelector('.modal-card');
    modalCard.classList.add('large');

    if (type === 'images') {
        modalBody.innerHTML = `
            <h3>Galería Fotográfica</h3>
            <div class="modal-subtitle">Eventos e Institucional</div>
            <div class="gallery-tabs">
                <button class="tab-btn active" onclick="switchAlbum(1)">Álbum 1 (${album1.length} fotos)</button>
                <button class="tab-btn" onclick="switchAlbum(2)">Álbum 2 (${album2.length} fotos)</button>
            </div>
            <div id="galleryContainer" class="media-grid"></div>
        `;
        switchAlbum(1);
    } else if (type === 'videos') {
        modalBody.innerHTML = `
            <h3>Videoteca</h3>
            <div class="modal-subtitle">Contenido Multimedia (${videos.length} Videos)</div>
            <div class="video-grid">
                ${videos.map((src, i) => `
                    <div class="video-card">
                        <video controls preload="metadata">
                            <source src="${src}" type="video/mp4">
                            Tu navegador no soporta videos HTML5.
                        </video>
                        <p style="font-size: 0.8rem; margin-top: 5px;">Video #${i + 1}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    document.getElementById('infoModal').classList.add('active');
}

function switchAlbum(albumNum) {
    const container = document.getElementById('galleryContainer');
    const tabs = document.querySelectorAll('.tab-btn');
    
    tabs.forEach((tab, index) => {
        tab.classList.toggle('active', index === albumNum - 1);
    });

    const list = albumNum === 1 ? album1 : album2;
    container.innerHTML = list.map((src, i) => `
        <img src="${encodeURI(src)}" class="media-item" alt="Imagen ${i + 1}" loading="lazy" onclick="window.open('${encodeURI(src)}', '_blank')">
    `).join('');
}

function closeModal() {
    const modalCard = document.querySelector('.modal-card');
    modalCard.classList.remove('large');
    document.getElementById('infoModal').classList.remove('active');
}