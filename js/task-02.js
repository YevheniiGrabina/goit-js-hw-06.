const setEl = document.querySelector('#ingredients');
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const allNewItemEl = ingredients.map(ingredient => {
  const setItemEl = document.createElement("li");
  setItemEl.textContent = [ingredient]
  setItemEl.classList.add('item')
  setEl.append(setItemEl)
});