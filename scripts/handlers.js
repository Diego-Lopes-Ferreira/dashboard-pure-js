/*
  Table of Contents
  - User Functions
    - toggleModal()
      Change the top property of the modal
      (sends it up)

    - toggleMenu()
      Change the width of the div#sidenav to 0 or 250
    
    - closeMenu()
      Change the width of the div#sidenav to 0
      
  
    - save()
      if the item exists:
        edit on DB what is in the form
      else:
        create item on database
      then: toggleModal(closing), toggleMenu(closing) and renderCards

    - deleteItem(id)
      call the deleteFromDB() function
      then: toggleModal(closing), toggleMenu(closing) and renderCards

    - editItem(item)
      toggleModal and fill the form with the item

    - reset()
      calls resetDB() and renderCards
*/

import { saveToDB, deleteFromDB, editOnDB, resetDB } from "./localstorage.api";
import { fillForm, clearForm, readForm } from './form.api';
import { renderCards } from "./views";

export function toggleModal(forceClose = false) {
  const modal = document.querySelector(".modal");
  if (forceClose) {
    modal.style.top = "-100%";
  } else {
    if (modal.style.top === "50%") {
      modal.style.top = "-100%";
    } else {
      modal.style.top = "50%";
      modal.style.transform = "translate(50%, -50%)";
    } // else (top distance)
  } // else (forceClose)

  clearForm();
}

export function toggleMenu(forceClose = false) {
  const sideNav = document.querySelector(".sidenav");
  if (forceClose) {
    sideNav.style.width = "0px";
  } else {
    if (sideNav.clientWidth > 0) {
      sideNav.style.width = "0px";
    } else {
      sideNav.style.width = "300px";
    } // else (width)
  } // else (forceClose)
}

export function save() {
  let item = readForm();
  if (item.id === "") {
    saveToDB(item);
  } else {
    editOnDB(item);
  }
  toggleModal();
  toggleMenu();
  renderCards();
}

export function deleteItem(id) {
  deleteFromDB(id);
  toggleMenu();
  renderCards();
}

export function clickToEditItem(item) {
  toggleModal();
  fillForm(item);
}

export function reset() {
  if (confirm("Sure about that?")) {
    resetDB();
    renderCards();
  }
}
