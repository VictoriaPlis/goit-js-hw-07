//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
//Получится 'В списке 3 категории.'.



//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и 
//количество элементов в категории (всех вложенных в него элементов li).




const ItemsEl = document.querySelectorAll(' .item');
console.log(`В списке ${ItemsEl.length} категории.`);

const category = array => {
  array.forEach(element => {
    const title = element.querySelector('h2');
    const itemEl = element.querySelectorAll('li');
    console.log(`Категория: ${title.textContent}.`);
    console.log(`Количество элементов: ${itemEl.length}.`);
  });
};
category(ItemsEl);