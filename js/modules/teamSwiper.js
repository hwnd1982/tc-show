const teamSwiper = () => {
  const teamSwiper = document.querySelector('.team-swiper');

  if (!teamSwiper) return;

    const swiperEl = teamSwiper.querySelector('.swiper-main');
    const scrollbarEl = teamSwiper.querySelector('.swiper-main-scrollbar');
    const nextEl = teamSwiper.querySelector('._prev');
    const prevEl = teamSwiper.querySelector('._next');
    
    new Swiper(swiperEl, {
    speed: 400,
    loop: false,
    loopedSlides: null,
    spaceBetween: 11,
    slidesPerView: 2,
    watchSlidesProgress: true,
    scrollbar: {
      el: scrollbarEl,
      draggable: true,
    },
    breakpoints: {
      1199: {
        watchSlidesProgress: true,
        slidesPerView: 4,
        loopedSlides: 4,
        spaceBetween: 29,
        loop: true,
        navigation: {
          nextEl,
          prevEl
        },
      },
      768: {
        watchSlidesProgress: true,
        slidesPerView: 3,
        loopedSlides: 3,
        spaceBetween: 29,
        loop: true,
        navigation: {
          nextEl,
          prevEl
        },
      },
    },
    on: {
        resize: swiper => {
          swiper.navigation.init();
          swiper.pagination.update()
        } 
      }
    });
};

export default teamSwiper;