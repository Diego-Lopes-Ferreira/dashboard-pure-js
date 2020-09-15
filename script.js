/*

  Table of contents
  - Selectors
    - Buttons: [openMenu, closeMenu, reset, add, save, close]

  - RawInfo
    - localStorageKey
    - resetInfo

  - logic
    - renderCards();

  - User Functions
    - toggleModal()
      Change the top property of the modal
    - toggleMenu()
      Change the width of the div#sidenav to 0 or 250
    - save()
      saveToDB(readForm())
      toggleModal()
      toggleMenu()
      renderCards()
    - deleteItem(id)
      deleteFromDB(id)
      toggleMenu()
      renderCards()
    - editItem(item)
      toggleModal()
      fillForm(item)
    - reset()
      resetDB()
      renderCards()
  - App Functions:
    - saveToDB(item)
      Get the current data from localstorage
      if the item does not have ID
        push the item to the list
        save to localStorage the new list
      else
        editOnDB()
    - deleteFromDB(id)
      Get the current data from localStorage
      filter the current list, not returning the item
      save to localStorage the new list
    - editOnDB(item)
      Get the current data from localStorage
      filter the current list
      save to localStorage the new list
    - resetDB
      save to localStorage the resetInfo list
    - readForm()
      Extract all data from the inputs
      Returns an object: {Title, Description, Image, Link}
    - clearForm()
      Fill all data from the inputs with an empty string
      - fillForm(item) {
        Fill all data from the inputs with the item info

  - REACT?
    - createCard(item)
      creates the html components
      set the atributes and innerHTML
      append each child to the component parent
      find the main part
      append the component parent to the main part
    - createSidebarCard(item)
      creates the html components
      set the atributes and innerHTML
      append each child to the component parent
      find the side part
      append the component parent to the side part
    - renderCards()
      find the main part
      get the data from localStorage
      loop for each element creating a card and sidebarcard
*/


// Selectors
document.querySelector('#openMenu').onclick = toggleMenu;
document.querySelector('#closeMenu').onclick = toggleMenu;
document.querySelector('#reset').onclick = reset;
document.querySelector('#addShortcut').onclick = toggleModal;
document.querySelector('#saveModal').onclick = save;
document.querySelector('#closeModal').onclick = toggleModal;

// RawInfo
const localStorageKey = 'app-name-items';
const resetInfo = [
  {
    id: '0',
    link: 'https://www.notion.so',
    img: 'notion.png',
    title: 'Notion',
    desc: 'The all in one workspace',
  },
  {
    id: '1',
    link: 'https://github.com/Diego-Lopes-Ferreira',
    img: 'github.png',
    title: 'Github',
    desc: 'The world\'s leading software development platform',
  },
  {
    id: '2',
    link: 'https://web.whatsapp.com/',
    img: 'whatsapp.png',
    title: 'WhatsApp',
    desc: 'Now on PC',
  },
  {
    id: '3',
    link: 'https://habitica.com/',
    img: 'habitica.jpg',
    title: 'Habitica',
    desc: 'Gamify your life',
  },
];

// Logic
renderCards();

// User Functions
function toggleModal() {
  const modal = document.querySelector('.modal');
  if (modal.style.top === '50%') {
    modal.style.top = '-100%';
  } else {
    modal.style.top = '50%';
    modal.style.transform = 'translate(50%, -50%)'
  }
  clearForm();
}
function toggleMenu() {
  const sideNav = document.querySelector('.sidenav');
  if (sideNav.clientWidth > 0) {
    sideNav.style.width = '0px';
  } else {
    sideNav.style.width = '250px';
  }
}
function save() {
  let item = readForm();
  if (item.id === '') {
    saveToDB(item);
  } else {
    editOnDB(item);
  }
  toggleModal();
  toggleMenu();
  renderCards();
}
function deleteItem(id) {
  deleteFromDB(id);
  toggleMenu();
  renderCards();
}
function editItem(item) {
  toggleModal();
  fillForm(item);
}
function reset() {
  resetDB();
  renderCards();
}

// App Functions
function saveToDB(item) {
  let list = localStorage.getItem(localStorageKey);
  let elements = JSON.parse(list);
  item.id = Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
  elements.push(item);
  localStorage.setItem(localStorageKey, JSON.stringify(elements));
}
function deleteFromDB(id) {
  let list = localStorage.getItem(localStorageKey);
  let elements = JSON.parse(list);
  let newElements = elements.filter(current => {
    if (current.id !== id) {
      return current;
    }
  })
  localStorage.setItem(localStorageKey, JSON.stringify(newElements));
}
function editOnDB(item) {
  let list = localStorage.getItem(localStorageKey);
  let elements = JSON.parse(list);
  let newElements = elements.map(current => {
    console.log(current, item)
    if (current.id === String(item.id)) {
      console.log('if')
      return item;
    } else {
      console.log('else')
      return current;
    }
  });
  localStorage.setItem(localStorageKey, JSON.stringify(newElements));
}
function resetDB() {
  localStorage.setItem(localStorageKey, JSON.stringify(resetInfo));
}
function readForm() {
  const id = document.querySelector('.modal #id').value;
  const title = document.querySelector('.modal #title').value;
  const desc = document.querySelector('.modal #description').value;
  const img = document.querySelector('.modal #image').value;
  const link = document.querySelector('.modal #link').value;
  return { id: id, title: title, desc: desc, img: img, link: link };
}
function clearForm() {
  document.querySelector('.modal #id').value = '';
  document.querySelector('.modal #title').value = '';
  document.querySelector('.modal #description').value = '';
  document.querySelector('.modal #image').value = '';
  document.querySelector('.modal #link').value = '';
}
function fillForm(item) {
  const { id, title, desc, img, link } = item;
  document.querySelector('.modal #id').value = id;
  document.querySelector('.modal #title').value = title;
  document.querySelector('.modal #description').value = desc;
  document.querySelector('.modal #image').value = img;
  document.querySelector('.modal #link').value = link;
}

// Components
function createCard(item) {
  const { title, desc, img, link } = item;
  const mainPart = document.querySelector('main');

  let card = document.createElement('a');
  let image = document.createElement('img');
  let header = document.createElement('h1');
  let paragraph = document.createElement('p');

  card.setAttribute('href', link);
  card.setAttribute('target', 'blank');
  card.classList.add('card');
  image.setAttribute('src', `./assets/icons/${img}`);
  image.setAttribute('alt', title);
  header.innerHTML = title;
  paragraph.innerHTML = desc;

  card.appendChild(image);
  card.appendChild(header);
  card.appendChild(paragraph);
  mainPart.appendChild(card);
}
function createSidebarCard(item) {
  const { id, title, desc } = item;
  const sidePart = document.querySelector('#sidenavList');

  let sideBarSection = document.createElement('section');
  let header = document.createElement('h1');
  let editBtn = document.createElement('button');
  let deleteBtn = document.createElement('button');
  let paragraph = document.createElement('h3');
  let partOne = document.createElement('div');
  let partTwo = document.createElement('div');

  editBtn.onclick = () => editItem(item);
  editBtn.innerHTML = 'Edit';
  deleteBtn.onclick = () => deleteItem(id);
  deleteBtn.innerHTML = 'Delete';
  header.innerHTML = title;
  paragraph.innerHTML = desc;

  partTwo.appendChild(editBtn);
  partTwo.appendChild(deleteBtn);
  partOne.appendChild(header)
  partOne.appendChild(partTwo)
  sideBarSection.appendChild(partOne);
  sideBarSection.appendChild(paragraph);
  sidePart.appendChild(sideBarSection);
}
function renderCards() {
  const mainPart = document.querySelector('main');
  const sidePart = document.querySelector('#sidenavList');

  mainPart.innerHTML = '';
  sidePart.innerHTML = '';
  let list = localStorage.getItem(localStorageKey);
  let elements = JSON.parse(list);
  for (let element of elements) {
    createCard(element);
    createSidebarCard(element);
  }
}