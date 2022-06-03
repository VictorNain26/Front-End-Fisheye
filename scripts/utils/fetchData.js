export default class fetchData {
  static async getAllPhotographers() {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    return data;
  }

  static async getPhotographerMedias(photographerId) {
    const response = await fetch('data/medias.json');
    const datas = await response.json();
    return datas.filter((ele) => ele.photographerId === parseInt(photographerId, 10));
  }

  static async getPhotographer(photographerId) {
    const response = await fetch('data/photographers.json');
    const datas = await response.json();
    return datas.filter((ele) => ele.id === parseInt(photographerId, 10));
  }
}
