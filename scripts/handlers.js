/*
  Table of Contents
  - User Functions
    - handleToggleModal(forceClose)
      Change the top property of the modal (sends it up or down)
      (if forceClose === true: sends it up)

    - handleToggleMenu(forceClose)
      Change the width of the div#sidenav to 0 or 250
      (if forceClose === true: div#sidenav goes to 0)
  
    - handleSave()
      if the item exists:
        edit on DB what is in the form
      else:
        create item on database
      then: toggleModal(closing), toggleMenu(closing) and renderCards

    - handleDeleteItem(id)
      call the deleteFromDB() function
      then: toggleModal(closing), toggleMenu(closing) and renderCards

    - handleEditItem(item)
      toggleModal and fill the form with the item

    - handleReset()
      calls resetDB() and renderCards
*/

import { saveToDB, deleteFromDB, editOnDB, resetDB } from "./localstorage.api";
import { fillForm, clearForm, readForm } from './form.api';
import { renderCards } from "./views";

export function handleToggleModal(forceClose = false) {
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

export function handleToggleMenu(forceClose = false) {
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

export function handleSave() {
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

export function handleDeleteItem(id) {
  deleteFromDB(id);
  toggleMenu();
  renderCards();
}

export function handleEditItem(item) {
  toggleModal();
  fillForm(item);
}

export function handleReset() {
  if (confirm("Sure about that?")) {
    resetDB();
    renderCards();
  }
}
