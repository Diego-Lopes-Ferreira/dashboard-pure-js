/*
  [ ] saveItemToDB(item, folderId) exported
  [v] editItemOnDB(item)           exported
  [v] deleteItemFromDB(id)         exported
*/

import { readAllFromDB, saveOnDB, generateId } from './database.api';

export function saveItemToDB(item, folderId) {
  // item = { id: string '000000',link: string, icon: string, title: string }
  if (!item.id) {
    item.id = generateId();
  }
  const elements = readAllFromDB();
  let newElements = elements.map((folder) => {
    if (folder.id === folderId) {
      folder.items.push(item);
    } 
    return folder;
  });
  saveOnDB(newElements);
}

export function editItemOnDB(item, folderId) {
  // item = { id: string '000000',link: string, icon: string, title: string }
  deleteItemFromDB(item.id);
  saveItemToDB(item);
}

export function deleteItemFromDB(id) {
  // id = string '000000'
  const elements = readAllFromDB();
  let newElements = elements.map((folder) => {
      return folder.items.filter(item => item.id !== id);
  });
  saveOnDB(newElements);
}
