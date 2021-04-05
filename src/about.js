const about = () => {
  const contain = document.createElement('div');
  contain.classList = 'container p-5';

  const title = document.createElement('h1');
  title.classList = 'container text-center main-headline';
  title.innerText = 'About';

  const paragraph = document.createElement('p');
  paragraph.classList = 'container text-center about-text py-5';
  paragraph.innerText = 'This restaurant is amazingly simple and still able to satisfy everybody with familiar taste and caring service.';

  contain.appendChild(title);
  contain.appendChild(paragraph);

  return contain;
};

export default about;