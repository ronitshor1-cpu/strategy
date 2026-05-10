// אנימציית scroll reveal עם IntersectionObserver
const revealEls = document.querySelectorAll('.reveal, .reveal-left');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// תפריט המבורגר למובייל
const hamburger = document.querySelector('.hamburger');
const navMenu   = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

// תפריט נפתח במובייל (dropdown תחת חשיבת עתיד)
document.querySelectorAll('.nav-item.has-dropdown > .nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      link.closest('.nav-item').classList.toggle('open');
    }
  });
});

// סליידשו Hero — תמונות מתחלפות כל 4.5 שניות
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;
if (slides.length > 0) {
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 4500);
}

// סגירת תפריט בלחיצה מחוץ לנווט
document.addEventListener('click', (e) => {
  if (!e.target.closest('.navbar')) {
    navMenu?.classList.remove('open');
    document.querySelectorAll('.nav-item.has-dropdown').forEach(item => {
      item.classList.remove('open');
    });
  }
});
