import nav from './nav';
import about from './about';
import menu from './menu';
import contact from './contact';

const content = document.querySelector('#content');
const navbar = nav();
const info = about();
const menuPics = menu();
menuPics.classList.add('d-none');
const contactInfo = contact();
contactInfo.classList.add('d-none');

const headline = document.createElement('h1');
headline.classList = 'container text-center p-4 main-headline';


const homeP = () => {
  content.appendChild(headline);
  content.appendChild(navbar);
  content.appendChild(info);
  content.appendChild(menuPics);
  content.appendChild(contactInfo);

  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');

  home.addEventListener('click', () => {
    info.classList.remove('d-none');
    menuPics.classList.remove('d-block');
    contactInfo.classList.remove('d-block');

    info.classList.add('d-block');
    menuPics.classList.add('d-none');
    contactInfo.classList.add('d-none');
  });

  menu.addEventListener('click', () => {
    info.classList.remove('d-block');
    menuPics.classList.remove('d-hide');
    contactInfo.classList.remove('d-block');

    info.classList.add('d-none');
    menuPics.classList.add('d-block');
    contactInfo.classList.add('d-none');
  });

  contact.addEventListener('click', () => {
    info.classList.remove('d-block');
    menuPics.classList.remove('d-block');
    contactInfo.classList.remove('d-hide');

    info.classList.add('d-none');
    menuPics.classList.add('d-none');
    contactInfo.classList.add('d-block');
  });

  headline.innerText = 'Restaurant-Page';
};

export default homeP;