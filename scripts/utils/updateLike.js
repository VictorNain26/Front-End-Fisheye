export default class updateLike {
  constructor() {};

  static init = () => {
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
};
