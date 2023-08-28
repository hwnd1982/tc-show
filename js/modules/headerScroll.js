import { scrollToCharacterTriger } from "./productInfoSwiper.js";

const headerScroll = () => {
  const [header, headerMain, filter] = document.querySelectorAll('.header, .header-main, .filter');
  
  if (!header) return;

  const scrollItems = document.getElementsByClassName('_scroll');

  header.addEventListener('transitionend', ({currentTarget, propertyName}) => {
    if (propertyName === 'padding-bottom') {
      if (!currentTarget.classList.contains('_scroll'))
        window.scrollTo({top: -75, behavior: 'smooth'});
    }
  })
  
  window.addEventListener('scroll', () => {
    const {top: headerMainTop, height: headerMainHeight} = headerMain.getBoundingClientRect();
  
    if (headerMainTop < 0 &&  !filter &&  header.classList.contains('_scroll')) return;

    if (headerMainTop >= 0) {
      header.classList.remove('_scroll');
      header.classList.remove('_last');
      
    } else if (!header.classList.contains('_scroll')) {
      if(!scrollItems.length) header.classList.add('_last');
      header.classList.add('_scroll');
      if (!scrollToCharacterTriger)
        window.scrollTo(0, headerMainHeight,  {behavior: "smooth"});
    }
      
    if (!filter) return;  
    
    let {top: filterMainTop} = filter.getBoundingClientRect();

    filterMainTop += headerMainTop - headerMainHeight;

    if (filterMainTop < 0 && filter.classList.contains('_scroll')) return; 

    if (filterMainTop >= 0) {
      filter.classList.remove('_scroll');
      filter.classList.remove('_last');
    } else if (!filter.classList.contains('_scroll'))
      filter.classList.add('_scroll');
    
    [...scrollItems].forEach((item, index, {length}) => item.classList[index < length - 1 ? 'remove' : 'add']('_last'));
  });
}

export default headerScroll;
