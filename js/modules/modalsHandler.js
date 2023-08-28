const modalsHandler = () => {
  const btns = document.getElementById('modal-btns');
  const modalOverlay = document.querySelector('.modal-overlay');
  const activeModals = modalOverlay?.getElementsByClassName('_show');
  const body = document.body

  if (!modalOverlay) return;

  modalOverlay.addEventListener('click', ({target, currentTarget}) => {
    const [activeModal] = activeModals
    const modal =  target.closest('.modal-block, .modal-cart');
    const close = target.closest('.modal-overlay__close, .modal-message__submit');

    if (!activeModal) {
      currentTarget.classList.remove('_show');
      setTimeout(() => body.style.cssText = '', 410);
      return;
    }
      

    if (!modal || close) {
      activeModal.classList.remove('_show');
      currentTarget.classList.remove('_show');
      setTimeout(() => body.style.cssText = '', 410);
    }
  });

  if (!btns) return;

  btns.addEventListener('click', ({target}) => {
    const btn = target.closest('.catalog-links__link');
    const modal = document.getElementById(btn?.getAttribute('href')?.slice(1));

    if (!btn || !modal) return;

    modal.classList.add('_show');
    modalOverlay.classList.add('_show');
    body.style.cssText = `overflow:hidden;padding-right:${window.innerWidth - body.offsetWidth}px;`
  });
};

export default modalsHandler;