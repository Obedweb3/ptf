// Handle mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Close nav when clicking a link (on mobile)
  nav.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-link')) {
      nav.classList.remove('open');
    }
  });
}

// Update footer year automatically
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Simple client-side form handler (no backend)
// You can replace this with real API integration later
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Basic validation (HTML5 handles most of it)
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      formStatus.textContent = 'Please fill in all required fields.';
      formStatus.style.color = '#f97373';
      return;
    }

    // Show a fake success response
    formStatus.textContent = 'Thank you! Your message has been recorded (demo only).';
    formStatus.style.color = '#4ade80';

    // Clear form fields after a short delay
    setTimeout(() => {
      contactForm.reset();
    }, 400);
  });
}
