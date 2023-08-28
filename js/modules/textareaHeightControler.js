const textareaHeightControler = () => {
  const textareas = document.querySelectorAll('textarea[name="question"], textarea[name="comment"]');
  
  textareas.forEach(textarea => {
    textarea.style.height = `${textarea.scrollHeight}px`
    textarea.addEventListener('input', ({target}) => {
      target.style.height = 'auto';
      target.style.height = `${target.scrollHeight}px`;
      
      if (target.selectionEnd === target.textLength)
        textarea.scrollTo({top: textarea.scrollHeight, behavior: 'smooth'});
    });
  });

  window.addEventListener('resize', () => {
    textareas.forEach(textarea => {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`
    });
  });
};

export default textareaHeightControler;