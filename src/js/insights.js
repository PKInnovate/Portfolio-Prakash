// ============================================
// INSIGHTS.JS - Insights Page Logic
// ============================================

import { insights } from './data.js';
import { initNavigation, initStickyCTA, highlightActivePage } from './navigation.js';
import { initCarousel } from './carousel.js';
import { initCursorGlow } from './ui.js';

let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize core features
    initCursorGlow();
    initNavigation();
    initStickyCTA();
    highlightActivePage();

    // Render featured insights
    renderFeaturedInsights();

    // Render category filters
    renderCategoryFilters();

    // Render insights grid
    renderInsightsGrid();

    // Initialize carousel
    initCarousel('#featured-insights');
});

function renderFeaturedInsights() {
    const wrapper = document.querySelector('#featured-insights .carousel-wrapper');
    if (!wrapper) return;

    const featured = insights.filter(i => i.featured);

    featured.forEach(insight => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
            <div class="card-tag">${insight.category}</div>
            <h3 class="carousel-title">${insight.title}</h3>
            <p style="color: var(--text-dim); margin: 1rem 0; line-height: 1.8;">${insight.excerpt}</p>
            <p style="color: var(--accent); font-size: 0.9rem; margin-top: 1.5rem;">${formatDate(insight.date)}</p>
        `;
        wrapper.appendChild(item);
    });
}

function renderCategoryFilters() {
    const filters = document.getElementById('category-filters');
    if (!filters) return;

    const categories = [...new Set(insights.map(i => i.category))];

    categories.forEach(category => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = category;
        tag.setAttribute('data-category', category);
        tag.addEventListener('click', () => filterInsights(category));
        filters.appendChild(tag);
    });
}

function renderInsightsGrid(filter = 'all') {
    const grid = document.getElementById('insights-grid');
    if (!grid) return;

    grid.innerHTML = '';

    const filtered = filter === 'all'
        ? insights
        : insights.filter(i => i.category === filter);

    filtered.forEach(insight => {
        const card = document.createElement('div');
        card.className = 'research-item fade-in';
        card.innerHTML = `
            <div class="card-tag">${insight.category}</div>
            <h3>${insight.title}</h3>
            <p style="color: var(--text-dim); margin: 1rem 0; line-height: 1.8;">${insight.excerpt}</p>
            <p style="color: var(--accent); font-size: 0.9rem; margin-top: 1.5rem;">${formatDate(insight.date)}</p>
        `;
        grid.appendChild(card);
    });
}

function filterInsights(category) {
    currentFilter = category;

    // Update active filter tag
    document.querySelectorAll('.filter-tags .tag').forEach(tag => {
        tag.classList.toggle('active', tag.getAttribute('data-category') === category);
    });

    // Re-render grid
    renderInsightsGrid(category);
}

function formatDate(dateStr) {
    const [year, month] = dateStr.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[parseInt(month) - 1]} ${year}`;
}
