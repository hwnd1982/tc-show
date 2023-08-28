import { createFilterActiveItem } from "./createFilterActiveItem.js";
import { filterApply } from "./filterApply.js";

const filterPopupHandler = () => {
  const filterPopup = document.querySelector('.filter-popup');
  const overlay = document.querySelector('.overlay');
  const body = document.body;
  const time = {
        duration: 400,
        iterations: 1,
      };

  if (!filterPopup) return;

  filterPopup.addEventListener('reset', ({target}) => {
    const ranges = document.querySelectorAll(".multi-range__range-bar");

    ranges.forEach(range => {
      range.style.left = '';
      range.style.right = '';
    });
    
    target.reset();
  });

  filterPopup.addEventListener('submit', filterApply());

  filterPopup.addEventListener('click', ({target}) => {
    const close = target.closest('.filter-popup__close');
    const legend = target.closest('.filter-popup__legend');
    const showAll = target.closest('.filter-popup__show');

    if (close) {
      filterPopup.classList.remove('_active');
      overlay.classList.remove('_show');
      body.classList.remove('scroll-hidden');
      body.style.cssText = ``;
      
      return;
    };

    if (legend) {
      const fieldset = legend.closest('.filter-popup__fieldset');
      const list = legend.nextElementSibling.firstElementChild;
      const start = `${fieldset.getBoundingClientRect().height}px`
      
      fieldset.classList.toggle('_minimized');
      fieldset.classList.contains('_minimized') && list.classList.remove('_all');
      fieldset.animate([{height: start}, {height: `${fieldset.getBoundingClientRect().height}px`}], time);

      return;
    }

    if (showAll) {
      const list = showAll.closest('.filter-popup__list-wrap').firstElementChild;
      const start = `${list.getBoundingClientRect().height}px`
      
      list.classList.toggle('_all');
      list.animate([{height: start}, {height: `${list.getBoundingClientRect().height}px`}], time);
    }
  });
};

export default filterPopupHandler;
