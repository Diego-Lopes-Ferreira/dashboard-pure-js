/*
  Table of contents
  - Functions:
    - createCard(item)
      creates the html components for the card
      set the atributes (and innerHTML)
      append each child to the parent component
      find the main part
      append the parent component to the main part

    - createSidebarCard(item)
      creates the html components
      set the atributes (and innerHTML)
      append each child to the parent component
      find the aside part
      append the parent component to the side part
    
      - renderCards()
      get the data from localStorage
      find the main part
      loop for each element creating a card and sidebarcard
*/

import { readFromDB } from "./localstorage.api";
import { handleDeleteItem, handleEditItem }from './handlers';

export default function renderCards() {
  const mainPart = document.querySelector("main");
  const sidePart = document.querySelector("#sidenavList");

  mainPart.innerHTML = "";
  sidePart.innerHTML = "";
  let elements = readFromDB();
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
        img: "github.png",
        title: "Lost ?",
        desc: 'Check the "Get Started" post on GitHub\nclick me',
      });
      createSidebarCard({
        id: "0",
        title: "Click Add a thing",
        desc: "and start using",
      });
    } // else (elements.length)
  } // else (elements)
  feather.replace()
}

function createCard(item) {
  const { title, desc, icon, link } = item;
  const mainPart = document.querySelector("main");

  let card = document.createElement("a");
  let iconElement = document.createElement("i");
  let header = document.createElement("h1");
  let paragraph = document.createElement("p");
  
  card.setAttribute("href", link);
  // card.setAttribute("target", "_blank");
  card.classList.add("card");
  
  iconElement.setAttribute("data-feather", icon);
  
  header.innerHTML = title;
  
  paragraph.innerHTML = desc;
  
  card.appendChild(iconElement);
  card.appendChild(header);
  card.appendChild(paragraph);
  mainPart.appendChild(card);
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

  sideBarButton.appendChild(iconElement);
  sideBarButton.appendChild(header);
  sidePart.appendChild(sideBarButton);
}
