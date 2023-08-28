const footerMenu = () => {
  const footer = document.querySelector('.footer');

  if (!footer) return;

  const time = {
    duration: 400,
    iterations: 1,
  };
  const fade = { height: '42px' };


  footer.addEventListener('click', ({target}) => {
    const item = target.closest('.footer__client, .footer__catalog, .footer__contacts');

    if (!item || window.innerWidth > 767) return;

    const contentHeight = item.querySelector('.footer__wrapp').getBoundingClientRect().height;
    const point = {height: `${contentHeight}px`};
    
    item.classList.toggle('_active');
    item.animate(item.classList.contains('_active') ? [fade, point] : [point, fade], time);
  });
}

export default footerMenu
