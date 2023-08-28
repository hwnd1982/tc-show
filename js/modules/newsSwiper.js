const newsSwiper = () => {
  const articlesSwipers = document.querySelectorAll('.articles-swiper');
  
  articlesSwipers.forEach(news => {
    const swiperEl = news.querySelector('.swiper-main');
    const scrollbarEl = news.querySelector('.swiper-main-scrollbar');
    const nextEl = news.querySelector('._prev');
    const prevEl = news.querySelector('._next');
    
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
      992: {
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
      768: {
        watchSlidesProgress: true,
        slidesPerView: 3,
        loopedSlides: 3,
        spaceBetween: 11,
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
  });
};

export default newsSwiper;