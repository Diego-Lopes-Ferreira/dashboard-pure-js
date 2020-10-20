import generateQuote from './quotes';
import renderCards from './views';

generateQuote();
window.addEventListener('focus', generateQuote);
document.querySelector('#changeQuote').onclick = generateQuote;

renderCards();
