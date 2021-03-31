const content = document.querySelector('#content');

const headline = document.createElement('h1');
const image = document.createElement('img');
const paragraph = document.createElement('p');

headline.innerText = 'Restaurant-Page';
image.src = '../assets/images/howcuttingdo.jpg';
image.alt = 'food'
paragraph.innerText = 'This restaurant is amazingly simple and still able to satisfy everybody with familiar taste and caring service.'

content.appendChild(headline);
content.appendChild(image);
content.appendChild(paragraph);