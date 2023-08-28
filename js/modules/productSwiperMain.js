import {Fancybox} from "./fancybox.esm.js"

const productSwiperMain = () => {
  const main = document.querySelector('.product__imgs-main');
  const sameSeries = document.querySelector('.product__same-series');

  if (!main) return;

  const thumbs = document.querySelector('.product__imgs-thumbs');
  const prevEl = thumbs.nextElementSibling.firstElementChild;
  const nextEl = thumbs.nextElementSibling.lastElementChild;

  const thumbsSwiper = new Swiper(thumbs, {
    speed: 400,
    loop: true,
    loopedSlides: 10,
    slideToClickedSlide: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slidesPerView: 5,
    spaceBetween: 9,
    // freeMode: true,
    navigation: {
      nextEl,
      prevEl
    },
    breakpoints: {
      1399: {
        spaceBetween: 11,
        slidesPerView: 5,
      },
      1199: {
        spaceBetween: 7,
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 6,
        spaceBetween: 11,
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 7,
      }
    }
  });

  const mainSwiper = new Swiper(main, {
    speed: 400,
    spaceBetween: 11,
    loop: true,
    loopedSlides: 10,
    shortSwipes: false
  });


  mainSwiper.controller.control = thumbsSwiper;
  thumbsSwiper.controller.control = mainSwiper;

  if (!sameSeries) return;

  const prev = sameSeries.nextElementSibling.firstElementChild;
  const next = sameSeries.nextElementSibling.lastElementChild;

  new Swiper(sameSeries, {
    speed: 400,
    loop: true,
    loopedSlides: 10,
    slideToClickedSlide: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slidesPerView: 5,
    spaceBetween: 9,
    freeMode: true,
    navigation: {
      nextEl: next,
      prevEl: prev
    },
    breakpoints: {
      1399: {
        slidesPerView: 5,
        spaceBetween: 8,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 9,
      },
      991: {
        slidesPerView: 6,
        spaceBetween: 11,
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 7,
      }
    }
  });

  Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: {
      type: "classic",
      showOnStart: false,
    },
    Toolbar: {
      display: {
        right: ["slideshow", "thumbs", "close"],
      },
    },
    Carousel: {
      on: {
        change: (fancybox, index) => {
          mainSwiper.slideTo(index, 0);
        }
      }
    }
  });
};

export default productSwiperMain;
