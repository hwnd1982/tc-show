const catalogMenu = () => {
  const catalog = document.querySelector('.catalog-menu');
  
  if (!catalog) return;

  const body = document.body
  const filterPopup = document.querySelector('.filter-popup');
  const overlay = document.querySelector('.overlay');
  const catalogBtns =  document.querySelectorAll('.header-main__catalog-btn, .catalog-menu__main-name');
  const [catalogHeaderBtn, catalogMenuBtn] = catalogBtns;
  const time = {
      duration: 400,
      iterations: 1,
    };
  const fade = { height: '0' };

  catalog.addEventListener('click', ({target}) => {
    const item = target.closest('.catalog-menu__item-name, .catalog-menu__subitem-name');

    if (!item) return;

    if (window.innerWidth > 991) {
      item.closest('.catalog-menu__wrap').querySelectorAll('._active').forEach(
        active => active !== item && active.classList.remove('_active'));

      item.classList.toggle('_active');
    } else {
      const point = { height: `${item?.nextElementSibling?.firstElementChild.nextElementSibling.getBoundingClientRect().height}px` };

      item.classList.toggle('_active');
      item.nextElementSibling.animate(item.classList.contains('_active') ? [fade, point] : [point, fade], time);
    }
  });

  catalogBtns.forEach(btn =>  btn.addEventListener('click', () => {
    catalogHeaderBtn.classList.toggle('_active');
    catalogMenuBtn.classList.toggle('_active');
    catalog.classList.toggle('_show');
    if (window.innerWidth > 991) {
      if (!catalog.classList.contains('_show')) {
        catalog.querySelectorAll('._active').forEach(item => item.classList.remove('_active'));
        overlay.classList.remove('_show');
        body.style.cssText = ``
      } else {
        overlay.classList.add('_show');
        body.style.cssText = `overflow:hidden;padding-right:${window.innerWidth - body.offsetWidth}px;`
      }
    } else {
      const point = { height: `${catalogMenuBtn
        ?.nextElementSibling
        ?.firstElementChild
        ?.nextElementSibling.getBoundingClientRect().height}px`};
      
      catalogMenuBtn.nextElementSibling.animate(catalogMenuBtn.classList.contains('_active') ? [fade, point] : [point, fade], time);
    }
  }));

  window.addEventListener('resize', () => {
    if (window.innerWidth > 991) {
      filterPopup?.classList.remove('_active');
      overlay?.classList.remove('_show');
      catalog?.classList.remove('_show');
      catalogHeaderBtn?.classList.remove('_active')
      catalog.querySelectorAll('._active').forEach(item => item.classList.remove('_active'));
      body.style.cssText = ``
    }
  });
};



export default catalogMenu;
