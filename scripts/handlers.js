/*
  Table of Contents
  - User Functions
    - handleToggleModal()
      Change the top property of the modal (sends it up or down)

    - handleToggleMenu()
      Change the width of the div#sidenav to 0 or 250
  
    - handleCloseMenu()
      Change the width of the div#sidenav to 0
  
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

import {
  saveToDB,
  deleteFromDB,
  editOnDB,
  resetDB,
  exportToUser,
  importFromUser,
} from "./api/database.api";
import { fillForm, clearForm, readForm, readImportTextarea } from "./api/form.api";
import renderCards from "./views/views";

export function handleToggleModal() {
  handleCloseMenu();
  const modal = document.querySelector(".modal");

  if (modal.style.top === "50%") {
    modal.style.top = "-100%";
  } else {
    modal.style.top = "50%";
    modal.style.transform = "translate(50%, -50%)";
  } // else (top distance)
  clearForm();
}

export function handleToggleTextareaModal() {
  // handleCloseMenu();
  const modal = document.querySelector(".textarea-modal");

  if (modal.style.top === "50%") {
    modal.style.top = "-100%";
  } else {
    modal.style.top = "50%";
    modal.style.transform = "translate(50%, -50%)";
  } // else (top distance)
}

export function handleToggleMenu() {
  const sideNav = document.querySelector(".sidenav");

  if (sideNav.clientWidth > 10) {
    sideNav.style.width = "0px";
  } else {
    sideNav.style.width = "300px";
  } // else (width)
}

export function handleCloseMenu() {
  const sideNav = document.querySelector(".sidenav");
  sideNav.style.width = "0px";
}

export function handleSave() {
  let item = readForm();
  if (item.id === "") {
    saveToDB(item);
  } else {
    editOnDB(item);
  }
  handleToggleModal();
  handleToggleMenu();
  renderCards();
}

export function handleDeleteItem(id) {
  deleteFromDB(id);
  handleToggleMenu();
  renderCards();
}

export function handleEditItem(item) {
  handleToggleModal();
  fillForm(item);
}

export function handleReset() {
  if (confirm("Sure about that?")) {
    resetDB();
    renderCards();
  }
}

export function handleExportToUser() {
  // handleToggleMenu();
  exportToUser();
}

export function handleImportFromUser() {
  let items = readImportTextarea();
  importFromUser(items);
  handleToggleTextareaModal();
  renderCards();
}
