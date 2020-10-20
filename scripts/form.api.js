/*
    
  - readForm()
    Extract all data from the inputs
    Returns an object: {Title, Description, icon, Link}

    - clearForm()
    Fill all data from the inputs with an empty string

  - fillForm(item) {
    Fill all data from the inputs with the item info
*/

export function readForm() {
  const id = document.querySelector('.modal #id').value;
  const title = document.querySelector('.modal #title').value;
  const desc = document.querySelector('.modal #description').value;
  const icon = document.querySelector('.modal #icon').value;
  const link = document.querySelector('.modal #link').value;
  return { id: id, title: title, desc: desc, icon: icon, link: link };
}
export function clearForm() {
  document.querySelector('.modal #id').value = '';
  document.querySelector('.modal #title').value = '';
  document.querySelector('.modal #description').value = '';
  document.querySelector('.modal #icon').value = '';
  document.querySelector('.modal #link').value = '';
}
export function fillForm(item) {
  const { id, title, desc, icon, link } = item;
  document.querySelector('.modal #id').value = id;
  document.querySelector('.modal #title').value = title;
  document.querySelector('.modal #description').value = desc;
  document.querySelector('.modal #icon').value = icon;
  document.querySelector('.modal #link').value = link;
}