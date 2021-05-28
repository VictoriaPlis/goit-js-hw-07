//Напиши скрипт, который бы при потере фокуса на инпуте, 
//проверял его содержимое на правильное количество символов.

//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество, то border инпута становится зеленым, 
//если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid.




const nmbrOfCharacters = document.querySelector('#validation-input');
nmbrOfCharacters.addEventListener('blur', validInput);

function validInput(event) {
  if (
  event.currentTarget.getAttribute('data-length') ==
  event.currentTarget.value.length
  ) {
  nmbrOfCharacters.classList.remove('invalid');
  nmbrOfCharacters.classList.add('valid');
  } else {
  nmbrOfCharacters.classList.remove('valid');
  nmbrOfCharacters.classList.add('invalid');
 }
}

