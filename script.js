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



function openCertModal(platform) {
  const modal = document.getElementById("certModal");
  const certList = document.getElementById("certList");
  const modalTitle = document.getElementById("modalTitle");
  const openBtn = document.getElementById("openAllBtn");

  certList.innerHTML = ""; // clear previous list

  let certificates = [];
  let fileLink = "";

  if (platform === "infosys") {
    modalTitle.innerText = "Infosys Certificates";
    certificates = [
      "ChatGPT-4 Prompt Engineering ChatGPT, Generative AI & LLM",
      "Java Programming",
      "Web Development",
      "Data Science"
    ];
    fileLink = "assets/infosys1.pdf";
  }

  if (platform === "udemy") {
    modalTitle.innerText = "Udemy Certificates";
    certificates = [
      "Machine Learning",
      "Data Analysis",
      "Power BI Course"
    ];
    fileLink = "assets/udemy.pdf";
  }

  if (platform === "coursera") {
    modalTitle.innerText = "Coursera Certificates";
    certificates = [
      "Google Data Analytics",
      "AI Fundamentals"
    ];
    fileLink = "assets/coursera.pdf";
  }

  if (platform === "nptel") {
    modalTitle.innerText = "NPTEL Certificate";
    certificates = [
      "Cloud Computing"
    ];
    fileLink = "assets/nptel.pdf";
  }

  // Add certificate names to list
 certificates.forEach((cert, index) => {
  const li = document.createElement("li");
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.alignItems = "center";
  li.style.marginBottom = "10px";

  // Certificate name
  const span = document.createElement("span");
  span.textContent = cert;

  // Open button for each certificate
  const btn = document.createElement("a");
  btn.textContent = "Open";
btn.className = "cert-open-small";
btn.style.color = "#ffffff";   // 🔥 makes text visible
  btn.style.padding = "5px 10px";
  btn.style.fontSize = "12px";

  // Individual links (change these to your actual files)
  if (platform === "infosys") {
    btn.href = `assets/infosys${index + 1}.pdf`;
  }

  if (platform === "udemy") {
    btn.href = `assets/udemy${index + 1}.pdf`;
  }

  if (platform === "coursera") {
    btn.href = `assets/coursera${index + 1}.pdf`;
  }

  if (platform === "nptel") {
    btn.href = "assets/nptel.pdf";
  }

  btn.target = "_blank";

  li.appendChild(span);
  li.appendChild(btn);
  certList.appendChild(li);
});
  modal.style.display = "block";
}

function closeCertModal() {
  document.getElementById("certModal").style.display = "none";
}

.cert-open-small {
  background: linear-gradient(90deg, #0ea5e9, #6366f1);
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
}



