import generateQuote from "./quotes";
import renderCards from "./views";
import {
  handleDeleteItem,
  handleEditItem,
  handleReset,
  handleSave,
  handleToggleMenu,
  handleToggleModal,
} from "./handlers";

generateQuote();
window.addEventListener("focus", generateQuote);
document.querySelector("#changeQuote").onclick = generateQuote;

document.querySelector("#openMenu").onclick = handleToggleMenu;
document.querySelector("#closeMenu").onclick = handleToggleMenu;
document.querySelector("#reset").onclick = handleReset;
document.querySelector("#addShortcut").onclick = handleToggleModal;
document.querySelector("#saveModal").onclick = handleSave;
document.querySelector("#closeModal").onclick = handleToggleModal;
document.querySelector("#wrapper").onclick = () => {
  handleToggleMenu(forceClose = true);
}

renderCards();
