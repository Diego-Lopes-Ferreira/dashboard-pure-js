/*
  Table of contents
  - Functions:
    - createCard(item)
    - createFolder(item)
    - renderCards()
    get the data from localStorage
    find the main part
    loop for each element creating a card and sidebarcard
*/

import { readAllFromDB } from "./database.api";

export default function renderCards() {
  const mainPart = document.querySelector(".list-of-items");
  const sidePart = document.querySelector("#sidenavList");

  mainPart.innerHTML = "";
  sidePart.innerHTML = "";
  let elements = readAllFromDB();
  if (elements) {
    if (elements.length !== 0) {
      for (let element of elements) {
        createCard(element);
        createSidebarCard(element);
      }
    } else {
      createCard({
        id: "0",
        link: "https://github.com/Diego-Lopes-Ferreira/dashboard-pure-js",
        icon: "github",
        title: "Lost ?",
      });
    } // else (elements.length)
  } // else (elements)
  feather.replace();
}

function createCard(item) {
  // item = { id: '000000',link: string, icon: string, title: string }
  /*
    <div class="item" href="link">
      <a href="link">
        <i>ICON</i>
        <h1>Name</h1>
      </a>
      <button>&#8901&#8901&#8901</button>
    </div>
  */
  const { id, link, icon, title } = item;
  let externalDiv = document.createElement("div");
  let anchor = document.createElement("a");
  let iconElement = document.createElement("i");
  let titleElement = document.createElement("h1");
  let btnEdit = document.createElement("button");

  iconElement.setAttribute("data-feather", icon);
  titleElement.innerHTML = title;
  btnEdit.innerHTML = '&#8901&#8901&#8901';

  anchor.setAttribute("href", link);
  anchor.appendChild(iconElement);
  anchor.appendChild(titleElement);
  externalDiv.appendChild(anchor);
  externalDiv.appendChild(btnEdit);
}

function createSidebarCard(item) {
  const { id, title, desc, icon } = item;
  /*
    <button>
      <icon></icon>
      <h1></h1>
    </button>
  */
  const sidePart = document.querySelector("#sidenavList");

  let sideBarButton = document.createElement("button");
  let header = document.createElement("h1");
  let iconElement = document.createElement("i");

  iconElement.setAttribute("data-feather", icon);

  header.innerHTML = title;

  sideBarButton.classList.add('folder-card');
  sideBarButton.appendChild(iconElement);
  sideBarButton.appendChild(header);
  sidePart.appendChild(sideBarButton);
}
