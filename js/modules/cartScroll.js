const cartScroll = () => {
  const [cartAside, cartAsidePopup] = document.querySelectorAll('.cart__aside');
    
  if (!cartAside || !cartAsidePopup) return;

  window.addEventListener('scroll', () => {
    const {top: cartAsideTop} = cartAside.getBoundingClientRect();
    const {top: cartAsidePopupTop} = cartAsidePopup.getBoundingClientRect();

    if (cartAsideTop <= cartAsidePopupTop) {
      cartAsidePopup.classList.add('_scroll-hidden');
    } else {
      cartAsidePopup.classList.remove('_scroll-hidden');
    }
  });
};

export default cartScroll;
