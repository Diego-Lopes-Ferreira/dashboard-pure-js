import renderCards from './scripts/renderCards.js';
renderCards();

import { resetDB, saveToDB } from './scripts/api.js';

document.querySelector("header button").onclick = openCloseModal;
document.querySelector("#close").onclick = openCloseModal;
document.querySelector("#save").onclick = save;
document.querySelector("#reset").onclick = reset;


const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const imageInput = document.querySelector("#image");
const linkInput = document.querySelector("#link");

function save() {
  saveToDB(readForm());
  renderCards();
  openCloseModal();
}
function reset() {
  resetDB();
  renderCards();
}

function openCloseModal() {
  document.querySelector('.modal').classList.toggle('show');
  document.querySelector('.modal').classList.toggle('hide');
  clearForm()
}
function clearForm() {
  titleInput.value = '';
  descriptionInput.value = '';
  imageInput.value = '';
  linkInput.value = '';
}
function readForm() {
  const values = {
    title: titleInput.value,
    description: descriptionInput.value,
    image: imageInput.value,
    link: linkInput.value,
  }
  //console.log(values)
  return values
}




async function generateQuote() {
  var response = await fetch("./movie-quotes.json");
  var data = await response.json();

  let number = Math.floor(Math.random() * 100);
  let complete = data[number];
  let last = data[number].lastIndexOf('\" ');

  let who = complete.slice(last + 2);
  let quote = complete.slice(0, last + 1);

  document.querySelector("#quote").innerHTML = quote;
  document.querySelector("#who").innerHTML = who;
}
generateQuote();
