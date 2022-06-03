import imageCard from '../utils/imageCard.js';
import videoCard from '../utils/videoCard.js';

export default class mediaFactory {
  static init(media) {
    if (media.image) {
      return imageCard.init(media);
    }
    return videoCard.init(media);
  }
}
