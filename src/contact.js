const contact = () => {
  const contain = document.createElement('div');
  contain.classList = 'container p-5';

  const title = document.createElement('h1');
  title.classList = 'container text-center main-headline';
  title.textContent = 'Contact';

  const paragraph = document.createElement('p');
  paragraph.classList = 'container text-center about-text py-5';
  paragraph.innerText = 'Twitter: @Restaurant-Page\n\nFacebook: Restaurant Page';

  contain.appendChild(title);
  contain.appendChild(paragraph);

  return contain;
};

export default contact;