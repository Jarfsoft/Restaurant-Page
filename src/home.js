import nav from './nav';
import about from './about';
import menu from './menu';
import contact from './contact'

const content = document.querySelector('#content');
const navbar = nav();
const info = about();
const menu_pics = menu();
menu_pics.classList.add('d-none');
const contact_info = contact();
contact_info.classList.add('d-none');

const headline = document.createElement('h1');
headline.classList = 'container text-center p-4 main-headline';


const homeP = () => {
  content.appendChild(headline);
  content.appendChild(navbar);
  content.appendChild(info);
  content.appendChild(menu_pics);
  content.appendChild(contact_info);

  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');

  home.addEventListener('click', () => {
    info.classList.remove('d-none');
    menu_pics.classList.remove('d-block');
    contact_info.classList.remove('d-block');

    info.classList.add('d-block');
    menu_pics.classList.add('d-none');
    contact_info.classList.add('d-none');
  });
  
  menu.addEventListener('click', () => {
    info.classList.remove('d-block');
    menu_pics.classList.remove('d-hide');
    contact_info.classList.remove('d-block');

    info.classList.add('d-none');
    menu_pics.classList.add('d-block');
    contact_info.classList.add('d-none');
  });

  contact.addEventListener('click', () => {
    info.classList.remove('d-block');
    menu_pics.classList.remove('d-block');
    contact_info.classList.remove('d-hide');

    info.classList.add('d-none');
    menu_pics.classList.add('d-none');
    contact_info.classList.add('d-block');
  });
  
  headline.innerText = 'Restaurant-Page';
};

export default homeP;