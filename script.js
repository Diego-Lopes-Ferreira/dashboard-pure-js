/*

  Table of contents
  - Selectors
    - Buttons: [openMenu, closeMenu, reset, add, save, close, view]

  - RawInfo
    - localStorageKey
    - resetInfo

  - logic
    - renderCards();

  
    - readForm()
      Extract all data from the inputs
      Returns an object: {Title, Description, Image, Link}
    - clearForm()
      Fill all data from the inputs with an empty string
      - fillForm(item) {
        Fill all data from the inputs with the item info


*/

// Selectors
document.querySelector('#openMenu').onclick = toggleMenu;
document.querySelector('#closeMenu').onclick = toggleMenu;
document.querySelector('#reset').onclick = reset;
document.querySelector('#addShortcut').onclick = toggleModal;
document.querySelector('#saveModal').onclick = save;
document.querySelector('#closeModal').onclick = toggleModal;
document.querySelector('#wrapper').onclick = closeMenu;

// RawInfo



function readForm() {
  const id = document.querySelector('.modal #id').value;
  const title = document.querySelector('.modal #title').value;
  const desc = document.querySelector('.modal #description').value;
  const img = document.querySelector('.modal #image').value;
  const link = document.querySelector('.modal #link').value;
  return { id: id, title: title, desc: desc, img: img, link: link };
}
function clearForm() {
  document.querySelector('.modal #id').value = '';
  document.querySelector('.modal #title').value = '';
  document.querySelector('.modal #description').value = '';
  document.querySelector('.modal #image').value = '';
  document.querySelector('.modal #link').value = '';
}
function fillForm(item) {
  const { id, title, desc, img, link } = item;
  document.querySelector('.modal #id').value = id;
  document.querySelector('.modal #title').value = title;
  document.querySelector('.modal #description').value = desc;
  document.querySelector('.modal #image').value = img;
  document.querySelector('.modal #link').value = link;
}

// Components
