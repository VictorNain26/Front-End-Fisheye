import photographerFactory from '../factories/photographerFactory.js';
import mediaFactory from '../factories/mediaFactory.js';

const getPhotographersOrMedias = async () => {
  const photographerId = (new URL(document.location)).searchParams.get('id');

  const medias = await fetch('./../../data/medias.json')
    .then((res) => res.json())
    .then((data) => data.filter((ele) => ele.photographerId === parseInt(photographerId)));

  const photographer = await fetch('./../../data/photographers.json')
    .then((res) => res.json())
    .then((data) => data.filter((ele) => ele.id === parseInt(photographerId)).shift());

  return { photographer, medias };
}

const updateLikes = (heartsLikes, medias) => {
  heartsLikes.forEach((heartLike, index) => {
    heartLike.addEventListener('click', () => {
      if (heartLike.classList.contains('liked')) {
        heartLike.classList.remove('liked')
        console.log(medias[index].price);
      } else {
        heartLike.classList.add('liked')
      }
    })
  })
}

const displayPhotographerData = (photographer) => {
  const formName = document.querySelector('.modal h2');
  const photographerModel = photographerFactory(photographer);
  const pFormName = document.createElement('h2');
  pFormName.textContent = photographerModel.name;
  formName.insertAdjacentElement('afterend', pFormName);

  const price = document.querySelector('#price');
  const pprices = document.createElement('span');
  pprices.textContent = `${photographerModel.price}€`;
  price.insertAdjacentElement('afterbegin', pprices);

  photographerModel.getPhotographerHeader();
}

const displayMediasData = (medias) => {
  const imagesSection = document.querySelector('.images-section');
  let totalPrice = 0;

  medias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const userImageDOM = mediaModel.getImageCardDOM();
    imagesSection.appendChild(userImageDOM);
    totalPrice += media.price
  });

  const heartsLikes = document.querySelectorAll('.far');
  const likes = document.querySelector('#like')
  const likeNumber = document.createElement('span')
  likeNumber.textContent = totalPrice;
  likes.insertAdjacentElement('afterbegin', likeNumber);
  updateLikes(heartsLikes, medias);
}

const init = async () => {
  const { photographer, medias } = await getPhotographersOrMedias();

  displayPhotographerData(photographer);
  displayMediasData(medias);
}

init();
