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

const updateLikes = (heartsLikes) => {
  const TotalLikes = document.querySelector('#like > span');
  let TotalLikesNumber = Number(document.querySelector('#like > span').textContent);

  heartsLikes.forEach((heartLike, index) => {
    const cardLikes = document.querySelectorAll('.like-container > p')[index];
    let cardLikesNumber = Number(document.querySelectorAll('.like-container > p')[index].textContent);

    heartLike.addEventListener('click', () => {
      if (heartLike.classList.contains('liked')) {
        heartLike.classList.remove('liked')
        cardLikesNumber -= 1;
        TotalLikesNumber -= 1;
      } else {
        heartLike.classList.add('liked')
        cardLikesNumber += 1;
        TotalLikesNumber += 1;
      }
      cardLikes.textContent = cardLikesNumber;
      TotalLikes.textContent = TotalLikesNumber;
    })
  })
}

const sortMedias = (medias) => {
  const imagesSection = document.querySelector('.images-section');
  const sortSelect = document.querySelector("#sort-select")

  sortSelect.addEventListener("change", () => {
    switch (sortSelect.value) {
      case "titre":
        medias.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "date":
        medias.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "popularité":
        medias.sort((a, b) => parseFloat(b.likes) - parseFloat(a.likes));
        break;
    }
    while (imagesSection.firstChild) {
      imagesSection.removeChild(imagesSection.firstChild);
    }
    medias.forEach((media) => {
      const mediaModel = mediaFactory(media);
      const userImageDOM = mediaModel.getImageCardDOM();
      imagesSection.appendChild(userImageDOM);
    });
    const heartsLikes = document.querySelectorAll('.far');

    updateLikes(heartsLikes);
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
  medias.sort((a, b) => parseFloat(b.likes) - parseFloat(a.likes));

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

  sortMedias(medias);
  updateLikes(heartsLikes);
}

const init = async () => {
  const { photographer, medias } = await getPhotographersOrMedias();

  displayPhotographerData(photographer);
  displayMediasData(medias);
}

init();
