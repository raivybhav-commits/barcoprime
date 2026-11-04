/* ==========================================================================
   BARACO PRIME - Request Service Modal & Interactive Quote Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const modalOverlay = document.getElementById('serviceModal');
  const openModalBtns = document.querySelectorAll('[data-open-modal="service"]');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalForm = document.getElementById('quoteModalForm');

  if (!modalOverlay) return;

  function openModal(defaultService = '') {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    if (defaultService) {
      const serviceSelect = document.getElementById('modalServiceType');
      if (serviceSelect) serviceSelect.value = defaultService;
    }
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service') || '';
      openModal(service);
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = modalForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Processing...';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        closeModal();
        modalForm.reset();

        if (window.showToast) {
          window.showToast('Thank you! Your service request has been received. Our team will contact you shortly.');
        } else {
          alert('Thank you! Your service request has been received.');
        }
      }, 1000);
    });
  }
});
