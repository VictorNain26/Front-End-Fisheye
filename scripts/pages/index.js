import photographerFactory from './../factories/photographerFactory.js';

const getPhotographers = () => {
  return fetch('data/photographers.json')
  .then((res) => res.json());
}

const displayData = async (photographers) => {
  const photographersSection = document.querySelector('.photographer_section');

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();

    photographersSection.appendChild(userCardDOM);
  });
}

const init = async () => {
  const photographers = await getPhotographers();
  displayData(photographers);
}

init();
