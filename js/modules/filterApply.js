import { createFilterActiveItem } from "./createFilterActiveItem.js";

export const filterApply = () => {
  const filterPopup = document.querySelector('.filter-popup');
  const filterSelects = document.querySelector('.filter-selects');
  const filterActiveItems = document.querySelector('.filter-active-items');
  const filterActiveCounts = document.querySelectorAll('.filter__count');
  const filterTotalCount = document.querySelector('.filter__total-count');
  const filter = document.forms.filter;
  const overlay = document.querySelector('.overlay');
  const body = document.body;
  const time = {
        duration: 400,
        iterations: 1,
      };

  if (!filterPopup) return;

  return event => {
    const formData = new FormData(filter);
    const {checkbox, number} = [...filter.elements]
      .reduce((res, input) => {
        if (input.tagName.toLowerCase() === 'input') 
          res[input.type].push(input);

        return res;
      }, {checkbox: [], number: [], range: []});

    if (event.preventDefault) event.preventDefault();

    checkbox.forEach(({id, checked, value}) => {
      const label = filterActiveItems.querySelector(`label[for="${id}"]`);

      filterSelects.querySelector(`label[for="${id}"]`)?.classList[checked ? 'add' : 'remove']('_checked');

      if (checked && !label) {
        filterActiveItems.append(createFilterActiveItem({id, value}));
        if (filterActiveItems.classList.contains('_null'))
          filterActiveItems.classList.remove('_null');
      }

      if (!checked && label) {
        const {width, height} = label.parentElement.getBoundingClientRect();

        label.parentElement
          .animate([
            {transform: 'scale(1)', opacity: 1, width: `${width}px`, height: `${height}px`},
            {transform: 'scale(0)', opacity: 0, width: 0, height: 0}
          ], time).onfinish = () => {
            label.parentElement.remove();
            if (!filterActiveItems.childElementCount)
              filterActiveItems.classList.add('_null');
          };
      }
    });

    const data = {};
    for (const key of formData.keys()) {
      const values = formData.getAll(key);

      data[key] = values;
    }

    filterActiveCounts.forEach(count => {
      if (data[count.id]?.length) {
        count.classList.remove('_null');
        count.textContent = data[count.id]?.length;
      } else {
        count.classList.add('_null');
      }
    });
      
    const checked = checkbox.filter(checkbox => checkbox.checked);

    if (checked.length) {
      filterTotalCount.textContent = checked.length;
      filterTotalCount.classList.remove('_null');
    } else {
      filterTotalCount.textContent = '';
      filterTotalCount.classList.add('_null');
    }

    if (filterPopup.classList.contains('_active')) {
      filterPopup.classList.remove('_active');
      overlay.classList.remove('_show');
      body.classList.remove('scroll-hidden');
      body.style.cssText = ``;
    }
  };
};