export default function photographerFactory(data) {
  const {
    name, portrait, id, country, city, price, tagline,
  } = data;
  const picture = `assets/photographers/${portrait}`;

  function getPhotographerHeader() {
    const photographHeader = document.querySelector('.photograph-header');

    const div = document.createElement('div');
    const divImage = document.createElement('div');
    const h2 = document.createElement('h2');
    const pCityCountry = document.createElement('p');
    const pTagline = document.createElement('p');
    const img = document.createElement('img');

    img.setAttribute('src', picture);

    div.appendChild(h2);
    div.appendChild(pCityCountry);
    div.appendChild(pTagline);
    divImage.appendChild(img);

    h2.textContent = name;
    pCityCountry.textContent = `${city}, ${country}`;
    pTagline.textContent = tagline;

    photographHeader.appendChild(divImage);
    photographHeader.insertAdjacentElement('afterbegin', div);
  }

  function getUserCardDOM() {
    const a = document.createElement('a');
    const article = document.createElement('article');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const pCityCountry = document.createElement('p');
    const pTagline = document.createElement('p');
    const pPrice = document.createElement('p');

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(pCityCountry);
    article.appendChild(pTagline);
    article.appendChild(pPrice);

    img.setAttribute('src', picture);
    pCityCountry.textContent = `${city}, ${country}`;
    pTagline.textContent = tagline;
    pPrice.textContent = `${price}Є/jour`;
    h2.textContent = name;

    a.appendChild(article);
    a.href = `photographer.html?id=${id}`;
    return (a);
  }

  return { getUserCardDOM, getPhotographerHeader, name, price };
}
