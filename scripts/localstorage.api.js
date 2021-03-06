/*
  - App Functions:
    - saveToDB(item)
      Get the current data from localstorage
      generate an ID
      push the item to the list
      save to localStorage the new list

    - deleteFromDB(id)
      Get the current data from localStorage
      filter the current list, not returning the item
      save to localStorage the new list

    - editOnDB(item)
      Get the current data from localStorage
      map the current list updating the values for that item
      save to localStorage the new list

      - resetDB
      save to localStorage the "resetInfo" list
*/
const localStorageKey = "app-name-items";
const resetInfo = [
  {
    id: "0",
    link: "https://www.notion.so",
    icon: "home",
    title: "Notion",
    desc: "The all in one workspace",
  },
  {
    id: "1",
    link: "https://github.com/Diego-Lopes-Ferreira",
    icon: "home",
    title: "Github",
    desc: "The world's leading software development platform",
  },
  {
    id: "2",
    link: "https://web.whatsapp.com/",
    icon: "home",
    title: "WhatsApp",
    desc: "Now on PC",
  },
  {
    id: "3",
    link: "https://habitica.com/",
    icon: "home",
    title: "Habitica",
    desc: "Gamify your life",
  },
];

export function saveToDB(item) {
  let elements = readFromDB();
  if (elements) {
    item.id = generateId(item);
    elements.push(item);
  } else {
    elements = [item];
  }
  localStorage.setItem(localStorageKey, JSON.stringify(elements));
}

export function readFromDB() {
  const stored = localStorage.getItem(localStorageKey);
  let elements = JSON.parse(stored);
  return elements;
}

export function deleteFromDB(id) {
  let elements = readFromDB();
  let newElements = elements.filter((current) => {
    if (current.id !== id) {
      return current;
    }
  });
  localStorage.setItem(localStorageKey, JSON.stringify(newElements));
}

export function editOnDB(item) {
  let elements = readFromDB();
  let newElements = elements.map((current) => {
    if (current.id === String(item.id)) {
      return item;
    } else {
      return current;
    }
  });
  localStorage.setItem(localStorageKey, JSON.stringify(newElements));
}

export function resetDB() {
  localStorage.setItem(localStorageKey, JSON.stringify(resetInfo));
}

export function exportToUser() {
  const stored = localStorage.getItem(localStorageKey);
  const el = document.createElement("textarea");
  el.value = stored;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  alert('Save this into a .txt or .json file, so you can import later');
}

export function importFromUser(items) {
  localStorage.setItem(localStorageKey, items);
}

function generateId(items) {
  // Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
  const id = Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
  if (items.length > 0) {
    items.forEach((item) => {
      if (item === id) {
        generateId(items);
      }
    });
  }
  return id;
}
