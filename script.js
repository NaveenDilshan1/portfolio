// Scroll Sections Active Link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-links a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            let activeLink = document.querySelector('.nav-links a[href*="' + id + '"]');
            if(activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};

// Intersection Observer for scroll animations (fade in elements)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Background Particles Animation
function createParticles() {
    const container = document.querySelector('.animation-container');
    if (!container) return;

    for (let i = 0; i < 40; i++) {
        let particle = document.createElement('div');
        particle.className = 'particle';
        
        let size = (Math.random() * 3 + 1) + 'px';
        let left = Math.random() * 100 + 'vw';
        let duration = (Math.random() * 20 + 15) + 's';
        let delay = (Math.random() * 20) + 's';
        
        particle.style.width = size;
        particle.style.height = size;
        particle.style.left = left;
        particle.style.animationDuration = duration;
        particle.style.animationDelay = delay;
        
        container.appendChild(particle);
    }
}
createParticles();

// Theme Toggle Logic
const themeToggleBtn = document.querySelector('.theme-toggle');
if (themeToggleBtn) {
    const themeIcon = themeToggleBtn.querySelector('i');

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        if(themeIcon) themeIcon.classList.replace('bx-moon', 'bx-sun');
    } else {
        // Default is dark, ensure class is set
        document.documentElement.classList.add('dark');
    }

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        if (document.documentElement.classList.contains('dark')) {
            // Switch to light mode
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            if(themeIcon) themeIcon.classList.replace('bx-moon', 'bx-sun');
            localStorage.setItem('theme', 'light');
        } else {
            // Switch to dark mode
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
            if(themeIcon) themeIcon.classList.replace('bx-sun', 'bx-moon');
            localStorage.setItem('theme', 'dark');
        }
    });
}
