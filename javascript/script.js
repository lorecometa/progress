
// Funzione per mostrare/nascondere il menu hamburger
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    if (menu) {
        menu.classList.toggle('active');
        hamburger.classList.toggle('is-active');
    }
}

// Chiudi il menu cliccando su un link del menu
document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.querySelector('.menu');
            const hamburger = document.querySelector('.hamburger');
            if (menu && menu.classList.contains('active')) {
                menu.classList.remove('active');
                hamburger.classList.remove('is-active');
            }
        });
    });
});


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Funzione per cambiare slide
function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Scorrimento automatico
setInterval(() => {
    changeSlide(1);
}, 5000); // Cambia slide ogni 5 secondi



// funzioni per aprire e chiudere tabelle

function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden'); // Mostra i dettagli
        details.classList.add('active');
    } else {
        details.classList.add('hidden'); // Nascondi i dettagli
        details.classList.remove('active');
    }
}

// aggiunge animazione a chi sono

document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about-container");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    aboutSection.style.animation = "fadeIn 1.5s ease-in-out forwards";
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(aboutSection);
});





document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {
        console.log("Page fully loaded. Hiding loader...");
        // Ritardo di 2 secondi prima di nascondere il loader
        setTimeout(() => {
            loader.classList.add("hidden");
        }, 700); // 2000 millisecondi = 2 secondi
    });
});


/// Funzione per validare il form
function validateForm(event) {
    event.preventDefault(); // Previene l'invio del form

    // Ottieni i campi del modulo
    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    // Regex per validare l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Flag per verificare se ci sono errori
    let hasError = false;

    // Funzione per mostrare l'errore
    function showError(input, message) {
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
        const errorElement = input.nextElementSibling;
        if (errorElement) {
            errorElement.textContent = '';
        }
        input.style.borderColor = '';
    }

    // Validazione dei campi
    if (!name.value.trim()) {
        showError(name, 'Il nome è obbligatorio.');
    } else {
        removeError(name);
    }

    if (!surname.value.trim()) {
        showError(surname, 'Il cognome è obbligatorio.');
    } else {
        removeError(surname);
    }

    if (!email.value.trim() || !emailRegex.test(email.value)) {
        if (!email.value.includes('@')) {
            showError(email, 'L\'email deve contenere il simbolo "@"');
        } else {
            showError(email, 'Inserisci un indirizzo email valido.');
        }
    } else {
        removeError(email);
    }

    if (!subject.value.trim()) {
        showError(subject, 'L\'oggetto è obbligatorio.');
    } else {
        removeError(subject);
    }

    if (!message.value.trim()) {
        showError(message, 'Il messaggio è obbligatorio.');
    } else {
        removeError(message);
    }

    // Se non ci sono errori, invia il form
    if (!hasError) {
        alert('Form inviato con successo!');
        document.getElementById('contactForm').reset(); // Reset del form
    }
}

// Ensure menu works on touch devices
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('touchstart', toggleMenu);
});
