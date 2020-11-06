// * FOLDER
const folderModalContainer = document.querySelector(".modal-container#folder");

export function openFolderModalClear() {
  folderModalContainer.classList.remove("out");
  folderModalContainer.classList.remove("show");
  folderModalContainer.classList.add("show");
}
export function openFolderModalFill(folder) {
  openFolderModalClear();
  // fillFolderForm(folder);
}
export function closeFolderModal() {
  folderModalContainer.classList.add("out");
}

// * ITEM
const itemModalContainer = document.querySelector(".modal-container#item");

export function openItemModalClear() {
  itemModalContainer.classList.remove("show");
  itemModalContainer.classList.remove("out");
  itemModalContainer.classList.add("show");
}
export function openItemModalFill(item) {
  openItemModalClear();
  // fillItemForm(item);
}
export function closeItemModal() {
  itemModalContainer.classList.add("out");
}

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
