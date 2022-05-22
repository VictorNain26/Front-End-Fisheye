import photographerFactory from './../factories/photographerFactory.js';
import fetchData from './../factories/fetchData.js';

const displayPhotographers = (photographers) => {
  const photographersSection = document.querySelector('.photographer_section');

  photographers.forEach((photographer) => {
    const photographerCard = photographerFactory.init(photographer, 'photographerCard');

    photographersSection.appendChild(photographerCard);
  });
}

const init = async () => {
  const photographers = await fetchData.getAllPhotographers();

  displayPhotographers(photographers);
}

init();
