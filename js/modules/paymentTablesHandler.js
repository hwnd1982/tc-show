const paymentTablesHandler = () => {
  const payment = document.querySelector('.payment');
  const time = {
    duration: 400,
    iterations: 1,
  };

  if (!payment) return;

  const btns = payment.querySelectorAll('.payment__show');

  btns.forEach((btn => btn.addEventListener('click', ({currentTarget}) => {
    const table = currentTarget.previousElementSibling

    table.classList.toggle('_all');
  })));
};

export default paymentTablesHandler;
