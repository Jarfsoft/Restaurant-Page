const nav = () => {
  const navbar = document.createElement('nav');
  navbar.classList = 'd-flex justify-content-between';
  const home = document.createElement('a');
  home.innerText = 'Home';
  home.setAttribute('id', 'home');
  home.classList = 'nav-obj';
  const menu = document.createElement('a');
  menu.innerText = 'Menu';
  menu.setAttribute('id', 'menu');
  menu.classList = 'nav-obj';
  const contact = document.createElement('a');
  contact.innerText = 'Contact';
  contact.setAttribute('id', 'contact');
  contact.classList = 'nav-obj';
  navbar.appendChild(home);
  navbar.appendChild(menu);
  navbar.appendChild(contact);

  return navbar;
};

export default nav;