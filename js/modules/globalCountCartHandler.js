export const globalCountCartHandler = (count, value = 1) => count
  .animate([
    {transform: 'translate(50%, -50%) scale(1)'},
    {transform: 'translate(50%, -50%) scale(1.2)'}
  ], {duration: 200, iterations: 1,})
    .onfinish = () => {
      if(count.classList.contains('_null')) {
        count.classList.remove('_null');
        count.textContent = 1;
      } else {
        count.textContent = +count.textContent + value; 
      }
    
      count.animate([
        {transform: 'translate(50%, -50%) scale(1.2)'},
        {transform: 'translate(50%, -50%) scale(1)'}
      ], {duration: 200, iterations: 1,});
    };