const newsAsideSwiper = () => {
  const articlesSwipers = document.querySelectorAll('.articles-aside-swiper');
  
  articlesSwipers.forEach(news => {
    const swiperEl = news.querySelector('.swiper-main');
    const scrollbarEl = news.querySelector('.swiper-main-scrollbar');
    
    new Swiper(swiperEl, {
    // enabled: true,
    speed: 400,
    loop: false,
    direction: 'horizontal',
    loopedSlides: null,
    spaceBetween: 11,
    slidesPerView: 2,
    watchSlidesProgress: true,
    scrollbar: {
      el: scrollbarEl,
      draggable: true,
    },
    breakpoints: {
      // 992: {
      //   watchSlidesProgress: true,
      //   slidesPerView: 3,
      //   loopedSlides: 3,
      //   spaceBetween: 29,
      //   loop: true,
      //   navigation: {
      //     nextEl,
      //     prevEl
      //   },
      // },
      991: {
        enabled: false,
        direction: 'vertical',
        watchSlidesProgress: true,
        slidesPerView: 3,
        loopedSlides: 3,
        spaceBetween: 18,
        loop: true,
      },
      768: {
        direction: 'vertical',
        watchSlidesProgress: true,
        slidesPerView: 3,
        loopedSlides: 3,
        spaceBetween: 11,
        loop: true,
      },
    },
    on: {
        resize: swiper => {
          swiper.navigation.init();
          swiper.pagination.update();
        },
      }
    });
  });
};

export default newsAsideSwiper;