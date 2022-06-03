export default class PhotographerCard {
  static init(data) {
    const {
      name, portrait, id, country, city, price, tagline,
    } = data;
    const picture = `assets/photographers/${portrait}`;

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
    img.setAttribute('alt', name);

    pCityCountry.textContent = `${city}, ${country}`;
    pTagline.textContent = tagline;
    pPrice.textContent = `${price}Є/jour`;
    h2.textContent = name;

    a.appendChild(article);
    a.href = `photographer.html?id=${id}`;
    a.setAttribute('aria-label', name);
    return (a);
  }
}
