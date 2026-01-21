// ============================================
// MODAL.JS - Modal Window Logic
// ============================================

export function initModal() {
    const modalTriggers = document.querySelectorAll('[data-modal-trigger]');
    const modals = document.querySelectorAll('.modal-overlay');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal-trigger');
            const modal = document.querySelector(`#${modalId}`);
            if (modal) {
                openModal(modal);
            }
        });
    });

    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.modal-close');

        if (closeBtn) {
            closeBtn.addEventListener('click', () => closeModal(modal));
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('active')) {
                    closeModal(modal);
                }
            });
        }
    });
}

export function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

export function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

export function createVentureModal(venture) {
    const modalHTML = `
        <div class="modal-overlay" id="venture-modal">
            <div class="modal-content">
                <button class="modal-close">×</button>
                <h2>${venture.title}</h2>
                <div class="modal-section">
                    <h3>Problem</h3>
                    <p>${venture.problem}</p>
                </div>
                <div class="modal-section">
                    <h3>Solution</h3>
                    <p>${venture.solution}</p>
                </div>
                <div class="modal-section">
                    <h3>Impact</h3>
                    <p>${venture.impact}</p>
                </div>
                ${venture.caseStudy ? `
                    <div class="modal-section">
                        <h3>Case Study</h3>
                        <p>${venture.caseStudy}</p>
                    </div>
                ` : ''}
            </div>
        </div>
    `;

    // Remove existing modal if any
    const existingModal = document.querySelector('#venture-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Add new modal
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.querySelector('#venture-modal');
    const closeBtn = modal.querySelector('.modal-close');

    closeBtn.addEventListener('click', () => closeModal(modal));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
    });

    openModal(modal);
}
