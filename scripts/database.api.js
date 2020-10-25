/*
  [v] readAllFromDB()      exported
  [v] saveOnDB(elements)   exported
  [v] readFoldersFromDB()  exported
  [v] readItemsFromDB()    exported
  [v] readFolderFromDB(id) exported
  [v] importDB(db)         exported
  [v] exportDB()           exported
  [v] resetDB              exported
  [v] generateId           exported
*/
const localStorageKey = "app-name-items";
const resetInfo = [
  {
    id: "0000",
    name: "Folder 1",
    icon: "home",
    items: [
      {
        id: "0000",
        link: "https://www.notion.so",
        icon: "home",
        title: "Notion",
        desc: "The all in one workspace",
      },
      {
        id: "0001",
        link: "https://github.com/Diego-Lopes-Ferreira",
        icon: "home",
        title: "Github",
        desc: "The world's leading software development platform",
      },
      {
        id: "0003",
        link: "https://habitica.com/",
        icon: "home",
        title: "Habitica",
        desc: "Gamify your life",
      },
    ],
  },
];

export function readAllFromDB() {
  const stored = localStorage.getItem(localStorageKey);
  let elements = JSON.parse(stored);
  return elements;
}

export function saveOnDB(elements) {
  let toStore = JSON.stringify(elements);
  localStorage.setItem(localStorageKey, toStore);
}

export function readFoldersFromDB() {
  const elements = readAllFromDB();
  let folders = elements.map((folder) => {
    return { id: folder.id, name: folder.name, icon: folder.icon };
  });
  return folders;
}

export function readItemsFromDB() {
  const elements = readAllFromDB();
  let items = [];
  elements.forEach((folder) => {
    items = [...items, folder.items];
  });
  return items;
}

export function readFolderFromDB(id) {
  // id = string '000000'
  const elements = readAllFromDB();
  let itemsFromFolder = elements.map((folder) => {
    if (folder.id === id) {
      return folder.items;
    }
  });
  return itemsFromFolder;
}

export function importDB(db) {
  saveOnDB(db);
}

export function exportDB() {
  const elements = readAllFromDB();
  let stored = JSON.stringify(elements);
  return stored;
}

export function resetDB() {
  localStorage.setItem(localStorageKey, JSON.stringify(resetInfo));
}

export function generateId() {
  // Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
  let id = Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
  const elements = readAllFromDB();
  let idsList = [];
  elements.forEach((folder) => {
    idsList.push(folder.id);
    folder.items.forEach((item) => idsList.push(item.id));
  });
  if (idsList.includes(id)) {
    generateId();
  } else {
    return id;
  }
}
