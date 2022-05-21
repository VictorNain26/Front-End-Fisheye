import photographerFactory from './../factories/photographerFactory.js';
import fetchData from './../factories/fetchData.js';

const displayData = (photographers) => {
  const photographersSection = document.querySelector('.photographer_section');

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();

    photographersSection.appendChild(userCardDOM);
  });
}

const init = async () => {
  const photographers = await fetchData.getAllPhotographers();
  displayData(photographers);
}

init();
