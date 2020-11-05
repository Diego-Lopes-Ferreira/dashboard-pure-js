import generateQuote from "./quotes";
import renderCards from "./views/views";

generateQuote();
window.addEventListener("focus", generateQuote);
document.querySelector("#changeQuote").onclick = generateQuote;

renderCards();

// document.querySelector("#openMenu").onclick = handleToggleMenu;
// document.querySelector("#closeMenu").onclick = handleToggleMenu;
// document.querySelector("#reset").onclick = handleReset;

// document.querySelector("#addShortcut").onclick = handleToggleModal;
// document.querySelector("#saveModal").onclick = handleSave;
// document.querySelector("#closeModal").onclick = handleToggleModal;

// document.querySelector("#import").onclick = handleExportToUser;
// document.querySelector("#export").onclick = handleToggleTextareaModal;
// document.querySelector("#closeTextareaModal").onclick = handleToggleTextareaModal;
// document.querySelector("#saveTextareaModal").onclick = handleImportFromUser;
// document.querySelector("#wrapper").onclick = handleCloseMenu;
