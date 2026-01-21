// ============================================
// ACCORDION.JS - Accordion Panel Logic
// ============================================

export function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            // Close all other accordions (optional: remove to allow multiple open)
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current accordion
            item.classList.toggle('active', !isActive);
        });
    });
}
