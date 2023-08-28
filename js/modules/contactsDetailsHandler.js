const contactsDetailsHandler = () =>  {
  const details = document.querySelector('.contacts__details');

  if (!details) return;

  const [btn, wrap, list] = details.querySelectorAll('.contacts__details-show, .contacts__details-wrap, .contacts__details-list');
  const time = {
    duration: 400,
    iterations: 1,
  };

  btn.addEventListener('click', ({currentTarget}) => {
    const {height} = list.getBoundingClientRect();

    currentTarget.classList.toggle('_active');
    wrap.classList.toggle('_show');

    wrap.classList.contains('_show') ?
      wrap.animate([{height: 0}, {height: `${height}px`}], time) :
      wrap.animate([{height: `${height}px`}, {height: 0}], time);
  });
};

export default contactsDetailsHandler;
