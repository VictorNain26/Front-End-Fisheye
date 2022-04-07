export default function mediaFactory(data) {
  const { id, image, likes, price, title, video } = data;
  const picture = `assets/images/${image}`;
  const movie = `assets/images/${video}`;

  function getImageCardDOM() {
    const img = document.createElement( 'img' );
    const video = document.createElement( 'source' );
    const videoContainer= document.createElement( 'video' )
    const article = document.createElement( 'article' );
    const infoContainer = document.createElement( 'div' );
    const h3 = document.createElement( 'h3' );
    const plikes = document.createElement( 'p' );

    img.setAttribute("src", picture);
    h3.textContent = `${title}`;
    plikes.textContent = `${likes}`;
    video.setAttribute("src", movie);

    if (image) {
      article.appendChild(img);
    } else {
      article.appendChild(videoContainer);
      videoContainer.appendChild(video);
    }
    infoContainer.appendChild(h3);
    infoContainer.appendChild(plikes);
    article.appendChild(infoContainer);

    return (article);
  }

  return { getImageCardDOM }
}
