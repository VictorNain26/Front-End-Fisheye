export default class imageCard {
  constructor() {};

  static init(media) {
    const {
      id, image, likes, title, date
    } = media;
    const picture = `assets/images/${image}`;

    const article = document.createElement('article');
    const infoContainer = document.createElement('div');
    const likeContainer = document.createElement('div');
    const heart = document.createElement('i');
    const emptyHeart = document.createElement('i');
    const h3 = document.createElement('h3');
    const plikes = document.createElement('p');

    h3.textContent = `${title}`;
    plikes.textContent = `${likes}`;
    emptyHeart.classList.add('far', 'fa-heart', 'empty-heart');
    heart.classList.add('fas', 'fa-heart', 'heart');
    likeContainer.classList.add('like-container');

    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.setAttribute('data-id', id);
    img.setAttribute('data-type', 'image');
    img.setAttribute('aria-label', title);
    article.appendChild(img);

    likeContainer.appendChild(plikes);
    likeContainer.appendChild(heart);
    likeContainer.appendChild(emptyHeart);
    infoContainer.appendChild(h3);
    infoContainer.appendChild(likeContainer);
    article.dataset.date = date;
    article.appendChild(infoContainer);

    return (article);
  }
}
