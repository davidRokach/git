import { randomNumBetween } from "../utils/algoMethods.js";

class Picture {
  url;
  #id;
  alt;
  #createdBy;
  #createdAt;
  #price;
  likes = [];

  constructor(Picture, array = []) {
    const { url, credits, alt, price } = Picture;
    this.#createdBy = credits;
    this.url = url;
    this.alt = alt;
    this.#price = price;
    this.#createdAt = new Date();
    this.generateId(array);
  }
  generateId(array) {
    const random = randomNumBetween(1_000_000, 9_999_999);
    const pic = array.find((pic) => pic._id === random);
    if (!pic) return (this.#id = random);
    this.generateId(array);
  }

  get _id() {
    return this.#id;
  }
  get credits() {
    return this.#createdBy;
  }
  set credits(newCredit) {
    this.#createdBy = newCredit;
  }
  get price() {
    return this.#price;
  }
  set price(newPrice) {
    if (newPrice <= 15) {
      return console.log("Price is too low");
    }
    this.#price = newPrice;
  }
}
export default Picture;
