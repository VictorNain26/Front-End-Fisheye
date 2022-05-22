export default function mediaFactory(data) {
  const {
    id, image, likes, price, title, video, date
  } = data;
  const picture = `assets/images/${image}`;
  const movie = `assets/images/${video}`;

  // mettre ce code dans un fichier à part et l'appeler ici
  // Et separer image et video
  function getImageCardDOM() {
    const article = document.createElement('article');
    const infoContainer = document.createElement('div');
    const likeContainer = document.createElement('div');
    const heart = document.createElement('i');
    const h3 = document.createElement('h3');
    const plikes = document.createElement('p');

    h3.textContent = `${title}`;
    plikes.textContent = `${likes}`;
    heart.classList.add('far', 'fa-heart')
    likeContainer.classList.add('like-container');

    if (image) {
      const img = document.createElement('img');
      img.setAttribute('src', picture);
      img.setAttribute('data-id', id);
      img.setAttribute('data-type', 'image');
      article.appendChild(img);
    } else {
      const video = document.createElement('source');
      const videoContainer = document.createElement('video');
      video.setAttribute('src', movie);
      video.setAttribute('data-id', id);
      video.setAttribute('data-type', 'video');
      article.appendChild(videoContainer);
      videoContainer.appendChild(video);
    }
    likeContainer.appendChild(plikes);
    likeContainer.appendChild(heart);
    infoContainer.appendChild(h3);
    infoContainer.appendChild(likeContainer);
    article.dataset.date = date;
    article.appendChild(infoContainer);


    return (article);
  }

  return { getImageCardDOM, price };
}
