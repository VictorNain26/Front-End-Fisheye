export default class photographersBanner {
  constructor() {};

  // ajouter la création des elements directement dans le HTML
  static init(data) {
    const {
      name, portrait, country, city, tagline,
    } = data;

    const picture = `assets/photographers/${portrait}`;
    const photographerName = document.querySelector('#photographer-name');
    const photographerCountryCity = document.querySelector('#photographer-country-city');
    const photographerTag = document.querySelector('#photographer-tag');
    const photographerPicture = document.querySelector('#photographer-picture');

    const img = document.createElement('img');

    img.setAttribute('src', picture);
    img.setAttribute('alt', name);

    photographerName.textContent = name;
    photographerCountryCity.textContent = `${city} ${country}`;
    photographerTag.textContent = tagline;
    photographerPicture.appendChild(img);
  };
}
