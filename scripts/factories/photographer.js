export default function photographerFactory(data) {
  const { name, portrait, id, country, city, price, tagline } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
      const a = document.createElement( 'a' );
      const article = document.createElement( 'article' );
      const img = document.createElement( 'img' );
      img.setAttribute("src", picture)
      const h2 = document.createElement( 'h2' );
      const pCityCountry = document.createElement( 'p' )
      const pTagline = document.createElement( 'p' )
      const pPrice = document.createElement( 'p' )
      pCityCountry.textContent = `${city}, ${country}`
      pTagline.textContent = tagline
      pPrice.textContent = `${price}Є/jour`
      h2.textContent = name;
      article.appendChild(img);
      article.appendChild(h2);
      article.appendChild(pCityCountry);
      article.appendChild(pTagline);
      article.appendChild(pPrice);
      a.appendChild(article)
      a.href = `${window.location}photographer.html?id=${id}`
      return (a);
  }

  return { getUserCardDOM }
}
