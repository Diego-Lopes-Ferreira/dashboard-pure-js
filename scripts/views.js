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

export function renderCards() {
  const mainPart = document.querySelector("main");
  const sidePart = document.querySelector("#sidenavList");

  mainPart.innerHTML = "";
  sidePart.innerHTML = "";
  let elements = readFromDB()
  // console.log(elements);
  if (elements) {
    if (elements.length !== 0) {
      console.log("here");
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
    } // else
  } // if (elements)
}

function createCard(item) {
  const { title, desc, img, link } = item;
  const mainPart = document.querySelector("main");

  let card = document.createElement("a");
  let image = document.createElement("img");
  let header = document.createElement("h1");
  let paragraph = document.createElement("p");

  card.setAttribute("href", link);
  card.setAttribute("target", "_blank");
  card.classList.add("card");
  image.setAttribute("src", `./assets/icons/${img}`);
  image.setAttribute("alt", title);
  header.innerHTML = title;
  paragraph.innerHTML = desc;

  card.appendChild(image);
  card.appendChild(header);
  card.appendChild(paragraph);
  mainPart.appendChild(card);
}

function createSidebarCard(item) {
  const { id, title, desc } = item;
  const sidePart = document.querySelector("#sidenavList");

  let sideBarSection = document.createElement("section");
  let header = document.createElement("h1");
  let editBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");
  let paragraph = document.createElement("h3");
  let partOne = document.createElement("div");
  let partTwo = document.createElement("div");

  editBtn.onclick = () => editItem(item);
  editBtn.innerHTML = "Edit";
  deleteBtn.onclick = () => deleteItem(id);
  deleteBtn.innerHTML = "Delete";
  header.innerHTML = title;
  paragraph.innerHTML = desc;

  partTwo.appendChild(editBtn);
  partTwo.appendChild(deleteBtn);
  partOne.appendChild(header);
  partOne.appendChild(partTwo);
  sideBarSection.appendChild(partOne);
  sideBarSection.appendChild(paragraph);
  sidePart.appendChild(sideBarSection);
}


