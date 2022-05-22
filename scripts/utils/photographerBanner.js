export default class photographersBanner {
  constructor() {};

  // ajouter la création des elements directement dans le HTML
  static init(data) {
    const {
      name, portrait, country, city, tagline,
    } = data;
    const picture = `assets/photographers/${portrait}`;
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
  };
}
