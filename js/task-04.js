//Счетчик состоит из спана и кнопок, 
//которые должны увеличивать и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const refs = {
    decrementBtnEl: document.querySelector('[data-action="decrement"]'),
    incrementBtnEl: document.querySelector('[data-action="increment"]'),
    valueEl: document.querySelector('span'),
  };
  let valueCounter = 0;
  
  refs.decrementBtnEl.addEventListener('click', onClickDecrementBtn);
  refs.incrementBtnEl.addEventListener('click', onClickIncrementBtn);
  
  function onClickDecrementBtn() {
    valueCounter -= 1;
    refs.valueEl.textContent = valueCounter;
  }
  function onClickIncrementBtn() {
    valueCounter += 1;
    refs.valueEl.textContent = valueCounter;
  }