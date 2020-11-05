import generateQuote from "./quotes";
import renderCards from "./views/views";
import { handleReset } from './handlers';
import {openFolderModalClear} from './handlers/modal'

generateQuote();
window.addEventListener("focus", generateQuote);
document.querySelector("#changeQuote").onclick = generateQuote;
document.querySelector("#reset").onclick = handleReset;

document.querySelector("#show").onclick = openFolderModalClear;

renderCards();

// document.querySelector("#openMenu").onclick = handleToggleMenu;
// document.querySelector("#closeMenu").onclick = handleToggleMenu;

// document.querySelector("#addShortcut").onclick = handleToggleModal;
// document.querySelector("#saveModal").onclick = handleSave;
// document.querySelector("#closeModal").onclick = handleToggleModal;

// document.querySelector("#import").onclick = handleExportToUser;
// document.querySelector("#export").onclick = handleToggleTextareaModal;
// document.querySelector("#closeTextareaModal").onclick = handleToggleTextareaModal;
// document.querySelector("#saveTextareaModal").onclick = handleImportFromUser;
// document.querySelector("#wrapper").onclick = handleCloseMenu;
