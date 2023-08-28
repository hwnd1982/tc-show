import { globalCountCartHandler } from "./globalCountCartHandler.js";

const productHandler = () => {
  const product = document.querySelector('.product');
  const globalCountCartHeader = document.getElementById('count-cart-header');
  const globalCountCartAside = document.getElementById('count-cart-aside');
  
  if (!product) return;
  
  const input = product.querySelector('.product__count-input');

  product.addEventListener('click', ({target}) => {
    const favorite = target.closest('.favorite-button');
    const btn = target.closest('.product__in-basket');
    const inc = target.closest('.product__count-inc');
    const dec = target.closest('.product__count-dec');
    
    if (favorite) {
      favorite.classList.toggle('_checked');

      return;
    }
    
    if (btn) {
      if (product.classList.contains('_active')) return;

      product.classList.add('_active');
      globalCountCartHandler(globalCountCartHeader, +input.value);
      globalCountCartHandler(globalCountCartAside, +input.value);
    }
      
    if(inc || dec) {
      const value = +input.value + +!!inc -+!!dec;

      if (product.classList.contains('_active')) {
        globalCountCartHandler(globalCountCartHeader, !!inc -+!!dec);
        globalCountCartHandler(globalCountCartAside, !!inc -+!!dec);
      }

      if (!value) {
        product.classList.remove('_active');
      }
      value > 0 && value < 1000 && (input.value = value);
    }
  });
};

export default productHandler;
