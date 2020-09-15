import createCard from './createCard.js';

const mainPart = document.querySelector('main');

export default async function renderCards() {
  mainPart.innerHTML = '';
  let list = localStorage.getItem('diego-items')
  //console.log(list);
  let elements = JSON.parse(list);
  //console.log(elements);
  for (let element of elements) {
    //console.log(element)
    createCard(element);
  }
}
