/*
  - App Functions:

    [v] saveFolderToDB(folder) exported
    [v] editFolderOnDB(folder) exported
    [v] deleteFolderOnDB(id)   exported
*/

import { readAllFromDB, saveOnDB, generateId } from './database.api';


export function saveFolderToDB(folder) {
  // folder = { icon: string, name: string, items: item[] }
  if (!folder.id) {
    folder.id = generateId();
  }
  var elements = readAllFromDB();
  elements.push(folder);
  saveOnDB(elements)
}
export function editFolderOnDB(folder) {
  // folder = { id: string '000000', icon: string, name: string, items: item[] }
  deleteFolderOnDB(folder.id);
  saveFolderToDB(folder);
}
export function deleteFolderOnDB(id) {
  // id = string '000000'
  const elements = readAllFromDB();
  let newElements = elements.filter(folder => folder.id !== id);
  saveOnDB(newElements);
}