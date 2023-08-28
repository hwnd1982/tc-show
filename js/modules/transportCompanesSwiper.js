const transportCompanesSwiper = () => {
  const transportCompanesSwiper = document.querySelector('.transport-companes__swiper');

  if (!transportCompanesSwiper) return;
  
  const nextEl = document.querySelector('.transport-companes__swiper-arrow._prev');
  const prevEl = document.querySelector('.transport-companes__swiper-arrow._next');

  const swiper = new Swiper(transportCompanesSwiper, {
    speed: 400,
    loop: false,
    loopedSlides: null,
    spaceBetween: 11,
    slidesPerView: 2,
    scrollbar: {
      el: ".transport-companes__scrollbar",
      draggable: true,
    },
    breakpoints: {
      1400: {
        slidesPerView: 6,
        loopedSlides: 6,
        spaceBetween: 30,
        loop: true,
        navigation: {
          prevEl,
          nextEl,
        },
      },
      1200: {
        slidesPerView: 5,
        loopedSlides: 5,
        loop: true,
        spaceBetween: 30,
        navigation: {
          prevEl,
          nextEl,
        },
      },
      992: {
        slidesPerView: 4,
        loopedSlides: 4,
        spaceBetween: 30,
        loop: true,
        // scrollbar: {
        //   el: ".transport-companes__scrollbar",
        // },
        // loop: true,
        navigation: {
          prevEl,
          nextEl,
        },
      },
      768: {
        slidesPerView: 3,
        loopedSlides: 3,
        spaceBetween: 20,
        loop: false,
        scrollbar: {
          el: ".transport-companes__scrollbar",
          draggable: true,
        },
      },
      on: {
        resize: swiper => {
          swiper.navigation.init();
          swiper.pagination.update()
        } 
      }
    }
  });
};

export default transportCompanesSwiper;
