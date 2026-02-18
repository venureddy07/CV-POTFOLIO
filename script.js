document.addEventListener("DOMContentLoaded", function () {

  // ================= THEME TOGGLE =================
  const themeToggle = document.getElementById('theme-toggle');

  if (themeToggle) {
    const themeIcon = themeToggle.querySelector('i');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
      body.setAttribute('data-theme', currentTheme);
      if (currentTheme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      }
    }

    themeToggle.addEventListener('click', () => {
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
  }


  // ================= MOBILE NAV =================
  const hamburger = document.getElementById('hamburger');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      navList.classList.toggle('active');
      hamburger.classList.toggle('open');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
      hamburger.classList.remove('open');
    });
  });


  // ================= ACTIVE LINK ON SCROLL =================
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;

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


  // ================= CERTIFICATE MODAL =================
  window.openCertModal = function (platform) {
    const modal = document.getElementById("certModal");
    const certList = document.getElementById("certList");
    const modalTitle = document.getElementById("modalTitle");

    if (!modal || !certList || !modalTitle) return;

    certList.innerHTML = "";

    let certificates = [];
    let files = [];

    if (platform === "infosys") {
      modalTitle.innerText = "Infosys Certificates";
      certificates = [
        "Prompt Engineering",
        "Automata Theory",
        "Introduction to Data Science",
        "Statistical Inference using Python"
      ];
      files = [
        "assets/infosys1.pdf",
        "assets/infosys2.pdf",
        "assets/infosys3.pdf",
        "assets/infosys4.pdf"
      ];
    }

    if (platform === "udemy") {
      modalTitle.innerText = "Udemy Certificates";
      certificates = [
        "Master Generative AI",
        "ChatGPT Essentials",
        "No-Code AI Apps"
      ];
      files = [
        "assets/udemy1.pdf",
        "assets/udemy2.pdf",
        "assets/udemy3.pdf"
      ];
    }

    if (platform === "coursera") {
      modalTitle.innerText = "Coursera Certificates";
      certificates = [
        "Hardware & Operating Systems",
        "Computer Communications"
      ];
      files = [
        "assets/coursera1.pdf",
        "assets/coursera2.pdf"
      ];
    }

    if (platform === "nptel") {
      modalTitle.innerText = "NPTEL Certificate";
      certificates = ["Cloud Computing"];
      files = ["assets/nptel.pdf"];
    }

    certificates.forEach((cert, index) => {
      const li = document.createElement("li");
      li.style.display = "flex";
      li.style.justifyContent = "space-between";
      li.style.alignItems = "center";
      li.style.marginBottom = "10px";

      const span = document.createElement("span");
      span.textContent = cert;

      const btn = document.createElement("a");
      btn.textContent = "Open";
      btn.className = "cert-open-small";
      btn.href = files[index];
      btn.target = "_blank";

      li.appendChild(span);
      li.appendChild(btn);
      certList.appendChild(li);
    });

    modal.style.display = "block";
  };


  window.closeCertModal = function () {
    const modal = document.getElementById("certModal");
    if (modal) modal.style.display = "none";
  };


  // Close modal if clicking outside
  window.addEventListener("click", function (e) {
    const modal = document.getElementById("certModal");
    if (modal && e.target === modal) {
      modal.style.display = "none";
    }
  });

});
