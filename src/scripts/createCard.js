const mainPart = document.querySelector('main');
//console.log(mainPart.innerHTML);

export default function createCard(item) {
  const { link, img, title, description } = item;
  //console.log(link);
  //console.log(img);
  //console.log(title);
  //console.log(description);

  let card = document.createElement("a");
  card.setAttribute("href", link);
  card.setAttribute("target", "blank");
  card.classList.add("card");

  let image = document.createElement("img");
  image.setAttribute("src", `./assets/icons/${img}`);
  image.setAttribute("alt", title);

  let h1 = document.createElement("h1");
  h1.innerHTML = title;

  let paragraph = document.createElement("p");
  paragraph.innerHTML = description;

  card.appendChild(image);
  card.appendChild(h1);
  card.appendChild(paragraph);

  mainPart.appendChild(card);
}
