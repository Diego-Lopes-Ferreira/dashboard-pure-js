export default function createSidebarCard(item, where) {
  console.log(item)
  const { id, name, icon } = item;
  /*
    <button>
      <icon></icon>
      <h1></h1>
    </button>
  */
  // const sidePart = document.querySelector("#sidenavList");

  let sideBarButton = document.createElement("button");
  let header = document.createElement("h1");
  let iconElement = document.createElement("i");
  let btnEdit = document.createElement("button");


  iconElement.setAttribute("data-feather", icon);

  header.innerHTML = name;

  btnEdit.innerHTML = '&#8901&#8901&#8901';
  btnEdit.onclick = () => {
    alert(`You are editing the:\n  title: ${name}\n  id: ${id}\n  icon: ${icon}`)
  };

  sideBarButton.classList.add('folder-card');
  sideBarButton.appendChild(iconElement);
  sideBarButton.appendChild(header);
  sideBarButton.append(btnEdit);
  where.appendChild(sideBarButton);
}
