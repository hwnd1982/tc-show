const checkoutFormHandler = () => {
  const checkoutForm = document.querySelector('.checkout__form');

  if (!checkoutForm) return;

  const pickup = document.getElementById('pickup');
  const courier = document.getElementById('courier');
  const delivery = document.getElementById('delivery-address');
  const time = {
    duration: 400,
    iterations: 1,
  };
  const {height: start} = delivery.getBoundingClientRect();

  
  pickup?.addEventListener('click', ({target}) => {
    delivery.disabled = target.checked;
    delivery.animate([{height: `${start}px`}, {height: 0}], time);
  });
  
  courier?.addEventListener('click', ({target}) => {
    const animate = delivery.disabled === target.checked;

    if (!animate) return;

    delivery.disabled = !target.checked;
    delivery.animate([{height: 0}, {height: `${start}px`}], time);
  });
  
  // (async () => {
  //   const response = await fetch('https://api.hh.ru/areas');
  //   const [{areas}] = await response.json();
  //   const cites = areas.reduce((cites, area) => [...cites, ...area.areas.map(city => city.name)], []);

  //   console.log(cites);
  // })();

  if (!checkoutForm) return;

  checkoutForm.addEventListener('click', ({target}) => {
    const select = target.closest('.select');
    const selectHeader = target.closest('.select__header');
    const selectCites = target.closest('.city');

    if (!selectHeader && !selectCites) return;

    const header = select.querySelector('.select__header');
    const body = select.querySelector('.select__body');
    const {height} = body.firstElementChild.getBoundingClientRect();  
    
    if (selectCites) {
      header.firstElementChild.value = selectCites.textContent;
    }

    select.classList.toggle('_show');
    body.style.height = select.classList.contains('_show') ? `${height}px` : ``;
  });
};

export default checkoutFormHandler;
