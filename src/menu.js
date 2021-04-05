const menu = () => {
  const contain = document.createElement('div');
  contain.classList = 'container p-5';

  const title = document.createElement('h1');
  title.classList = 'container text-center main-headline';
  title.innerText = 'Menu';

  const pic1 = document.createElement('img');
  pic1.src = '../assets/images/howcuttingdo.jpg';
  pic1.alt = 'food';
  pic1.classList = 'my-5 pic';

  const pic2 = document.createElement('img');
  pic2.src = '../assets/images/food1.jpg';
  pic2.alt = 'food';
  pic2.classList = 'my-5 pic';

  const pic3 = document.createElement('img');
  pic3.src = '../assets/images/food2.jpg';
  pic3.alt = 'food';
  pic3.classList = 'my-5 pic';

  contain.appendChild(title);
  contain.appendChild(pic1);
  contain.appendChild(pic2);
  contain.appendChild(pic3);

  return contain;
};

export default menu;