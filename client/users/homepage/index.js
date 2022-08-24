const searchInput = document.querySelector('.search');

searchInput.addEventListener('keyup', () => {
  fetch(`/properties/search/${searchInput.value}`)
    .then((res) => res.json()).then((data) => createDom(data));
});

fetch('/properties/empty').then((res) => res.json())
  .then((data) => createDom(data));

function createDom(data) {
  const cardsContainer = document.querySelector('.cardsContainer');
  cardsContainer.textContent = '';

  data.forEach((e) => {
    const card = document.createElement('div');
    card.classList.add('card');
    cardsContainer.appendChild(card);

    const image = document.createElement('img');
    card.appendChild(image);
    image.src = e.img;

    const content = document.createElement('div');
    content.classList.add('cardContent');
    card.appendChild(content);

    const details = document.createElement('p');
    details.textContent = e.prop_address;
    content.appendChild(details);

    const priceCont = document.createElement('div');
    priceCont.classList.add('price');
    content.appendChild(priceCont);

    const priceName = document.createElement('h4');
    priceCont.appendChild(priceName);
    priceName.textContent = 'Price: ';

    const price = document.createElement('h4');
    priceCont.appendChild(price);
    price.textContent = e.price;

    card.addEventListener('click', () => {
      const rentSection = document.querySelector('.rentSection');
      rentSection.style.display = 'flex';

      // rentSection.addEventListener('click', () => {
      //   rentSection.style.display = 'none';
      // });
    });
  });
}

module.exports = createDom;
