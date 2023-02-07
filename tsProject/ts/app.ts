const num = 1;
const array: [number, string] = [1, "david"];
const enum Color {
  Red,
  Green,
  Blue,
}
console.log(Color.Blue);

interface IAddress {
  state?: string;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
  zip: number;
}

interface ICostumer {
  id?: number;
  firtName: string;
  lastName: string;
  email: string;
  phone: string;
  creatdeat: Date;
  address?: IAddress;
}

const costumerOne: ICostumer = {
  id: 1,
  creatdeat: new Date(),
  email: "davidrokach111@gmail.com",
  phone: "0545923980",
  firtName: "david",
  lastName: "rokach",
};
console.log(costumerOne);

const array2: number[] = [1, 2, 3, 4, 5];
////////////////////

interface IContacts {
  id?: number;
  firtName: string;
  lastName: string;
  email: string;
  phone: string;
  birthday: Date;
  address?: IAddress;
}
interface IContactsAdd {
  id?: number;
  firtName: string;
  lastName: string;
  email: string;
  phone: string;
  birthday: Date;
  address: IAddress;
}

const arrContactsLiteral: [
  {
    id: 1;
    email: "davidrokach111@gmail.com";
    phone: "0545923980";
    firtName: "david";
    lastName: "rokach";
    birthday: Date;
  }
] = [
  {
    id: 1,
    email: "davidrokach111@gmail.com",
    phone: "0545923980",
    firtName: "david",
    lastName: "rokach",
    birthday: new Date(1999),
  },
];

const contactOne: IContacts = {
  id: 1,
  firtName: "menchem",
  lastName: "choen",
  birthday: new Date(),
  email: "menchem@gmail.com",
  phone: "0549595962",
};
const contactTwo: IContacts = {
  id: 2,
  firtName: "yoni",
  lastName: "boni",
  birthday: new Date(),
  email: "yoni@gmail.com",
  phone: "0585630014",
  address: {
    city: "bnei break",
    state: "",
    country: "israel",
    houseNumber: 10,
    street: "dsfsf",
    zip: 2525,
  },
};

type IofContacts = IContactsAdd | IContacts;
const arrContactsUion: IofContacts[] = [contactOne, contactOne, contactTwo];

const arrContactsGeneric: Array<IContacts> = [contactOne];

const arrContactstTuple: [IContacts, IContacts] = [contactOne, contactTwo];
arrContactstTuple.push(contactTwo);

//#region  functions
const fn: Function = () => {};

const funcContacts = (
  id: number | undefined,
  arr: Array<IContacts>
): null | string | object => {
  if (!arr.length) return null;

  const resultObj: object | undefined = arr.find((Obj) => id === Obj.id);
  if (!resultObj) return "no contact was found with this id";

  return resultObj;
};

const noId = funcContacts(5, [contactOne]);
const noArray = funcContacts(1, []);
const objectFormFun = funcContacts(1, [contactOne, contactTwo]);

console.log(noId);
console.log(noArray);
console.log(objectFormFun);
//#endregion

//#region classes

interface Iaddress {
  state: string | undefined;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
  zip: string;
}

class USER {
  #id: number;
  name: string | object;
  address: Iaddress;
  #phone: string;
  #email: string;
  #password: string;
  #createdAt: Date;
  #isAdmin: boolean = false;
  #isBusiness: boolean = false;

  constructor(
    name: { first: string; last: string },
    address: Iaddress,
    phone: string,
    email: string,
    password: string
  ) {
    this.#id = this.generateId();
    this.name = name;
    this.address = address;
    this.#phone = phone;
    this.#email = email;
    this.#password = password;
    this.#createdAt = new Date();
  }

  private generateId(): number {
    const random = Math.floor(
      Math.random() * (9_000_000 - 1_000_000 + 1) + 1_000_000
    );
    return random;
  }

  public get id(): number {
    return this.#id;
  }
}

//#endregion
//DOM
