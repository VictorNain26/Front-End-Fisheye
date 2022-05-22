export default class videoCard {
  constructor() {};

  static init(media) {
    const {
      id, likes, title, video, date
    } = media;
    const movie = `assets/images/${video}`;

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

    const source = document.createElement('source');
    const videoContainer = document.createElement('video');
    source.setAttribute('src', movie);
    source.setAttribute('data-id', id);
    source.setAttribute('data-type', 'video');
    article.appendChild(videoContainer);
    videoContainer.appendChild(source);

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
