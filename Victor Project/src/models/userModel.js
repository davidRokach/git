import { randomNumBetween } from "../utils/algoMethods";

class User {
  //#region props
  #id;
  #name;
  address = {
    state: "",
    country: "",
    city: "",
    street: "",
    hoseNumber: "",
    zip: "",
  };
  phone;
  #email;
  #password;
  #createdAt;
  #isAdmin = false;
  #isBusiness = false;
  //#endregion

  constructor(users, array = []) {
    const {
      name,
      address: { state, country, city, street, hoseNumber, zip },
      phone,
      email,
      password,
      isAdmin,
      isBusiness,
    } = users;
    this.#name = name;
    this.phone = phone;
    this.#email = email;
    this.#password = password;
    this.address = { state, country, city, street, hoseNumber, zip };

    this.#createdAt = Date.now();

    this.#isAdmin = isAdmin;
    this.#isBusiness = isBusiness;

    this.generateId(array);
  }
  generateId(array) {
    const random = randomNumBetween(1_000_000, 9_999_999);
    const user = array.find((user) => user._id === random);
    if (!user) return (this.#id = random);
    this.generateId(array);
  }

  get _id() {
    return this.#id;
  }
}
export default User;
