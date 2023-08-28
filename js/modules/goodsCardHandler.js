import { globalCountCartHandler } from "./globalCountCartHandler.js";

const goodsCardHandler = () => {
  const goods = document.querySelectorAll('.goods');
  const globalCountCartHeader = document.getElementById('count-cart-header');
  const globalCountCartAside = document.getElementById('count-cart-aside');

  if(!goods) return;

  goods.forEach(goods => goods.addEventListener('click', ({target}) => {
    const card = target.closest('.goods-card');

    if (!card) return;

    const btn = target.closest('.goods-card__in-basket');
    const favorite = target.closest('.goods-card__favorite-button');
    const inc = target.closest('.goods-card__count-inc');
    const dec = target.closest('.goods-card__count-dec');
    const count = card.querySelector('.goods-card__count-input');

    if (favorite) {
      favorite.classList.toggle('_checked');

      return;
    }
    
    if (btn) {
      if (card.classList.contains('_active')) return;

      card.classList.add('_active');

      globalCountCartHandler(globalCountCartHeader);
      globalCountCartHandler(globalCountCartAside);

      return;
    }

    if(inc || dec) {
      const value = +count.value + +!!inc -+!!dec;

      globalCountCartHandler(globalCountCartHeader, !!inc -+!!dec);
      globalCountCartHandler(globalCountCartAside, !!inc -+!!dec);

      if(!value) 
        card.classList.remove('_active');
        
      value > 0 && value < 1000 && (count.value = value);

      return;
    }
  }));
  
  goods.forEach(goods => goods.querySelectorAll('.goods-card__imgs')?.forEach(item => new Swiper(item, {
    speed: 400,
    spaceBetween: 6,
    pagination: {
      el: '.goods-card__imgs-pagination',
      bulletClass: 'goods-card__dot',
      type: 'bullets',
      clickable: true,
      bulletActiveClass: '_active',
      renderBullet: function (index, className) {
          return `
          <div class="${className}">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="7"
                height="7"
                rx="3.5"
                stroke="url(#linear-main)"
              />
            </svg>
          </div>`;
      },
    }
  })));
}

export default goodsCardHandler;
