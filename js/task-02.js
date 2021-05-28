
//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. 
//Для создания DOM-узлов используй document.createElement().

//const ingredientsEl = document.querySelector('ul');
//const newIngredients = ingredients.map(ingredient => {
//  const ItemEl = document.createElement('li');
//  ItemEl.textContent = ingredient;
//  return ItemEl;
//});
//ingredientsEl.append(...newIngredients);

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const ingredientsEl = document.querySelector('ul');
  const newIngredients = ingredients.map(ingredient => {
    const ItemEl = document.createElement('li');
    ItemEl.textContent = ingredient;
    return ItemEl;
  });

 ingredientsEl.append(...newIngredients);

