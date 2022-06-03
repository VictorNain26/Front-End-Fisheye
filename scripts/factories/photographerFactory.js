import photographerCard from '../utils/photographerCard.js';
import photographerBanner from '../utils/photographerBanner.js';

export default class photographerFactory {
  static init(data, type) {
    if (type === 'photographerCard') {
      return photographerCard.init(data);
    }
    return photographerBanner.init(data);
  }
}
