export default class lightbox {
  static init = (medias) => {
    this.openLightBox(medias);
    this.closeLightBox();
  };

  static openLightBox = (medias) => {
    const lightboxContainer = document.querySelector('.lightbox-background');
    const photographerPictures = document.querySelectorAll('.images-section > article > img');
    const photographerVideo = document.querySelector('.images-section > article > video');

    photographerVideo.addEventListener('click', (media) => {
      lightboxContainer.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      this.lightBoxDisplay(
        medias,
        media.target.children[0].dataset.id,
        media.target.children[0].dataset.type,
      );
    });

    photographerVideo.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        lightboxContainer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        this.lightBoxDisplay(
          medias,
          e.target.children[0].dataset.id,
          e.target.children[0].dataset.type,
        );
      }
    });

    photographerPictures.forEach((photographerPicture) => {
      photographerPicture.addEventListener('click', (media) => {
        lightboxContainer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        this.lightBoxDisplay(medias, media.target.dataset.id, media.target.dataset.type);
      });
      photographerPicture.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter') return;
        lightboxContainer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        this.lightBoxDisplay(medias, e.target.dataset.id, e.target.dataset.type);
      });
    });
  };

  static closeLightBox = () => {
    const lightboxContainer = document.querySelector('.lightbox-background');
    const closeButton = document.querySelector('#close-lightbox');

    closeButton.addEventListener('click', () => {
      document.body.style.overflow = 'scroll';
      lightboxContainer.style.display = 'none';
    });

    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      document.body.style.overflow = 'scroll';
      lightboxContainer.style.display = 'none';
    });
  };

  static lightBoxDisplay = (medias, mediaId) => {
    const lightboxImage = document.querySelector('#lightbox-image');
    const lightboxVideo = document.querySelector('#lightbox-video');
    const Video = document.querySelector('#video');
    const lightboxTitle = document.querySelector('#lightbox-title');
    const lightboxNext = document.querySelector('#lightbox-next');
    const lightboxPrevious = document.querySelector('#lightbox-previous');

    let imageIndex = medias.findIndex((el) => el.id === Number(mediaId));

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

    lightboxTitle.textContent = medias[imageIndex].title;

    lightboxNext.addEventListener('click', () => {
      imageIndex = imageIndex < medias.length - 1 ? imageIndex += 1 : imageIndex = 0;

      lightboxTitle.textContent = medias[imageIndex].title;
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
      imageIndex = imageIndex > 0 ? imageIndex -= 1 : imageIndex = medias.length - 1;

      lightboxTitle.textContent = medias[imageIndex].title;
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
        imageIndex = imageIndex < medias.length - 1 ? imageIndex += 1 : imageIndex = 0;

        lightboxTitle.textContent = medias[imageIndex].title;
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
        imageIndex = imageIndex > 0 ? imageIndex -= 1 : imageIndex = medias.length - 1;

        lightboxTitle.textContent = medias[imageIndex].title;
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
  };
}
