// scripts.js

// Smooth Scroll Behavior for Navigation Links
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll(link.getAttribute('href'));
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Typing Animation for Hero Section Roles
const Typed = require('typed.js');
const options = {
    strings: ['Developer', 'Designer', 'Creator'],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
};
const typed = new Typed('.typed-role', options);

// Intersection Observer for Scroll-Triggered Animations
const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
};
const observer = new IntersectionObserver(observerCallback);
const elementsToObserve = document.querySelectorAll('.fade-in, .slide-up');
elementsToObserve.forEach(element => observer.observe(element));

// Animated Counters for About Section Stats
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    let count = 0;
    const target = +counter.getAttribute('data-target');
    const speed = 200; // Increase speed for faster count

    const updateCount = () => {
        const increment = target / speed;
        if (count < target) {
            count += increment;
            counter.textContent = Math.ceil(count);
            setTimeout(updateCount, 1);
        } else {
            counter.textContent = target;
        }
    };
    updateCount();
});

// Animated Progress Bars that Fill on Scroll
const progressBars = document.querySelectorAll('.progress');
const fillProgressBars = () => {
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        bar.style.width = value + '%';
    });
};

window.addEventListener('scroll', fillProgressBars);

// Project Filter System with Smooth Transitions
const filterButtons = document.querySelectorAll('.filter-button');
const projects = document.querySelectorAll('.project');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        projects.forEach(project => {
            if (filter === 'all' || project.classList.contains(filter)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Testimonials Carousel/Slider
let slideIndex = 0;
const showSlides = () => {
    const slides = document.querySelectorAll('.testimonial');
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
    slideIndex = (slideIndex + 1) % slides.length;
};
setInterval(showSlides, 5000);

// Contact Form Validation and Submission Handling
const contactForm = document.querySelector('#contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Perform validation
    // If valid, submit the form
});

// Mobile Hamburger Menu with Slide-In Animation
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Cursor Glow Effect on Mouse Move
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
