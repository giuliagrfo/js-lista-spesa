
// Creo array 
const list = [
    'Frutta',
    'Pasta',
    'Pane',
    'Latte',
    'Caffè'
]

// stampo gli elementi dell'array con while loop

//  seleziono elemento della DOM
const groceryListElement = document.querySelector('.grocery_list');

console.log(groceryListElement);

// ciclo while

let i = 0;

while (i < list.length) {
    const listItem = list[i];

    const groceryListItem = `<li><input type="checkbox" name="" id=""> ${listItem}</li>`;
    groceryListElement.insertAdjacentHTML('beforeend', groceryListItem);

    i++;
}
