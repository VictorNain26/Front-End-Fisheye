export default class sortMedias {
  constructor() {};

  static init = () => {
    const imagesSection = document.querySelector('.images-section');
    const sortSelect = document.querySelector("#sort-select")

    sortSelect.addEventListener("change", () => {
      const sortSection = [...imagesSection.children];

      if (sortSelect.value === 'titre') {
        sortSection.sort((a, b) => a.textContent.localeCompare(b.textContent));
      } else if (sortSelect.value === 'popularité') {
        sortSection.sort((a, b) => parseFloat(b.children[1].children[1].textContent) - parseFloat(a.children[1].children[1].textContent));
      } else {
        sortSection.sort((a, b) => {
          return Date.parse(b.dataset.date) - Date.parse(a.dataset.date)
        });

      }
      while (imagesSection.firstChild) {
        imagesSection.removeChild(imagesSection.firstChild);
      }
      sortSection.forEach((nodeElement) => imagesSection.appendChild(nodeElement));
    })
  }
};
