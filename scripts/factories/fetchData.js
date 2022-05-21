export default class fetchData {
  constructor() {};

  static getAllPhotographers = async () => {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    return data;
  };

  static getPhotographerMedias = async (photographerId) => {
    const response = await fetch('data/medias.json');
    const datas = await response.json();
    return datas.filter((ele) => ele.photographerId === parseInt(photographerId));
  }

  static getPhotographer = async (photographerId) => {
    const response = await fetch('data/photographers.json');
    const datas = await response.json();
    return datas.filter((ele) => ele.id === parseInt(photographerId)).shift()
  }
};
