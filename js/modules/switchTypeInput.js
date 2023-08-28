const switchTypeInput = () => {
  const switchers = document.querySelectorAll('.switch-type-input');

  switchers.forEach(switcher => switcher.addEventListener('click', ({currentTarget}) => {
    const input = currentTarget.previousElementSibling;

    switch (input.type) {
      case 'password':
        input.type = 'text';
        return;
      case 'text':
        input.type = 'password';
        return;
      default:
        return;
    }
  }));
};

export default switchTypeInput;
