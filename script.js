const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
let autoSlideInterval;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    currentSlide = (n + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
    resetAutoSlide();
}

function prevSlide() {
    showSlide(currentSlide - 1);
    resetAutoSlide();
}

function goToSlide(n) {
    showSlide(n);
    resetAutoSlide();
}

function autoSlide() {
    autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlide();
}

// Start auto-sliding
autoSlide();

// Pause auto-slide on hover
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

sliderContainer.addEventListener('mouseleave', () => {
    autoSlide();
});

// Contact form validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const subject = document.getElementById("contactSubject").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        if (!name || !email || !subject || !message) {
            event.preventDefault();
            alert("Please fill in all fields.");
            return;
        }

        // Allow the browser to submit the form to FormSubmit.
    });
}