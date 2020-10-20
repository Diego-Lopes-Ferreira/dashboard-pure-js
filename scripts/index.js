import generateQuote from './quotes';

generateQuote();
window.addEventListener('focus', generateQuote);
document.querySelector('#changeQuote').onclick = generateQuote;
