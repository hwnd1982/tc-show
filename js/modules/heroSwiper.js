const heroSwiper = () => {
  const heroSwiper = document.querySelector('.hero__swiper');

  if (!heroSwiper) return;
  
  const swiper = new Swiper(heroSwiper, {
      speed: 400,
      width: null,
      loop: true,
      loopedSlides: null,
      loopedSlides: 2,
      spaceBetween: 10,
      pagination: {
        el: '.hero__pagination',
        bulletClass: 'hero__dot',
        type: 'bullets',
        dynamicBullets: true,
        clickable: true,
        bulletActiveClass: '_active',
        renderBullet: function (index, className) {
          return `<div class="${className}"></div>`;
        },
      },
      breakpoints: {
        1399: {
          width: 660,
          spaceBetween: 32,
          navigation: {
            nextEl: '.hero__swiper-arrow._prev',
            prevEl: '.hero__swiper-arrow._next',
          },
        },
        1200: {
          width: 580,
          slidesOffsetBefore: 4,
          slidesOffsetAfter: 4,
          navigation: {
            nextEl: '.hero__swiper-arrow._prev',
            prevEl: '.hero__swiper-arrow._next',
          },
        },
        991: {
          width: 700,
          spaceBetween: 30,
          navigation: {
            nextEl: '.hero__swiper-arrow._prev',
            prevEl: '.hero__swiper-arrow._next',
          },
        },
        767: {
          width: 580,
          spaceBetween: 24,
          // navigation: {
          //   nextEl: '.hero__swiper-arrow._prev',
          //   prevEl: '.hero__swiper-arrow._next',
          // },
        },
        576: {
          width: 540,
          spaceBetween: 24,
          // navigation: {
          //   nextEl: '.hero__swiper-arrow._prev',
          //   prevEl: '.hero__swiper-arrow._next',
          // },
        }
      },
      on: {
        resize: swiper => {
          swiper.navigation.init();
          swiper.pagination.update()
        } 
      }
    });
};

export default heroSwiper;
