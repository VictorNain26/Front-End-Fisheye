import imageCard from "../utils/imageCard.js";
import videoCard from "../utils/videoCard.js";
export default class mediaFactory {
  constructor() {};

  static init(media) {
    if (media.image) {
      return imageCard.init(media);
    }
    else {
      return videoCard.init(media);
    }
  }
}
