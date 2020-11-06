import { readAllFromDB, readCurrentFolderFromDB } from "../api/database.api";
import createCard, { createPlusCard } from "./item";
import createSidebarCard from "./sidebarFolder";

export default function renderCards() {
  const mainPart = document.querySelector(".list-of-items");
  const sidePart = document.querySelector("#sidenavList");

  mainPart.innerHTML = "";
  sidePart.innerHTML = "";

  let folders = readAllFromDB();
  let currentFolderId = readCurrentFolderFromDB();

  console.log(folders);
  console.log(currentFolderId);

  if (folders) {
    if (folders.length !== 0) {
      folders.forEach((folder) => {
        createSidebarCard(folder, sidePart);
        if (folder.id === currentFolderId) {
          let items = folder.items;
          items.forEach((item) => {
            createCard(item, mainPart);
          });
          createPlusCard(mainPart);
        }
      });
    } else {
      // (elements.length)
      createCard({
        id: "0",
        link: "https://github.com/Diego-Lopes-Ferreira/dashboard-pure-js",
        icon: "github",
        title: "Lost ?",
      });
    }
  } // else (folders)
  feather.replace();
}
