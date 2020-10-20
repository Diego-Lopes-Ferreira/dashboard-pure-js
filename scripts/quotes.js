/* 
  Table of contents
  - App Functions
      - generateQuote()
        Select a random quote from the movieQuotes
        fill the correct spots with the quote and author
  
  - RawInfo
    - const movieQuotes
*/

export default function generateQuote() {
  const randomNumber = Math.floor(Math.random() * 85);
  
  const completeQuote = movieQuotes[randomNumber];

  const last = completeQuote.lastIndexOf('" ');
  // "May the Force be with you." Star Wars
  let quote = completeQuote.slice(0, last + 1);
  // "May the Force be with you."
  let who = completeQuote.slice(last + 2);
  // Star Wars

  document.querySelector('header #quote').innerHTML = quote;
  document.querySelector('header #who').innerHTML = who;
}

const movieQuotes = [
  '"Frankly, my dear, I don\'t give a damn." Gone with the Wind',
  '"I\'m gonna make him an offer he can\'t refuse." The Godfather',
  '"Toto, I\'ve a feeling we\'re not in Kansas anymore." The Wizard of Oz',
  '"Here\'s looking at you, kid." Casablanca',
  '"Go ahead, make my day." Sudden Impact',
  '"All right, Mr. DeMille, I\'m ready for my close-up." Sunset Boulevard',
  '"May the Force be with you." Star Wars',
  '"Fasten your seatbelts. It\'s going to be a bumpy night." All About Eve',
  '"You talkin\' to me?" Taxi Driver',
  '"What we\'ve got here is failure to communicate." Cool Hand Luke',
  '"I love the smell of napalm in the morning." Apocalypse Now',
  '"Love means never having to say you\'re sorry." Love Story',
  '"The stuff that dreams are made of." The Maltese Falcon',
  '"E.T. phone home." E.T. the Extra-Terrestrial',
  '"They call me Mister Tibbs!" In the Heat of the Night',
  '"Rosebud." Citizen Kane',
  '"Made it, Ma! Top of the world!" White Heat',
  '"I\'m as mad as hell, and I\'m not going to take this anymore!" Network',
  '"Louis, I think this is the beginning of a beautiful friendship." Casablanca',
  '"A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti." The Silence of the Lambs',
  '"Bond. James Bond." Dr. No',
  '"There\'s no place like home." The Wizard of Oz',
  '"I am big! It\'s the pictures that got small." Sunset Boulevard',
  '"Show me the money!" Jerry Maguire',
  '"Why don\'t you come up sometime and see me?" She Done Him Wrong',
  '"I\'m walking here! I\'m walking here!" Midnight Cowboy',
  '"Play it, Sam. Play \'As Time Goes By.\'" Casablanca',
  '"You can\'t handle the truth!" A Few Good Men',
  '"I want to be alone." Grand Hotel',
  '"After all, tomorrow is another day!" Gone with the Wind',
  '"Round up the usual suspects." Casablanca',
  '"I\'ll have what she\'s having." When Harry Met Sally...',
  '"You know how to whistle, don\'t you, Steve? You just put your lips together and blow." To Have and Have Not',
  '"You\'re gonna need a bigger boat." Jaws',
  '"Badges? We ain\'t got no badges! We don\'t need no badges! I don\'t have to show you any stinking badges!" Gold Hat',
  '"I\'ll be back." The Terminator',
  '"Today, I consider myself the luckiest man on the face of the Earth." The Pride of the Yankees',
  '"If you build it, he will come." Field of Dreams',
  '"Mama always said life was like a box of chocolates. You never know what you\'re gonna get." Forrest Gump',
  '"We rob banks." Bonnie and Clyde',
  '"I see dead people." The Sixth Sense',
  '"Stella! Hey, Stella!" A Streetcar Named Desire',
  '"Oh, Jerry, don\'t let\'s ask for the moon. We have the stars." Now, Voyager',
  '"Shane. Shane. Come back!" Shane',
  '"Well, nobody\'s perfect." Some Like It Hot',
  '"It\'s alive! It\'s alive!" Frankenstein',
  '"Houston, we have a problem." Apollo 13 (and literally every other realistic space movie)',
  '"You\'ve got to ask yourself one question: \'Do I feel lucky?\' Well, do ya, punk?" Dirty Harry',
  '"You had me at \'hello.\'" Jerry Maguire',
  '"One morning I shot an elephant in my pajamas. How he got in my pajamas, I don\'t know." Animal Crackers',
  '"There\'s no crying in baseball!" A League of Their Own',
  '"A boy\'s best friend is his mother." Psycho',
  '"Greed, for lack of a better word, is good." Wall Street',
  '"Keep your friends close, but your enemies closer." The Godfather Part II',
  '"As God is my witness, I\'ll never be hungry again." Gone with the Wind',
  '"Well, here\'s another nice mess you\'ve gotten me into!" Sons of the Desert',
  '"Say \'hello\' to my little friend!" Scarface',
  '"What a dump." Beyond the Forest',
  '"Mrs. Robinson, you\'re trying to seduce me. Aren\'t you?" The Graduate',
  '"Elementary, my dear Watson." The Adventures of Sherlock Holmes',
  '"Get your stinking paws off me, you damned dirty ape." Planet of the Apes',
  '"Of all the gin joints in all the towns in all the world, she walks into mine." Casablanca',
  '"Here\'s JOHNNY!" The Shining',
  '"Is it safe?" Marathon Man',
  '"Wait a minute, wait a minute. You ain\'t heard nothin\' yet!" The Jazz Singer',
  '"Mother of mercy, is this the end of Rico?" Little Caesar',
  '"Forget it, Jake, it\'s Chinatown." Chinatown',
  '"Hasta la vista, baby." Terminator 2: Judgment Day',
  '"Soylent Green is people!" Soylent Green',
  '"Open the pod bay doors, HAL." 2001: A Space Odyssey',
  '"Yo, Adrian!" Rocky',
  '"My precious." The Lord of the Rings: The Two Towers',
  '"Sawyer, you\'re going out a youngster, but you\'ve got to come back a star!" 42nd Street',
  '"A martini. Shaken, not stirred." Goldfinger',
  '"Who\'s on first?" The Naughty Nineties',
  '"Life is a banquet, and most poor suckers are starving to death!" Auntie Mame',
  '"I feel the need—the need for speed!" Top Gun',
  '"Carpe diem. Seize the day, boys. Make your lives extraordinary." Dead Poets Society',
  '"My mother thanks you. My father thanks you. My sister thanks you. And I thank you." Yankee Doodle Dandy',
  '"Nobody puts Baby in a corner." Dirty Dancing',
  '"I\'ll get you, my pretty, and your little dog too!" The Wizard of Oz',
  '"I\'m the King of the World" Titanic',
  '"I am your father" Darth Vader',
  '"Hello there" Obi-Wan Kenobi',
  '"All I am surrounded by is fear and dead men" Darth Vader',
  '"You shall not ... PASS!" The Lord of the Rings: The Fellowship of the Ring'
];
