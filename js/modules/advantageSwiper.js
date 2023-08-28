const advantageSwiper = () => {
  const advantageSwiper = document.querySelector('.advantage-swiper__wrap');

  if (!advantageSwiper) return;

  new Swiper(advantageSwiper, {
    speed: 400,
    // width: 300,
    slidesPerView: 'auto',
    spaceBetween: 10,
    loopedSlides: null,
    freeMode: true,
    setWrapperSize: true,
    breakpoints: {
      767: {
        spaceBetween: 28,
      }
    }
  });
};

export default advantageSwiper;
