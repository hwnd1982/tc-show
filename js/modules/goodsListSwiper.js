const goodsListSwiper = () => {
  const goodsSwiper = document.querySelectorAll('.goods-swiper');

    goodsSwiper.forEach(news => {
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
          1400: {
            shortSwipes: false,
            watchSlidesProgress: true,
            slidesPerView: 5,
            loopedSlides: 5,
            spaceBetween: 14,
            loop: true,
            navigation: {
              nextEl,
              prevEl
            },
          },
          992: {
            shortSwipes: false,
            watchSlidesProgress: true,
            slidesPerView: 4,
            loopedSlides: 4,
            spaceBetween: 14,
            loop: true,
            navigation: {
              nextEl,
              prevEl
            },
          },
          768: {
            shortSwipes: false,
            watchSlidesProgress: true,
            slidesPerView: 3,
            loopedSlides: 3,
            spaceBetween: 14,
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

export default goodsListSwiper;