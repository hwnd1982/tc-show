export let scrollToCharacterTriger = false;

const productInfoSwiper = () => {
  const product = document.querySelector('.product');
  const header = document.querySelector('.header-main');
  const productInfoBtns = document.querySelector('.product-info__btns');
  const productInfoItems = document.querySelector('.product-info__items');

  if (!product || !productInfoBtns || !productInfoItems) return;

  const swiper = new Swiper(productInfoBtns, {
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween: 10,
    loopedSlides: null,
    freeMode: true,
    setWrapperSize: true,
    breakpoints: {
      767: {
        spaceBetween: 16,
      }
    }
  });

  const items = new Swiper(productInfoItems, {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 0,
    loopedSlides: null,
    allowTouchMove: false,
    watchSlidesProgress: true,
    autoHeight: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    thumbs: {
      swiper
    }
  });
  
  const characterBtn = product.querySelector('.product__character');

  characterBtn.addEventListener('click', () => {
    const {top} = productInfoBtns.getBoundingClientRect();
    const {height} = header.getBoundingClientRect();

    scrollToCharacterTriger = true;
    window.scrollBy({top: top - height - 30, behavior: 'smooth'});

    setTimeout(() => {
      scrollToCharacterTriger = false;
      items.slideTo(1, 400);
    }, 600);
  });

  const faq = productInfoItems.querySelector('.product-info__item.faq');

  if (!faq) return;

  const activeItems = faq.getElementsByClassName('faq__btn _active');

  faq.addEventListener('click', ({target}) => {
    const [active] = activeItems;
    const item = target.closest('.faq__btn');

    if (!item) return;

    if (active && active !== item) 
      active.classList.remove('_active');

    item.classList.toggle('_active');
    items.updateAutoHeight(400);
  });
};

export default productInfoSwiper;
