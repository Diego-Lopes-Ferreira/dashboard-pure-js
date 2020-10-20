/*
  Table of contents
  - Selectors
    - Buttons: [openMenu, closeMenu, reset, add, save, close, view]

*/

// Selectors
document.querySelector('#openMenu').onclick = toggleMenu;
document.querySelector('#closeMenu').onclick = toggleMenu;
document.querySelector('#reset').onclick = reset;
document.querySelector('#addShortcut').onclick = toggleModal;
document.querySelector('#saveModal').onclick = save;
document.querySelector('#closeModal').onclick = toggleModal;
document.querySelector('#wrapper').onclick = closeMenu;
