import { globalCountCartHandler } from "./globalCountCartHandler.js";

const cartHandler = () => {
  const cart = document.querySelector('.cart__list');
  const globalCountCartHeader = document.getElementById('count-cart-header');
  const globalCountCartAside = document.getElementById('count-cart-aside');

  if (!cart) return;

  cart.addEventListener('click', ({target}) => {
    const favorite = target.closest('.cart__favorite-button');
    const inc = target.closest('.cart__count-inc');
    const dec = target.closest('.cart__count-dec');
    const count = target.closest('.cart__count');
    const input = count?.querySelector('.cart__count-input');

    if (favorite) {
      favorite.classList.toggle('_checked');

      return;
    }

    if(inc || dec) {
      const value = +input.value + +!!inc -+!!dec;

      if (value > 0 && value < 1000) {
        input.value = value;
        
        globalCountCartHandler(globalCountCartHeader, !!inc -+!!dec);
        globalCountCartHandler(globalCountCartAside, !!inc -+!!dec);
      }
    }
  });
};

export default cartHandler;