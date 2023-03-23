const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsElement = document.getElementById("ingredients")


const li = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')
const li4 = document.createElement('li')
const li5 = document.createElement('li')
const li6 = document.createElement('li')

li.classList.add('item')
li2.classList.add('item')
li3.classList.add('item')
li4.classList.add('item')
li5.classList.add('item')
li6.classList.add('item')

li.append("Potatoes")
li2.append("Mushrooms")
li3.append("Garlic")
li4.append("Tomatos")
li5.append("Herbs")
li6.append("Condiments")

ingredientsElement.insertAdjacentElement('afterbegin', li);
ingredientsElement.insertAdjacentElement('afterbegin', li2);
ingredientsElement.insertAdjacentElement('afterbegin', li3);
ingredientsElement.insertAdjacentElement('afterbegin', li4);
ingredientsElement.insertAdjacentElement('afterbegin', li5);
ingredientsElement.insertAdjacentElement('afterbegin', li6);
console.log(ingredientsElement)