// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const body = document.body;

// Check local storage for theme preference
const currentTheme = localStorage.getItem('theme');

// Apply stored theme on load
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

themeToggle.addEventListener('click', () => {
    // Check current theme
    const isLight = body.getAttribute('data-theme') === 'light';
    
    if (isLight) {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    }
});

// Mobile Navigation Logic
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    
    // Animate hamburger (optional simple rotation or transform could go here via CSS classes)
    hamburger.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        hamburger.classList.remove('open');
    });
});

// Active Link Highlighting on Scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Offset for sticky header
        if (scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});


// Infosys Certificate Modal

function openInfosysModal() {
  document.getElementById("infosysModal").style.display = "block";
}

function closeInfosysModal() {
  document.getElementById("infosysModal").style.display = "none";
}

// Close when clicking outside

window.addEventListener("click", function (e) {
  const modal = document.getElementById("infosysModal");

  if (e.target === modal) {
    modal.style.display = "none";
  }
});


function openCVModal() {
  document.getElementById("cvModal").style.display = "block";
}

function closeCVModal() {
  document.getElementById("cvModal").style.display = "none";
}

window.addEventListener("click", function (e) {
  const modal = document.getElementById("cvModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Scroll To Top Button

const scrollBtn = document.getElementById("scrollTopBtn");

// Show button when scrolling down
window.addEventListener("scroll", function () {

  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }

});

// Scroll to top smoothly
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Certificate Popup

function openCertModal() {
  document.getElementById("certModal").style.display = "block";
}

function closeCertModal() {
  document.getElementById("certModal").style.display = "none";
}

// Close when clicking outside
window.addEventListener("click", function (e) {
  const modal = document.getElementById("certModal");

  if (e.target === modal) {
    modal.style.display = "none";
  }
});