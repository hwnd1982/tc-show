const headerMenu = () => {
  const header = document.querySelector('.header');

  if (!header) return;

  const btn = document.querySelector('.header-main__menu-btn');
  const menu = header.querySelector('.mobile-menu');
  const menuInner = menu.querySelector('.mobile-menu__container');
  const productTools = document.querySelector('.product__tools');
  const cartAside = document.querySelector('.cart__aside._popup');
  const toolbar = document.querySelector('.toolbar._aside');
  const body = document.body;
  
  btn.addEventListener('click', ({currentTarget}) => {
    currentTarget.classList.toggle('_active');

    if(currentTarget.classList.contains('_active')) {
      const {height: menuInnerHeight} = menuInner.getBoundingClientRect();

      body.style.cssText = `overflow:hidden;padding-right:${window.innerWidth - body.offsetWidth}px;`;
      header.style.cssText = `height:${window.innerHeight}px;`;
      menu.classList.add('_open');
      menu.style.height = `${menuInnerHeight}px`
      toolbar.classList.add('_hidden');
      productTools?.classList.add('_hidden');
      cartAside?.classList.add('_hidden');
      setTimeout(() => menu.style.cssText = '', 450);
    } else {
      header.style.cssText = ``;
      toolbar.classList.remove('_hidden');
      productTools?.classList.remove('_hidden');
      cartAside?.classList.remove('_hidden');
      menu.classList.remove('_open');
      menu.style.cssText = ``;
      setTimeout(() => body.style.cssText = '', 450);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
      header.style.cssText = ``;
      btn.classList.remove('_active');
      toolbar.classList.remove('_hidden');
      productTools?.classList.remove('_hidden');
      cartAside?.classList.remove('_hidden');
      setTimeout(() => body.style.cssText = '', 450);
    }
  });
}

export default headerMenu;
