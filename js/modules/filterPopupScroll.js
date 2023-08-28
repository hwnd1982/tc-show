const filterPopupScroll = () => {
  const filterPopup = document.querySelector('.filter-popup');

  if (!filterPopup) return;

  const inner = filterPopup.querySelector('.filter-popup__form');

  inner.addEventListener('scroll', ({target}) => {
    const {top: topInner} = target.getBoundingClientRect();
    const {top} = target.firstElementChild.getBoundingClientRect();
    
    if (top - topInner < 0) {
      
      if (filterPopup.classList.contains('_inner-scroll')) return;

      filterPopup.classList.add('_inner-scroll');
    } else {
      filterPopup.classList.remove('_inner-scroll');
    }
  });
};

export default filterPopupScroll;