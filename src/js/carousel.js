// ============================================
// CAROUSEL.JS - Carousel/Slider Logic
// ============================================

export function initCarousel(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const wrapper = container.querySelector('.carousel-wrapper');
    const items = container.querySelectorAll('.carousel-item');
    const prevBtn = container.querySelector('.carousel-btn.prev');
    const nextBtn = container.querySelector('.carousel-btn.next');
    const indicators = container.querySelectorAll('.carousel-indicator');

    let currentIndex = 0;
    const itemWidth = 350 + 32; // item width + gap
    const maxIndex = Math.max(0, items.length - Math.floor(container.offsetWidth / itemWidth));

    function updateCarousel() {
        const offset = -currentIndex * itemWidth;
        wrapper.style.transform = `translateX(${offset}px)`;

        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });

        // Update button states
        if (prevBtn) prevBtn.disabled = currentIndex === 0;
        if (nextBtn) nextBtn.disabled = currentIndex >= maxIndex;
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarousel();
            }
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Touch/swipe support
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    wrapper.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        wrapper.style.cursor = 'grabbing';
    });

    wrapper.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        currentX = e.clientX;
    });

    wrapper.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        wrapper.style.cursor = 'grab';

        const diff = startX - currentX;
        if (Math.abs(diff) > 50) {
            if (diff > 0 && currentIndex < maxIndex) {
                currentIndex++;
            } else if (diff < 0 && currentIndex > 0) {
                currentIndex--;
            }
            updateCarousel();
        }
    });

    wrapper.addEventListener('mouseleave', () => {
        isDragging = false;
        wrapper.style.cursor = 'grab';
    });

    // Initialize
    updateCarousel();
}
