import { ventures } from './data.js';

export function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (!entry.target.classList.contains('hero-section')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .research-item, .card-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });
}

export function initMagneticButtons() {
    const btns = document.querySelectorAll('.btn-primary');
    btns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
        });
    });
}

export function initCursorGlow() {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    window.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
}

export function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.height = '60px';
            navbar.style.background = 'rgba(13, 13, 13, 0.95)';
            navbar.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
        } else {
            navbar.style.height = '80px';
            navbar.style.background = 'rgba(13, 13, 13, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });
}

export function renderVentures(count = null) {
    const venturesGrid = document.querySelector('.card-grid');
    if (venturesGrid) {
        venturesGrid.innerHTML = ''; // Clear previous
        const itemsToRender = count ? ventures.slice(0, count) : ventures;
        itemsToRender.forEach((v, index) => {
            const card = document.createElement('div');
            card.className = 'card-item fade-in';
            card.style.animationDelay = `${index * 0.1}s`;
            card.innerHTML = `
                <div class="card-tag">Venture</div>
                <h3>${v.title}</h3>
                <p><strong>Problem:</strong> ${v.problem}</p>
                <p><strong>Solution:</strong> ${v.solution}</p>
                <p><strong>Impact:</strong> ${v.impact}</p>
            `;
            venturesGrid.appendChild(card);
        });
    }
}
