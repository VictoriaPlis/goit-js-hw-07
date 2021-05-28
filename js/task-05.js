//Напиши скрипт который, при наборе текста в 
//инпуте input#name-input (событие input), 
//подставляет его текущее значение в span#name-output. 
//Если инпут пустой, в спане должна отображаться строка 'незнакомец'.



const refs = {
    nameInputEl: document.querySelector('#name-input'),
    nameOutputEl: document.querySelector('#name-output'),
  };
  
  refs.nameInputEl.addEventListener('input', nameOutputValue);
  
  function nameOutputValue(event) {
    if (event.currentTarget.value !== '')
      refs.nameOutputEl.textContent = event.currentTarget.value;
    else refs.nameOutputEl.textContent = 'незнакомец';
  }