//Напиши скрипт, который реагирует на изменение 
//значения input#font-size-control (событие input) и 
//изменяет инлайн-стиль span#text обновляя свойство font-size. 
//В результате при перетаскивании ползунка будет меняться размер текста.

const refs = {
    fontSiseText: document.querySelector('#font-size-control'),
    currentText: document.querySelector('#text'),
  };
  refs.fontSiseText.addEventListener('input', fontSizeValue);
  
  function fontSizeValue(event) {
    refs.currentText.style.fontSize = event.currentTarget.value + 'px';
  }

