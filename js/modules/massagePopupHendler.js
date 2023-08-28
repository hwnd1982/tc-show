const massagePopupHendler = () => {
  const massagePopupItems = document.querySelectorAll('.massage-popup');
  const time = {
      duration: 400,
      iterations: 1,
    };

  massagePopupItems.forEach(item => item.addEventListener('click', ({target, currentTarget}) => {
    const close = target.closest('.massage-popup-close');
    const {height} = currentTarget.getBoundingClientRect();

    if (!close) return;

    currentTarget.animate([
      {transform: 'translateX(0)', height: `${height}px`},
      {transform: 'translateX(-100vw)', height: 0}
    ], time).onfinish = () => currentTarget.remove();
  }));

};

export default massagePopupHendler;
