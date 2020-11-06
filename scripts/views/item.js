export default function createCard(item, where) {
  // item = { id: '000000',link: string, icon: string, title: string }
  /*
    <div class="item" href="link">
      <a href="link">
        <i>ICON</i>
        <h1>Name</h1>
      </a>
      <button>&#8901&#8901&#8901</button>
    </div>
  */
  const { id, link, icon, title } = item;
  let externalDiv = document.createElement("div");
  let anchor = document.createElement("a");
  let iconElement = document.createElement("i");
  let titleElement = document.createElement("h1");
  let btnEdit = document.createElement("button");

  externalDiv.classList.add('item');
  anchor.setAttribute("href", link);
  anchor.setAttribute("title", `Go to "${link}"`);
  iconElement.setAttribute("data-feather", icon);
  titleElement.innerHTML = title;
  btnEdit.innerHTML = '&#8901&#8901&#8901';
  btnEdit.setAttribute("title", `Edit ${title}`);
  btnEdit.onclick = () => {
    alert(`You are editing the:\n  title: ${title}\n  id: ${id}\n  link: ${link}\n  icon: ${icon}`)
  };

  anchor.appendChild(iconElement);
  anchor.appendChild(titleElement);
  externalDiv.appendChild(anchor);
  externalDiv.appendChild(btnEdit);
  where.appendChild(externalDiv);
}