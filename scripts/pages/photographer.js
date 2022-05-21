import photographerFactory from './../factories/photographerFactory.js';
import mediaFactory from './../factories/mediaFactory.js';
import contactForm from './../utils/contactForm.js';
import fetchData from './../factories/fetchData.js';
import updateLike from './../utils/updateLike.js';
import sortMedias from './../utils/sortMedias.js';
import lightbox from './../utils/lightbox.js';

const displayPhotographerData = (photographer) => {
  const photographerModel = photographerFactory(photographer);

  const price = document.querySelector('#price');
  const pprices = document.createElement('span');
  pprices.textContent = `${photographerModel.price}€`;
  price.insertAdjacentElement('afterbegin', pprices);

  photographerModel.getPhotographerHeader();
}

const displayMediasData = (medias) => {
  const imagesSection = document.querySelector('.images-section');
  let totalPrice = 0;
  medias.sort((a, b) => parseFloat(b.likes) - parseFloat(a.likes));

  medias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const userImageDOM = mediaModel.getImageCardDOM();
    imagesSection.appendChild(userImageDOM);
    totalPrice += media.price
  });


  const likes = document.querySelector('#like')
  const likeNumber = document.createElement('span')
  likeNumber.textContent = totalPrice;
  likes.insertAdjacentElement('afterbegin', likeNumber);

}

const init = async () => {
  const photographerId = (new URL(document.location)).searchParams.get('id');

  const photographer = await fetchData.getPhotographer(photographerId);
  const medias = await fetchData.getPhotographerMedias(photographerId);

  displayPhotographerData(photographer);
  displayMediasData(medias);

  contactForm.init(photographer);
  updateLike.init();
  sortMedias.init();
  lightbox.init(medias);
}

init();
