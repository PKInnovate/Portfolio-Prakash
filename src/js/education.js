// ============================================
// EDUCATION.JS - Education Page Logic
// ============================================

import { education, certifications, selfLearningDomains } from './data.js';
import { initNavigation, initStickyCTA, highlightActivePage } from './navigation.js';
import { initCarousel } from './carousel.js';
import { initTimeline } from './timeline.js';
import { initCursorGlow } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize core features
    initCursorGlow();
    initNavigation();
    initStickyCTA();
    highlightActivePage();

    // Render education timeline
    renderEducationTimeline();

    // Render certifications carousel
    renderCertificationsCarousel();

    // Render self-learning domains
    renderLearningDomains();

    // Initialize components
    initTimeline();
    initCarousel('#certifications-carousel');
});

function renderEducationTimeline() {
    const timeline = document.getElementById('education-timeline');
    if (!timeline) return;

    education.forEach((edu, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-year">${edu.year}</span>
                <h3 class="timeline-title">${edu.degree}</h3>
                <p class="timeline-subtitle">${edu.institution}, ${edu.location}</p>
                <div class="timeline-achievements">
                    <h4>Focus Areas</h4>
                    <ul>
                        ${edu.focus.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                    <h4 style="margin-top: 1rem;">Achievements</h4>
                    <ul>
                        ${edu.achievements.map(a => `<li>${a}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        timeline.appendChild(item);
    });
}

function renderCertificationsCarousel() {
    const wrapper = document.querySelector('#certifications-carousel .carousel-wrapper');
    const indicators = document.querySelector('#certifications-carousel .carousel-indicators');
    if (!wrapper) return;

    certifications.forEach((cert, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
            <div class="carousel-logo">${cert.logo}</div>
            <h3 class="carousel-title">${cert.title}</h3>
            <p class="carousel-platform">${cert.platform}</p>
            <div class="carousel-skills">
                ${cert.skills.map(skill => `<span class="carousel-skill-tag">${skill}</span>`).join('')}
            </div>
        `;
        wrapper.appendChild(item);

        // Add indicator
        if (indicators) {
            const indicator = document.createElement('div');
            indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
            indicators.appendChild(indicator);
        }
    });
}

function renderLearningDomains() {
    const tagCloud = document.getElementById('learning-domains');
    if (!tagCloud) return;

    selfLearningDomains.forEach(domain => {
        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.textContent = domain.tag;
        tag.addEventListener('click', () => openDomainPanel(domain));
        tagCloud.appendChild(tag);
    });
}

function openDomainPanel(domain) {
    const panel = document.getElementById('domain-panel');
    const content = document.getElementById('panel-content');

    if (!panel || !content) return;

    content.innerHTML = `
        <h2 style="margin-bottom: 2rem; color: var(--accent);">${domain.tag}</h2>
        <p style="color: var(--text-dim); line-height: 1.8; margin-bottom: 2rem;">${domain.description}</p>
        <h3 style="margin-bottom: 1rem; font-size: 1.1rem;">Learning Resources</h3>
        <ul style="color: var(--text-dim); line-height: 2;">
            ${domain.resources.map(r => `<li>${r}</li>`).join('')}
        </ul>
    `;

    panel.classList.add('active');

    // Close panel
    const closeBtn = panel.querySelector('.side-panel-close');
    closeBtn.onclick = () => panel.classList.remove('active');

    // Close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') panel.classList.remove('active');
    });
}
