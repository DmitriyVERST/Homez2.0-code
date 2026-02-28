const modal = document.getElementById('serviceModal');
if (modal) {
  const backdrop = modal.querySelector('.modal__backdrop');
  const closeBtn = modal.querySelector('.modal__close');
  const titleEl = document.getElementById('modalTitle');
  const descEl = document.getElementById('modalDesc');

  function openModal(title, desc) {
    if (titleEl) titleEl.textContent = title || 'Услуга добавлена в избранное';
    if (descEl) descEl.textContent = desc || 'Вы можете просмотреть избранные услуги в личном кабинете.';
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-modal', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-modal', 'false');
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  if (backdrop) {
    backdrop.addEventListener('click', closeModal);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });

  document.addEventListener('click', function (e) {
    const heart = e.target.closest('.service-card__heart');
    if (!heart) return;
    e.preventDefault();
    const card = heart.closest('.service-card');
    const title = card ? card.getAttribute('data-title') : '';
    const desc = card ? card.getAttribute('data-desc') : '';
    openModal(title ? title + ' — добавлено в избранное' : null, desc);
  });

  window.openServiceModal = openModal;
  window.closeServiceModal = closeModal;
}