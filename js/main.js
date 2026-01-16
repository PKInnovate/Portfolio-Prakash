import { initAnimations, initNavbar, renderVentures } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    renderVentures();
    initAnimations();
    initNavbar();

    // Form Handling
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
