export async function saveToDB(item) {
  let list = localStorage.getItem('diego-items');
  let elements = JSON.parse(list);
  console.log(elements);
  elements.push(item);
  console.log(elements);
  localStorage.setItem('diego-items', JSON.stringify(elements));
}
export async function resetDB(list) {

  list = [
    {
      link: "https://www.notion.so",
      img: "notion.png",
      title: "Notion",
      description: "The all in one workspace",
    },
    {
      link: "https://github.com/Diego-Lopes-Ferreira",
      img: "github.png",
      title: "Github",
      description: "The world's leading software development platform",
    },
    {
      link: "https://web.whatsapp.com/",
      img: "whatsapp.png",
      title: "WhatsApp",
      description: "Now on PC",
    },
    {
      link: "https://habitica.com/",
      img: "habitica.jpg",
      title: "Habitica",
      description: "Gamify your life",
    },
  ]
  localStorage.setItem('diego-items', JSON.stringify(list));
}
