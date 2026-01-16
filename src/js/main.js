import { initAnimations, initNavbar, renderVentures } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Page-specific initialization
    const path = window.location.pathname;
    const page = path.split("/").pop() || 'index.html';

    if (page === 'index.html' || page === '') {
        // Limited overview for Home Page
        renderVentures(2); // Only show top 2 on home
    } else if (page === 'ventures.html') {
        renderVentures(); // Full list
    }

    // 3. Initialize UI behaviors
    initNavbar();
    initAnimations();

    // 4. Form Handling (only on contact page or home if present)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerText = 'Message Sent';
                btn.style.backgroundColor = '#10b981';
                contactForm.reset();
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = '';
                    btn.disabled = false;
                }, 3000);
            }, 1000);
        });
    }
});
