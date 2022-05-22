import photographerCard from "../utils/photographerCard.js";
import photographerBanner from "../utils/photographerBanner.js";
export default class photographerFactory {
  constructor() {};

  static init(data, type) {
    if (type === 'photographerCard') {
      return photographerCard.init(data);
    }
    else {
      photographerBanner.init(data);
    }
  }
}
