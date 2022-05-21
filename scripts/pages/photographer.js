import photographerFactory from './../factories/photographerFactory.js';
import mediaFactory from './../factories/mediaFactory.js';

const getPhotographersOrMedias = async () => {
  const photographerId = (new URL(document.location)).searchParams.get('id');

  const medias = await fetch('data/medias.json')
    .then((res) => res.json())
    .then((data) => data.filter((ele) => ele.photographerId === parseInt(photographerId)));

  const photographer = await fetch('data/photographers.json')
    .then((res) => res.json())
    .then((data) => data.filter((ele) => ele.id === parseInt(photographerId)).shift());

  return { photographer, medias };
}

const updateLikes = () => {
  const heartsLikes = document.querySelectorAll('.far');
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

const lightBox = (medias, mediaId) => {
  const lightboxImage = document.querySelector('#lightbox-image');
  const lightboxVideo = document.querySelector('#lightbox-video');
  const Video = document.querySelector('#video');
  const lightboxTitle = document.querySelector('#lightbox-title');
  const lightboxNext = document.querySelector('#lightbox-next');
  const lightboxPrevious = document.querySelector('#lightbox-previous');

  let imageIndex = medias.findIndex(el => el.id === Number(mediaId));

  if (medias[imageIndex].image) {
    lightboxImage.src = `./assets/images/${medias[imageIndex].image}`;
    Video.style.display = 'none';
    lightboxImage.style.display = 'flex';
  } else {
    lightboxVideo.src = `./assets/images/${medias[imageIndex].video}`;
    Video.load();

    lightboxImage.style.display = 'none';
    Video.style.display = 'flex';
  }

  lightboxTitle.textContent = medias[imageIndex].title

  lightboxNext.addEventListener('click', () => {
    imageIndex < medias.length - 1 ? imageIndex += 1 : imageIndex = 0;

    lightboxTitle.textContent = medias[imageIndex].title
    if (medias[imageIndex].image) {
      lightboxImage.src = `./assets/images/${medias[imageIndex].image}`;
      Video.style.display = 'none';
      lightboxImage.style.display = 'flex';
    } else {
      lightboxVideo.src = `./assets/images/${medias[imageIndex].video}`;
      Video.load();

      lightboxImage.style.display = 'none';
      Video.style.display = 'flex';
    }
  });

  lightboxPrevious.addEventListener('click', () => {
    imageIndex > 0  ? imageIndex -= 1 : imageIndex = medias.length - 1;

    lightboxTitle.textContent = medias[imageIndex].title
    if (medias[imageIndex].image) {
      lightboxImage.src = `./assets/images/${medias[imageIndex].image}`;
      Video.style.display = 'none';
      lightboxImage.style.display = 'flex';
    } else {
      lightboxVideo.src = `./assets/images/${medias[imageIndex].video}`;
      Video.load();

      lightboxImage.style.display = 'none';
      Video.style.display = 'flex';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      imageIndex < medias.length - 1 ? imageIndex += 1 : imageIndex = 0;

      lightboxTitle.textContent = medias[imageIndex].title
      if (medias[imageIndex].image) {
        lightboxImage.src = `./assets/images/${medias[imageIndex].image}`;
        Video.style.display = 'none';
        lightboxImage.style.display = 'flex';
      } else {
        lightboxVideo.src = `./assets/images/${medias[imageIndex].video}`;
        Video.load();

        lightboxImage.style.display = 'none';
        Video.style.display = 'flex';
      }
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      imageIndex > 0  ? imageIndex -= 1 : imageIndex = medias.length - 1;

      lightboxTitle.textContent = medias[imageIndex].title
      if (medias[imageIndex].image) {
        lightboxImage.src = `./assets/images/${medias[imageIndex].image}`;
        Video.style.display = 'none';
        lightboxImage.style.display = 'flex';
      } else {
        lightboxVideo.src = `./assets/images/${medias[imageIndex].video}`;
        Video.load();

        lightboxImage.style.display = 'none';
        Video.style.display = 'flex';
      }
    }
  });
}

const closeLightBox = () => {
  const lightboxContainer = document.querySelector('.lightbox-background');
  const closeButton = document.querySelector('#close-lightbox');

  closeButton.addEventListener('click', () => {
    document.body.style.overflow = 'scroll'
    lightboxContainer.style.display = 'none';
  })

  document.addEventListener('keydown', (e) => {
    if  (e.key !== "Escape") return;
    document.body.style.overflow = 'scroll'
    lightboxContainer.style.display = 'none';
  })
}

const openLightBox = (medias) => {
  const lightboxContainer = document.querySelector('.lightbox-background');
  const photographerPictures = document.querySelectorAll('.images-section > article > img');
  const photographerVideo = document.querySelector('.images-section > article > video');

  photographerVideo.addEventListener('click', (media) => {
    lightboxContainer.style.display = 'flex';
    document.body.style.overflow = 'hidden'
    lightBox(medias, media.target.children[0].dataset.id, media.target.children[0].dataset.type);
  })

  photographerPictures.forEach((photographerPicture) => {
    photographerPicture.addEventListener('click', (media) => {
      lightboxContainer.style.display = 'flex';
      document.body.style.overflow = 'hidden'
      lightBox(medias, media.target.dataset.id, media.target.dataset.type);
    })
  })
  closeLightBox()
}

const sortMedias = () => {
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


  const likes = document.querySelector('#like')
  const likeNumber = document.createElement('span')
  likeNumber.textContent = totalPrice;
  likes.insertAdjacentElement('afterbegin', likeNumber);

  sortMedias();
  updateLikes();
  openLightBox(medias);
}

const init = async () => {
  const { photographer, medias } = await getPhotographersOrMedias();

  displayPhotographerData(photographer);
  displayMediasData(medias);
}

init();
