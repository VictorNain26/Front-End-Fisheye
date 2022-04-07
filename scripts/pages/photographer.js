import photographerFactory from '../factories/photographer.js'
import mediaFactory from '../factories/media.js'

async function getPhotographers() {
  const photographerId = (new URL(document.location)).searchParams.get("id");

  const  medias = await fetch('./../../data/medias.json')
          .then(res => res.json())
          .then(data => data.filter(ele => ele.photographerId === parseInt(photographerId)));

  const photographer = await fetch('./../../data/photographers.json')
          .then(res => res.json())
          .then(data => data.filter(ele => ele.id === parseInt(photographerId)).shift());

  return { photographer, medias }
}

function displayPhotographerData(photographer) {
  const formName = document.querySelector(".modal h2");
  const photographerModel = photographerFactory(photographer);

  const pFormName = document.createElement( 'h2' );
  pFormName.textContent = photographerModel.name
  formName.insertAdjacentElement("afterend" ,pFormName)

  photographerModel.getPhotographerHeader();
};

function displayMediasData(medias) {
  const imagesSection = document.querySelector(".images-section")
  medias.forEach((media) => {
      const mediaModel = mediaFactory(media);
      const userImageDOM = mediaModel.getImageCardDOM();
      imagesSection.appendChild(userImageDOM);
  });
};

async function init() {
  const {photographer, medias} = await getPhotographers();
  displayPhotographerData(photographer);
  displayMediasData(medias);
};

init();
