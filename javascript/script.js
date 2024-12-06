
// Funzione per mostrare/nascondere il menu hamburger
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    if (!menu || !hamburger) {
        console.warn("Menu o hamburger non trovati nel DOM.");
        return;
    }
    menu.classList.toggle('active');
    hamburger.classList.toggle('is-active');
}

// Chiudi il menu cliccando su un link del menu
document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.menu a');
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');

    if (!menu || !hamburger) {
        console.warn("Menu o hamburger non trovati nel DOM.");
        return;
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                hamburger.classList.remove('is-active');
            }
        });
    });
});

// Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides ? slides.length : 0;

function changeSlide(direction) {
    if (!slides || totalSlides === 0) {
        console.warn("Nessuna slide trovata.");
        return;
    }
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Scorrimento automatico solo se ci sono slide
if (totalSlides > 0) {
    setInterval(() => {
        changeSlide(1);
    }, 5000); // Cambia slide ogni 5 secondi
}

// Funzione per aprire e chiudere tabelle
function toggleDetails(id) {
    const details = document.getElementById(id);
    if (!details) {
        console.warn(`Elemento con id "${id}" non trovato.`);
        return;
    }
    details.classList.toggle('hidden');
    details.classList.toggle('active');
}

// Aggiunge animazione a "Chi sono"
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about-container");

    if (!aboutSection) {
        console.warn("L'elemento '.about-container' non è stato trovato nel DOM.");
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    aboutSection.style.animation = "fadeIn 1.5s ease-in-out forwards";
                    observer.disconnect(); // Disconnetti l'osservatore dopo l'attivazione
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(aboutSection);
});

// Nascondi il loader una volta caricata la pagina
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (!loader) {
        console.warn("Elemento loader non trovato.");
        return;
    }

    console.log("Page fully loaded. Hiding loader...");
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 700); // Nascondi il loader con un ritardo
});

// Funzione per validare il form
function validateForm(event) {
    event.preventDefault(); // Previene l'invio del form

    // Ottieni i campi del modulo
    const fields = {
        name: document.getElementById('name'),
        surname: document.getElementById('surname'),
        email: document.getElementById('email'),
        subject: document.getElementById('subject'),
        message: document.getElementById('message')
    };

    // Regex per validare l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let hasError = false;

    // Funzione per mostrare l'errore
    function showError(input, message) {
        if (!input) return;
        const errorElement = input.nextElementSibling;
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.color = 'red';
        }
        input.style.borderColor = 'red';
        hasError = true;
    }

    // Funzione per rimuovere l'errore
    function removeError(input) {
        if (!input) return;
        const errorElement = input.nextElementSibling;
        if (errorElement) {
            errorElement.textContent = '';
        }
        input.style.borderColor = '';
    }

    // Validazione dei campi
    Object.entries(fields).forEach(([key, input]) => {
        if (!input || !input.value.trim()) {
            showError(input, `Il campo ${key} è obbligatorio.`);
        } else if (key === 'email' && !emailRegex.test(input.value)) {
            showError(input, 'Inserisci un indirizzo email valido.');
        } else {
            removeError(input);
        }
    });

    // Se non ci sono errori, invia il form
    if (!hasError) {
        alert('Grazie per avermi contattato');
    }
}

// Supporto per dispositivi touch
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    if (!hamburger) {
        console.warn("Elemento hamburger non trovato.");
        return;
    }
    hamburger.addEventListener('touchstart', toggleMenu, { passive: true });
});
