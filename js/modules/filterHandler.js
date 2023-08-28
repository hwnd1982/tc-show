import { filterApply } from "./filterApply.js";

const filterHandler = () => {
  const filter = document.querySelector('.filter');
  const filterPopup = document.querySelector('.filter-popup');

  if (!filter) return

  const requestSubmit = filterApply();
  const overlay = document.querySelector('.overlay');
  const popup = document.querySelector('.filter-popup');
  const goods = document.querySelector('.goods');
  const active = filter.getElementsByClassName('_show');

  document.addEventListener('click', ({target}) => {
    const [select] = active;
    
    if (select && !target.closest('.select, .filter-popup__checkbox')) {
      const body = select.querySelector('.select__body');

      select.classList.remove('_show');
      body.style.height = select.classList.contains('_show') ? `${height}px` : ``;
      body.style.width = select.classList.contains('_show') ? `${width}px` : ``;
    }
  });


  filter.addEventListener('click', ({target}) => {
    const select = target.closest('.select');
    const selectHeader = target.closest('.select__header, .filter-popup-btn-mobile');
    const selectOption = target.closest('.sort-type');
    const filterLabal = target.closest('.filter-labal');
    const switcher = target.closest('input[name="veiw"]');
    const disable =  target.closest('.filter__item-disable');

    if (select) {

      if (!selectHeader && !selectOption && !filterLabal) return;

      if (!select.classList.contains('_show')) {
        [...active].forEach(select => {
          const body = select.querySelector('.select__body');

          select.classList.remove('_show');
          body.style.height = ``;
          body.style.width = ``;
        });
      }

      if (selectHeader?.classList.contains('filter-popup-btn') || selectHeader?.classList.contains('filter-popup-btn-mobile')) {
        popup.classList.add('_active');
        overlay.classList.add('_show');
        
        document.body.style.cssText = `padding-right:${window.innerWidth - document.body.offsetWidth}px;`;
        document.body.classList.add('scroll-hidden');

        return;
      }

      if (filterLabal) {
        return setTimeout(() => requestSubmit(filterPopup), 400);
      }

      const header = select.querySelector('.select__header');
      const body = select.querySelector('.select__body');
      const {width, height} = body.firstElementChild.getBoundingClientRect();

      const time = {
        duration: 400,
        iterations: 1,
      };

      if (selectOption) {
        const start = `${header.getBoundingClientRect().width}px`;
        
        header.firstElementChild.textContent = selectOption.textContent;
        header.animate([{width: start}, {width: `${header.getBoundingClientRect().width}px`}], time);
      }

      select.classList.toggle('_show');
      body.style.height = select.classList.contains('_show') ? `${height}px` : ``;
      body.style.width = select.classList.contains('_show') ? `${width}px` : ``;
    }

    if (disable) {
      return setTimeout(() => requestSubmit({target: filterPopup}), 400);
    }

    if (switcher) {
      if (!goods.classList.contains('_swiper'))
        goods.classList[switcher.value ? 'add' : 'remove']('_inline');
    }
  });
}

export default filterHandler;
