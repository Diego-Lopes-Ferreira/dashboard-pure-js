import { fillForm } from "../api/form.api";

// * FOLDER
const folderModalContainer = document.querySelector(".modal-container#folder");

export function openFolderModalClear() {
  folderModalContainer.classList.remove("out");
  folderModalContainer.classList.remove("show");
  folderModalContainer.classList.add("show");
}
export function openFolderModalFill(folder) {
  openFolderModalClear();
  fillFolderForm(folder);
}
export function closeFolderModal() {
  folderModalContainer.classList.add("out");
}

// * ITEM
const itemModalContainer = document.querySelector(".modal-container#item");
const itemModalCloseBtn = document.querySelector(
  ".modal-container#item #close"
);
export function openItemModalClear() {}
export function openItemModalFill(item) {}
export function closeItemModal() {}

/* 
[v] const button = document.querySelector(".button");
[v] const closeButton = document.querySelector('#close');

[ ] button.onclick = open;

[ ] closeButton.onclick = close;

[ ]
* function close() {
*   theDiv.classList.add("out");
* }
[ ] 
* function open() {
*   theDiv.setAttribute("class", "");
*   theDiv.classList.add(show);
* }
*/
