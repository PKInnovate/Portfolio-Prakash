// ============================================
// RESEARCH.JS - Research Page with Accordions
// ============================================

import { researchAreas } from './data.js';
import { initNavigation, initStickyCTA, highlightActivePage } from './navigation.js';
import { initAccordion } from './accordion.js';
import { initCursorGlow } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize core features
    initCursorGlow();
    initNavigation();
    initStickyCTA();
    highlightActivePage();

    // Render research as accordions
    renderResearchAccordions();

    // Initialize accordion functionality
    initAccordion();
});

function renderResearchAccordions() {
    const container = document.getElementById('research-accordion');
    if (!container) return;

    // Clear existing content
    container.innerHTML = '';

    researchAreas.forEach((area, index) => {
        const accordion = document.createElement('div');
        accordion.className = 'accordion-item';
        accordion.innerHTML = `
            <div class="accordion-header">
                <h3>${area.title}</h3>
                <span class="accordion-icon">▼</span>
            </div>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p style="margin-bottom: 1.5rem;"><strong>Overview:</strong> ${area.description}</p>
                    ${area.abstract ? `
                        <p><strong>Research Focus:</strong></p>
                        <p>${area.abstract}</p>
                    ` : ''}
                </div>
            </div>
        `;
        container.appendChild(accordion);
    });
}
