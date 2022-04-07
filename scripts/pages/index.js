import photographerFactory from '../factories/photographer.js'

init();

async function init() {
  const photographers = await getPhotographers();
  displayData(photographers);
};

async function getPhotographers() {
  return await fetch('../../data/photographers.json')
          .then(res => res.json())
          .then(data => data.photographers)
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
      const photographerModel = photographerFactory(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();

      photographersSection.appendChild(userCardDOM);
  });
};
