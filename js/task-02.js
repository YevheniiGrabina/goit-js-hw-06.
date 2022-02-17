
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');


const ingredientsList = ingredients.map(ingredient => {

  const ingredientRef = document.createElement('li');

  ingredientRef.classList.add('item')

  ingredientRef.textContent = ingredient;

  return ingredientRef;
});

ingredientsRef.append(...ingredientsList);
console.log(ingredientsList);