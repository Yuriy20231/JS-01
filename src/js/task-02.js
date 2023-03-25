const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

const elements = ingredients.map(option => {
  const liEl = document.createElement('li');
  liEl.textContent = option;
  liEl.classList.add('item');
  return liEl;
})

ingredientsList.append(...elements)

console.log(elements);
console.log(ingredientsList);

