(()=>{"use strict";function e(){const e=Math.floor(85*Math.random()),o=t[e],n=o.lastIndexOf('" ');let a=o.slice(0,n+1),i=o.slice(n+2);document.querySelector("header #quote").innerHTML=a,document.querySelector("header #who").innerHTML=i}const t=['"Frankly, my dear, I don\'t give a damn." Gone with the Wind',"\"I'm gonna make him an offer he can't refuse.\" The Godfather","\"Toto, I've a feeling we're not in Kansas anymore.\" The Wizard of Oz",'"Here\'s looking at you, kid." Casablanca','"Go ahead, make my day." Sudden Impact','"All right, Mr. DeMille, I\'m ready for my close-up." Sunset Boulevard','"May the Force be with you." Star Wars','"Fasten your seatbelts. It\'s going to be a bumpy night." All About Eve','"You talkin\' to me?" Taxi Driver','"What we\'ve got here is failure to communicate." Cool Hand Luke','"I love the smell of napalm in the morning." Apocalypse Now','"Love means never having to say you\'re sorry." Love Story','"The stuff that dreams are made of." The Maltese Falcon','"E.T. phone home." E.T. the Extra-Terrestrial','"They call me Mister Tibbs!" In the Heat of the Night','"Rosebud." Citizen Kane','"Made it, Ma! Top of the world!" White Heat',"\"I'm as mad as hell, and I'm not going to take this anymore!\" Network",'"Louis, I think this is the beginning of a beautiful friendship." Casablanca','"A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti." The Silence of the Lambs','"Bond. James Bond." Dr. No','"There\'s no place like home." The Wizard of Oz','"I am big! It\'s the pictures that got small." Sunset Boulevard','"Show me the money!" Jerry Maguire','"Why don\'t you come up sometime and see me?" She Done Him Wrong',"\"I'm walking here! I'm walking here!\" Midnight Cowboy","\"Play it, Sam. Play 'As Time Goes By.'\" Casablanca",'"You can\'t handle the truth!" A Few Good Men','"I want to be alone." Grand Hotel','"After all, tomorrow is another day!" Gone with the Wind','"Round up the usual suspects." Casablanca',"\"I'll have what she's having.\" When Harry Met Sally...",'"You know how to whistle, don\'t you, Steve? You just put your lips together and blow." To Have and Have Not','"You\'re gonna need a bigger boat." Jaws',"\"Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!\" Gold Hat",'"I\'ll be back." The Terminator','"Today, I consider myself the luckiest man on the face of the Earth." The Pride of the Yankees','"If you build it, he will come." Field of Dreams','"Mama always said life was like a box of chocolates. You never know what you\'re gonna get." Forrest Gump','"We rob banks." Bonnie and Clyde','"I see dead people." The Sixth Sense','"Stella! Hey, Stella!" A Streetcar Named Desire',"\"Oh, Jerry, don't let's ask for the moon. We have the stars.\" Now, Voyager",'"Shane. Shane. Come back!" Shane','"Well, nobody\'s perfect." Some Like It Hot',"\"It's alive! It's alive!\" Frankenstein",'"Houston, we have a problem." Apollo 13 (and literally every other realistic space movie)',"\"You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?\" Dirty Harry","\"You had me at 'hello.'\" Jerry Maguire",'"One morning I shot an elephant in my pajamas. How he got in my pajamas, I don\'t know." Animal Crackers','"There\'s no crying in baseball!" A League of Their Own','"A boy\'s best friend is his mother." Psycho','"Greed, for lack of a better word, is good." Wall Street','"Keep your friends close, but your enemies closer." The Godfather Part II','"As God is my witness, I\'ll never be hungry again." Gone with the Wind',"\"Well, here's another nice mess you've gotten me into!\" Sons of the Desert","\"Say 'hello' to my little friend!\" Scarface",'"What a dump." Beyond the Forest',"\"Mrs. Robinson, you're trying to seduce me. Aren't you?\" The Graduate",'"Elementary, my dear Watson." The Adventures of Sherlock Holmes','"Get your stinking paws off me, you damned dirty ape." Planet of the Apes','"Of all the gin joints in all the towns in all the world, she walks into mine." Casablanca','"Here\'s JOHNNY!" The Shining','"Is it safe?" Marathon Man',"\"Wait a minute, wait a minute. You ain't heard nothin' yet!\" The Jazz Singer",'"Mother of mercy, is this the end of Rico?" Little Caesar','"Forget it, Jake, it\'s Chinatown." Chinatown','"Hasta la vista, baby." Terminator 2: Judgment Day','"Soylent Green is people!" Soylent Green','"Open the pod bay doors, HAL." 2001: A Space Odyssey','"Yo, Adrian!" Rocky','"My precious." The Lord of the Rings: The Two Towers',"\"Sawyer, you're going out a youngster, but you've got to come back a star!\" 42nd Street",'"A martini. Shaken, not stirred." Goldfinger','"Who\'s on first?" The Naughty Nineties','"Life is a banquet, and most poor suckers are starving to death!" Auntie Mame','"I feel the need—the need for speed!" Top Gun','"Carpe diem. Seize the day, boys. Make your lives extraordinary." Dead Poets Society','"My mother thanks you. My father thanks you. My sister thanks you. And I thank you." Yankee Doodle Dandy','"Nobody puts Baby in a corner." Dirty Dancing','"I\'ll get you, my pretty, and your little dog too!" The Wizard of Oz','"I\'m the King of the World" Titanic','"I am your father" Darth Vader','"Hello there" Obi-Wan Kenobi','"All I am surrounded by is fear and dead men" Darth Vader','"You shall not ... PASS!" The Lord of the Rings: The Fellowship of the Ring'],o="app-name-items",n=[{id:"0",link:"https://www.notion.so",icon:"home",title:"Notion",desc:"The all in one workspace"},{id:"1",link:"https://github.com/Diego-Lopes-Ferreira",icon:"home",title:"Github",desc:"The world's leading software development platform"},{id:"2",link:"https://web.whatsapp.com/",icon:"home",title:"WhatsApp",desc:"Now on PC"},{id:"3",link:"https://habitica.com/",icon:"home",title:"Habitica",desc:"Gamify your life"}];function a(e){let t=i();t?(e.id=r(e),t.push(e)):t=[e],localStorage.setItem(o,JSON.stringify(t))}function i(){let e=localStorage.getItem(o);return JSON.parse(e)}function r(e){const t=Math.floor(8999*Math.random()+1e3).toString();return e.length>0&&e.forEach((o=>{o===t&&r(e)})),t}function l(){document.querySelector(".sidenav").style.width="0px";const e=document.querySelector(".modal");"50%"===e.style.top?e.style.top="-100%":(e.style.top="50%",e.style.transform="translate(50%, -50%)"),document.querySelector(".modal #id").value="",document.querySelector(".modal #title").value="",document.querySelector(".modal #description").value="",document.querySelector(".modal #icon").value="",document.querySelector(".modal #link").value=""}function d(){const e=document.querySelector(".sidenav");e.clientWidth>10?e.style.width="0px":e.style.width="300px"}function s(){const e=document.querySelector("main"),t=document.querySelector("#sidenavList");e.innerHTML="",t.innerHTML="";let o=i();if(o)if(0!==o.length)for(let e of o)c(e),u(e);else c({id:"0",link:"https://github.com/Diego-Lopes-Ferreira/dashboard-pure-js",img:"github.png",title:"Lost ?",desc:'Check the "Get Started" post on GitHub\nclick me'}),u({id:"0",title:"Click Add a thing",desc:"and start using"});feather.replace()}function c(e){const{title:t,desc:o,icon:n,link:a}=e,i=document.querySelector("main");let r=document.createElement("a"),l=document.createElement("i"),d=document.createElement("h1"),s=document.createElement("p");r.setAttribute("href",a),r.classList.add("card"),l.setAttribute("data-feather",n),d.innerHTML=t,s.innerHTML=o,r.appendChild(l),r.appendChild(d),r.appendChild(s),i.appendChild(r)}function u(e){const{id:t,title:n,desc:a}=e,r=document.querySelector("#sidenavList");let c=document.createElement("section"),u=document.createElement("h1"),h=document.createElement("button"),m=document.createElement("button"),y=document.createElement("h3"),f=document.createElement("div"),p=document.createElement("div");h.onclick=()=>function(e){l(),function(e){const{id:t,title:o,desc:n,icon:a,link:i}=e;document.querySelector(".modal #id").value=t,document.querySelector(".modal #title").value=o,document.querySelector(".modal #description").value=n,document.querySelector(".modal #icon").value=a,document.querySelector(".modal #link").value=i}(e)}(e),h.innerHTML="Edit",m.onclick=()=>function(e){!function(e){let t=i().filter((t=>{if(t.id!==e)return t}));localStorage.setItem(o,JSON.stringify(t))}(e),d(),s()}(t),m.innerHTML="Delete",u.innerHTML=n,y.innerHTML=a,p.appendChild(h),p.appendChild(m),f.appendChild(u),f.appendChild(p),c.appendChild(f),c.appendChild(y),r.appendChild(c)}e(),window.addEventListener("focus",e),document.querySelector("#changeQuote").onclick=e,document.querySelector("#openMenu").onclick=d,document.querySelector("#closeMenu").onclick=d,document.querySelector("#reset").onclick=function(){confirm("Sure about that?")&&(localStorage.setItem(o,JSON.stringify(n)),s())},document.querySelector("#addShortcut").onclick=l,document.querySelector("#saveModal").onclick=function(){let e={id:document.querySelector(".modal #id").value,title:document.querySelector(".modal #title").value,desc:document.querySelector(".modal #description").value,icon:document.querySelector(".modal #icon").value,link:document.querySelector(".modal #link").value};""===e.id?a(e):function(e){let t=i().map((t=>t.id===String(e.id)?e:t));localStorage.setItem(o,JSON.stringify(t))}(e),l(),d(),s()},document.querySelector("#closeModal").onclick=l,s()})();