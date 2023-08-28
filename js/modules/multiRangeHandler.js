const multiRangeHandler = () => {
  const ranges = document.querySelectorAll('.multi-range');

  ranges.forEach(item => {
    const [rangeStart, rangeEnd] = item.querySelectorAll(".multi-range__range");
    const [counterStart, counterEnd] = item.querySelectorAll(".multi-range__counter-input");
    const range = item.querySelector(".multi-range__range-bar");
    const min = parseInt(rangeStart.min);
    const max = parseInt(rangeEnd.max);

    function setStartValue({ target }) {
      let percent;
        
      // target.value = Math.min(parseInt(target.value), parseInt(rangeEnd.value) - 1);

      if (parseInt(target.value) > parseInt(rangeEnd.value) - 1) {
        if (+target.value + 1 < max) {
          rangeEnd.value = target.value;
          setEndValue({ target: rangeEnd });
        } else 
        target.value = Math.min(parseInt(target.value), parseInt(rangeEnd.value) - 1);
      }
        
      counterStart.value = target.value;
      rangeStart.value = target.value;

      percent = ((target.value - min) / (max - min)) * 100;
        
      range.style.left = percent + "%";
    }
      
    function setEndValue({ target }) {
      let percent;
      
      // target.value = Math.max(parseInt(target.value), parseInt(rangeStart.value) + 1);

      if (parseInt(target.value) < parseInt(rangeStart.value) + 1) {
        if (+target.value - 1 > min) {
          rangeStart.value = target.value - 1;
          setStartValue({ target: rangeStart });
        } else {
          target.value = Math.max(parseInt(target.value), parseInt(rangeStart.value) + 1);
        }      
      }
      
      percent = ((target.value - min) / (max - min)) * 100;

      counterEnd.value = target.value;
      rangeEnd.value = target.value;

      range.style.right = (100 - percent) + "%";
    }

    setStartValue({ target: rangeStart });
    setEndValue({ target: rangeEnd });

    rangeStart.addEventListener("input", setStartValue);
    counterStart.addEventListener("change", setStartValue);
    rangeEnd.addEventListener("input", setEndValue);
    counterEnd.addEventListener("change", setEndValue);
  });
};

export default multiRangeHandler;