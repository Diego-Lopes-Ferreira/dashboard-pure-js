// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../scripts/quotes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateQuote;

/* 
  Table of contents
  - App Functions
      - generateQuote()
        Select a random quote from the movieQuotes
        fill the correct spots with the quote and author
  
  - RawInfo
    - const movieQuotes
*/
function generateQuote() {
  var randomNumber = Math.floor(Math.random() * 85);
  var completeQuote = movieQuotes[randomNumber];
  var last = completeQuote.lastIndexOf('" '); // "May the Force be with you." Star Wars

  var quote = completeQuote.slice(0, last + 1); // "May the Force be with you."

  var who = completeQuote.slice(last + 2); // Star Wars

  document.querySelector('header #quote').innerHTML = quote;
  document.querySelector('header #who').innerHTML = who;
}

var movieQuotes = ['"Frankly, my dear, I don\'t give a damn." Gone with the Wind', '"I\'m gonna make him an offer he can\'t refuse." The Godfather', '"Toto, I\'ve a feeling we\'re not in Kansas anymore." The Wizard of Oz', '"Here\'s looking at you, kid." Casablanca', '"Go ahead, make my day." Sudden Impact', '"All right, Mr. DeMille, I\'m ready for my close-up." Sunset Boulevard', '"May the Force be with you." Star Wars', '"Fasten your seatbelts. It\'s going to be a bumpy night." All About Eve', '"You talkin\' to me?" Taxi Driver', '"What we\'ve got here is failure to communicate." Cool Hand Luke', '"I love the smell of napalm in the morning." Apocalypse Now', '"Love means never having to say you\'re sorry." Love Story', '"The stuff that dreams are made of." The Maltese Falcon', '"E.T. phone home." E.T. the Extra-Terrestrial', '"They call me Mister Tibbs!" In the Heat of the Night', '"Rosebud." Citizen Kane', '"Made it, Ma! Top of the world!" White Heat', '"I\'m as mad as hell, and I\'m not going to take this anymore!" Network', '"Louis, I think this is the beginning of a beautiful friendship." Casablanca', '"A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti." The Silence of the Lambs', '"Bond. James Bond." Dr. No', '"There\'s no place like home." The Wizard of Oz', '"I am big! It\'s the pictures that got small." Sunset Boulevard', '"Show me the money!" Jerry Maguire', '"Why don\'t you come up sometime and see me?" She Done Him Wrong', '"I\'m walking here! I\'m walking here!" Midnight Cowboy', '"Play it, Sam. Play \'As Time Goes By.\'" Casablanca', '"You can\'t handle the truth!" A Few Good Men', '"I want to be alone." Grand Hotel', '"After all, tomorrow is another day!" Gone with the Wind', '"Round up the usual suspects." Casablanca', '"I\'ll have what she\'s having." When Harry Met Sally...', '"You know how to whistle, don\'t you, Steve? You just put your lips together and blow." To Have and Have Not', '"You\'re gonna need a bigger boat." Jaws', '"Badges? We ain\'t got no badges! We don\'t need no badges! I don\'t have to show you any stinking badges!" Gold Hat', '"I\'ll be back." The Terminator', '"Today, I consider myself the luckiest man on the face of the Earth." The Pride of the Yankees', '"If you build it, he will come." Field of Dreams', '"Mama always said life was like a box of chocolates. You never know what you\'re gonna get." Forrest Gump', '"We rob banks." Bonnie and Clyde', '"I see dead people." The Sixth Sense', '"Stella! Hey, Stella!" A Streetcar Named Desire', '"Oh, Jerry, don\'t let\'s ask for the moon. We have the stars." Now, Voyager', '"Shane. Shane. Come back!" Shane', '"Well, nobody\'s perfect." Some Like It Hot', '"It\'s alive! It\'s alive!" Frankenstein', '"Houston, we have a problem." Apollo 13 (and literally every other realistic space movie)', '"You\'ve got to ask yourself one question: \'Do I feel lucky?\' Well, do ya, punk?" Dirty Harry', '"You had me at \'hello.\'" Jerry Maguire', '"One morning I shot an elephant in my pajamas. How he got in my pajamas, I don\'t know." Animal Crackers', '"There\'s no crying in baseball!" A League of Their Own', '"A boy\'s best friend is his mother." Psycho', '"Greed, for lack of a better word, is good." Wall Street', '"Keep your friends close, but your enemies closer." The Godfather Part II', '"As God is my witness, I\'ll never be hungry again." Gone with the Wind', '"Well, here\'s another nice mess you\'ve gotten me into!" Sons of the Desert', '"Say \'hello\' to my little friend!" Scarface', '"What a dump." Beyond the Forest', '"Mrs. Robinson, you\'re trying to seduce me. Aren\'t you?" The Graduate', '"Elementary, my dear Watson." The Adventures of Sherlock Holmes', '"Get your stinking paws off me, you damned dirty ape." Planet of the Apes', '"Of all the gin joints in all the towns in all the world, she walks into mine." Casablanca', '"Here\'s JOHNNY!" The Shining', '"Is it safe?" Marathon Man', '"Wait a minute, wait a minute. You ain\'t heard nothin\' yet!" The Jazz Singer', '"Mother of mercy, is this the end of Rico?" Little Caesar', '"Forget it, Jake, it\'s Chinatown." Chinatown', '"Hasta la vista, baby." Terminator 2: Judgment Day', '"Soylent Green is people!" Soylent Green', '"Open the pod bay doors, HAL." 2001: A Space Odyssey', '"Yo, Adrian!" Rocky', '"My precious." The Lord of the Rings: The Two Towers', '"Sawyer, you\'re going out a youngster, but you\'ve got to come back a star!" 42nd Street', '"A martini. Shaken, not stirred." Goldfinger', '"Who\'s on first?" The Naughty Nineties', '"Life is a banquet, and most poor suckers are starving to death!" Auntie Mame', '"I feel the need—the need for speed!" Top Gun', '"Carpe diem. Seize the day, boys. Make your lives extraordinary." Dead Poets Society', '"My mother thanks you. My father thanks you. My sister thanks you. And I thank you." Yankee Doodle Dandy', '"Nobody puts Baby in a corner." Dirty Dancing', '"I\'ll get you, my pretty, and your little dog too!" The Wizard of Oz', '"I\'m the King of the World" Titanic', '"I am your father" Darth Vader', '"Hello there" Obi-Wan Kenobi', '"All I am surrounded by is fear and dead men" Darth Vader', '"You shall not ... PASS!" The Lord of the Rings: The Fellowship of the Ring'];
},{}],"api/database.api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readAllFromDB = readAllFromDB;
exports.saveOnDB = saveOnDB;
exports.readFoldersFromDB = readFoldersFromDB;
exports.readItemsFromDB = readItemsFromDB;
exports.readFolderFromDB = readFolderFromDB;
exports.readCurrentFolderFromDB = readCurrentFolderFromDB;
exports.setCurrentFolderOnDB = setCurrentFolderOnDB;
exports.importDB = importDB;
exports.exportDB = exportDB;
exports.resetDB = resetDB;
exports.generateId = generateId;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
  [v] readAllFromDB()         exported
  [v] saveOnDB(elements)      exported
  [v] readFoldersFromDB()     exported
  [v] readItemsFromDB()       exported
  [v] readFolderFromDB(id)    exported
  [v] readCurrentFolderFromDB exported
  [v] setCurrentFolderOnDB    exported
  [v] importDB(db)            exported
  [v] exportDB()              exported
  [v] resetDB                 exported
  [v] generateId              exported
*/
var itemsLocalStorageKey = "app-name-items";
var currentFolderStorageKey = "app-name-current-folder";
var resetCurrentFolderInfo = "0000";
var resetInfo = [{
  id: "0000",
  name: "The folder name",
  icon: "home",
  items: [{
    id: "0000",
    link: "https://www.notion.so",
    icon: "home",
    title: "Notion",
    desc: "The all in one workspace"
  }, {
    id: "0001",
    link: "https://github.com/Diego-Lopes-Ferreira",
    icon: "home",
    title: "Github",
    desc: "The world's leading software development platform"
  }, {
    id: "0003",
    link: "https://habitica.com/",
    icon: "home",
    title: "Habitica",
    desc: "Gamify your life"
  }]
}];

function readAllFromDB() {
  var stored = localStorage.getItem(itemsLocalStorageKey);
  var elements = JSON.parse(stored);
  return elements;
}

function saveOnDB(elements) {
  var toStore = JSON.stringify(elements);
  localStorage.setItem(itemsLocalStorageKey, toStore);
}

function readFoldersFromDB() {
  var elements = readAllFromDB();
  var folders = elements.map(function (folder) {
    return {
      id: folder.id,
      name: folder.name,
      icon: folder.icon
    };
  });
  return folders;
}

function readItemsFromDB() {
  var elements = readAllFromDB();
  var items = [];
  elements.forEach(function (folder) {
    items = [].concat(_toConsumableArray(items), [folder.items]);
  });
  return items;
}

function readFolderFromDB(id) {
  // id = string '000000'
  var elements = readAllFromDB();
  var itemsFromFolder = elements.map(function (folder) {
    if (folder.id === id) {
      return folder.items;
    }
  });
  return itemsFromFolder;
}

function readCurrentFolderFromDB() {
  var stored = localStorage.getItem(currentFolderStorageKey);
  return stored;
}

function setCurrentFolderOnDB(folderId) {
  if (readCurrentFolderFromDB() !== folderId) {
    localStorage.setItem(currentFolderStorageKey, folderId);
  }
}

function importDB(db) {
  saveOnDB(db);
}

function exportDB() {
  var elements = readAllFromDB();
  var stored = JSON.stringify(elements);
  return stored;
}

function resetDB() {
  localStorage.setItem(itemsLocalStorageKey, JSON.stringify(resetInfo));
  localStorage.setItem(currentFolderStorageKey, resetCurrentFolderInfo);
}

function generateId() {
  // Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
  var id = Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
  var elements = readAllFromDB();
  var idsList = [];
  elements.forEach(function (folder) {
    idsList.push(folder.id);
    folder.items.forEach(function (item) {
      return idsList.push(item.id);
    });
  });

  if (idsList.includes(id)) {
    generateId();
  } else {
    return id;
  }
}
},{}],"views/item.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createCard;

function createCard(item, where) {
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
  var id = item.id,
      link = item.link,
      icon = item.icon,
      title = item.title;
  var externalDiv = document.createElement("div");
  var anchor = document.createElement("a");
  var iconElement = document.createElement("i");
  var titleElement = document.createElement("h1");
  var btnEdit = document.createElement("button");
  externalDiv.classList.add('item');
  anchor.setAttribute("href", link);
  iconElement.setAttribute("data-feather", icon);
  titleElement.innerHTML = title;
  btnEdit.innerHTML = '&#8901&#8901&#8901';

  btnEdit.onclick = function () {
    alert("You are editing the:\n  title: ".concat(title, "\n  id: ").concat(id, "\n  link: ").concat(link, "\n  icon: ").concat(icon));
  };

  anchor.appendChild(iconElement);
  anchor.appendChild(titleElement);
  externalDiv.appendChild(anchor);
  externalDiv.appendChild(btnEdit);
  where.appendChild(externalDiv);
}
},{}],"views/sidebarFolder.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSidebarCard;

function createSidebarCard(item, where) {
  console.log(item);
  var id = item.id,
      name = item.name,
      icon = item.icon;
  /*
    <button>
      <icon></icon>
      <h1></h1>
    </button>
  */
  // const sidePart = document.querySelector("#sidenavList");

  var sideBarButton = document.createElement("button");
  var header = document.createElement("h1");
  var iconElement = document.createElement("i");
  var btnEdit = document.createElement("button");
  iconElement.setAttribute("data-feather", icon);
  header.innerHTML = name;
  btnEdit.innerHTML = '&#8901&#8901&#8901';

  btnEdit.onclick = function () {
    alert("You are editing the:\n  title: ".concat(name, "\n  id: ").concat(id, "\n  icon: ").concat(icon));
  };

  sideBarButton.classList.add('folder-card');
  sideBarButton.appendChild(iconElement);
  sideBarButton.appendChild(header);
  sideBarButton.append(btnEdit);
  where.appendChild(sideBarButton);
}
},{}],"views/views.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderCards;

var _database = require("../api/database.api");

var _item = _interopRequireDefault(require("./item"));

var _sidebarFolder = _interopRequireDefault(require("./sidebarFolder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderCards() {
  var mainPart = document.querySelector(".list-of-items");
  var sidePart = document.querySelector("#sidenavList");
  mainPart.innerHTML = "";
  sidePart.innerHTML = "";
  var folders = (0, _database.readAllFromDB)();
  var currentFolderId = (0, _database.readCurrentFolderFromDB)();
  console.log(folders);
  console.log(currentFolderId);

  if (folders) {
    if (folders.length !== 0) {
      folders.forEach(function (folder) {
        (0, _sidebarFolder.default)(folder, sidePart);

        if (folder.id === currentFolderId) {
          var items = folder.items;
          items.forEach(function (item) {
            (0, _item.default)(item, mainPart);
          });
        }
      });
    } else {
      // (elements.length)
      (0, _item.default)({
        id: "0",
        link: "https://github.com/Diego-Lopes-Ferreira/dashboard-pure-js",
        icon: "github",
        title: "Lost ?"
      });
    }
  } // else (folders)


  feather.replace();
}
},{"../api/database.api":"api/database.api.js","./item":"views/item.js","./sidebarFolder":"views/sidebarFolder.js"}],"../scripts/api/form.api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readForm = readForm;
exports.clearForm = clearForm;
exports.fillForm = fillForm;
exports.readImportTextarea = readImportTextarea;

/*
    
  - readForm()
    Extract all data from the inputs
    Returns an object: {Title, Description, icon, Link}

    - clearForm()
    Fill all data from the inputs with an empty string

  - fillForm(item) {
    Fill all data from the inputs with the item info
*/
function readForm() {
  var id = document.querySelector('.modal #id').value;
  var title = document.querySelector('.modal #title').value;
  var desc = document.querySelector('.modal #description').value;
  var icon = document.querySelector('.modal #icon').value;
  var link = document.querySelector('.modal #link').value;
  return {
    id: id,
    title: title,
    desc: desc,
    icon: icon,
    link: link
  };
}

function clearForm() {
  document.querySelector('.modal #id').value = '';
  document.querySelector('.modal #title').value = '';
  document.querySelector('.modal #description').value = '';
  document.querySelector('.modal #icon').value = '';
  document.querySelector('.modal #link').value = '';
}

function fillForm(item) {
  var id = item.id,
      title = item.title,
      desc = item.desc,
      icon = item.icon,
      link = item.link;
  document.querySelector('.modal #id').value = id;
  document.querySelector('.modal #title').value = title;
  document.querySelector('.modal #description').value = desc;
  document.querySelector('.modal #icon').value = icon;
  document.querySelector('.modal #link').value = link;
}

function readImportTextarea() {
  var data = document.querySelector('.textarea-modal #info').value;
  console.log(data);
  return data;
}
},{}],"../scripts/handlers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleToggleModal = handleToggleModal;
exports.handleToggleTextareaModal = handleToggleTextareaModal;
exports.handleToggleMenu = handleToggleMenu;
exports.handleCloseMenu = handleCloseMenu;
exports.handleSave = handleSave;
exports.handleDeleteItem = handleDeleteItem;
exports.handleEditItem = handleEditItem;
exports.handleReset = handleReset;
exports.handleExportToUser = handleExportToUser;
exports.handleImportFromUser = handleImportFromUser;

var _database = require("./api/database.api");

var _form = require("./api/form.api");

var _views = _interopRequireDefault(require("./views/views"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  Table of Contents
  - User Functions
    - handleToggleModal()
      Change the top property of the modal (sends it up or down)

    - handleToggleMenu()
      Change the width of the div#sidenav to 0 or 250
  
    - handleCloseMenu()
      Change the width of the div#sidenav to 0
  
    - handleSave()
      if the item exists:
        edit on DB what is in the form
      else:
        create item on database
      then: toggleModal(closing), toggleMenu(closing) and renderCards

    - handleDeleteItem(id)
      call the deleteFromDB() function
      then: toggleModal(closing), toggleMenu(closing) and renderCards

    - handleEditItem(item)
      toggleModal and fill the form with the item

    - handleReset()
      calls resetDB() and renderCards
*/
function handleToggleModal() {
  handleCloseMenu();
  var modal = document.querySelector(".modal");

  if (modal.style.top === "50%") {
    modal.style.top = "-100%";
  } else {
    modal.style.top = "50%";
    modal.style.transform = "translate(50%, -50%)";
  } // else (top distance)


  (0, _form.clearForm)();
}

function handleToggleTextareaModal() {
  // handleCloseMenu();
  var modal = document.querySelector(".textarea-modal");

  if (modal.style.top === "50%") {
    modal.style.top = "-100%";
  } else {
    modal.style.top = "50%";
    modal.style.transform = "translate(50%, -50%)";
  } // else (top distance)

}

function handleToggleMenu() {
  var sideNav = document.querySelector(".sidenav");

  if (sideNav.clientWidth > 10) {
    sideNav.style.width = "0px";
  } else {
    sideNav.style.width = "300px";
  } // else (width)

}

function handleCloseMenu() {
  var sideNav = document.querySelector(".sidenav");
  sideNav.style.width = "0px";
}

function handleSave() {
  var item = (0, _form.readForm)();

  if (item.id === "") {
    (0, _database.saveToDB)(item);
  } else {
    (0, _database.editOnDB)(item);
  }

  handleToggleModal();
  handleToggleMenu();
  (0, _views.default)();
}

function handleDeleteItem(id) {
  (0, _database.deleteFromDB)(id);
  handleToggleMenu();
  (0, _views.default)();
}

function handleEditItem(item) {
  handleToggleModal();
  (0, _form.fillForm)(item);
}

function handleReset() {
  if (confirm("Sure about that?")) {
    (0, _database.resetDB)();
    (0, _views.default)();
  }
}

function handleExportToUser() {
  // handleToggleMenu();
  (0, _database.exportToUser)();
}

function handleImportFromUser() {
  var items = (0, _form.readImportTextarea)();
  (0, _database.importFromUser)(items);
  handleToggleTextareaModal();
  (0, _views.default)();
}
},{"./api/database.api":"api/database.api.js","./api/form.api":"../scripts/api/form.api.js","./views/views":"views/views.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _quotes = _interopRequireDefault(require("./quotes"));

var _views = _interopRequireDefault(require("./views/views"));

var _handlers = require("./handlers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _quotes.default)();
window.addEventListener("focus", _quotes.default);
document.querySelector("#changeQuote").onclick = _quotes.default;
document.querySelector("#reset").onclick = _handlers.handleReset;
(0, _views.default)(); // document.querySelector("#openMenu").onclick = handleToggleMenu;
// document.querySelector("#closeMenu").onclick = handleToggleMenu;
// document.querySelector("#addShortcut").onclick = handleToggleModal;
// document.querySelector("#saveModal").onclick = handleSave;
// document.querySelector("#closeModal").onclick = handleToggleModal;
// document.querySelector("#import").onclick = handleExportToUser;
// document.querySelector("#export").onclick = handleToggleTextareaModal;
// document.querySelector("#closeTextareaModal").onclick = handleToggleTextareaModal;
// document.querySelector("#saveTextareaModal").onclick = handleImportFromUser;
// document.querySelector("#wrapper").onclick = handleCloseMenu;
},{"./quotes":"../scripts/quotes.js","./views/views":"views/views.js","./handlers":"../scripts/handlers.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56233" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/index.js.map