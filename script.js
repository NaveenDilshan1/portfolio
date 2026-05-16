// Scroll Sections Active Link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky Navbar
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Typed.js Animation for dynamic role titles
const typed = new Typed('.multiple-text', {
    strings: ['Software Developer Intern', 'Full-Stack Developer', 'Mobile Dev Enthusiast'],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// Intersection Observer for scroll animations (fade in elements)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // Uncomment if you want elements to fade out when scrolling up
            // entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Background Meteors Animation
function createMeteors() {
    const container = document.createElement('div');
    container.className = 'background-animations';
    document.body.prepend(container);

    for (let i = 0; i < 60; i++) {
        let meteor = document.createElement('div');
        meteor.className = 'meteor';
        
        let left = (Math.random() * 150 - 25) + 'vw';
        let top = (Math.random() * 150 - 25) + 'vh';
        let width = (Math.random() * 100 + 40) + 'px';
        let duration = (Math.random() * 15 + 10) + 's'; /* 10 to 25s for very slow drift */
        let delay = (Math.random() * 15) + 's';
        
        meteor.style.left = left;
        meteor.style.top = top;
        meteor.style.width = width;
        meteor.style.animationDuration = duration;
        meteor.style.animationDelay = delay;
        
        container.appendChild(meteor);
    }
}
createMeteors();
<<<<<<< HEAD

// Theme Toggle Logic
const themeToggleBtn = document.querySelector('.theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    themeIcon.classList.replace('bx-moon', 'bx-sun');
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
        themeIcon.classList.replace('bx-moon', 'bx-sun');
        localStorage.setItem('theme', 'light');
    } else {
        // Switch to dark mode
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        themeIcon.classList.replace('bx-sun', 'bx-moon');
        localStorage.setItem('theme', 'dark');
    }
});
=======
>>>>>>> d6d459ee895e36764ba6557e3368a15863c2af5c
