import photographerFactory from './../factories/photographerFactory.js';
import mediaFactory from './../factories/mediaFactory.js';
import contactForm from './../utils/contactForm.js';
import fetchData from '../utils/fetchData.js';
import updateLike from './../utils/updateLike.js';
import sortMedias from './../utils/sortMedias.js';
import lightbox from './../utils/lightbox.js';

const displayMediasData = (medias, photographer) => {
  const imagesSection = document.querySelector('.images-section');
  let totalLikes = 0;

  medias.sort((a, b) => parseFloat(b.likes) - parseFloat(a.likes));

  medias.forEach((media) => {
    const mediaCard = mediaFactory.init(media);

    imagesSection.appendChild(mediaCard);
    totalLikes += media.likes
  });
  const likes = document.querySelector('#like');
  const likeNumber = document.createElement('span');
  const price = document.querySelector('#price');
  const pprices = document.createElement('span');

  pprices.textContent = `${photographer.price}€`;
  likeNumber.textContent = totalLikes;

  price.insertAdjacentElement('afterbegin', pprices);
  likes.insertAdjacentElement('afterbegin', likeNumber);

}

const init = async () => {
  const photographerId = (new URL(document.location)).searchParams.get('id');

  const photographer = await fetchData.getPhotographer(photographerId);
  const medias = await fetchData.getPhotographerMedias(photographerId);

  displayMediasData(medias, photographer);

  photographerFactory.init(photographer);
  contactForm.init(photographer);
  updateLike.init();
  sortMedias.init();
  lightbox.init(medias);
}

init();
