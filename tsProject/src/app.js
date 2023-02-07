"use strict";
const num = 1;
const array = [1, "david"];
console.log(2);
const costumerOne = {
    id: 1,
    creatdeat: new Date(),
    email: "davidrokach111@gmail.com",
    phone: "0545923980",
    firtName: "david",
    lastName: "rokach",
};
console.log(costumerOne);
const array2 = [1, 2, 3, 4, 5];
const arrContactsLiteral = [
    {
        id: 1,
        email: "davidrokach111@gmail.com",
        phone: "0545923980",
        firtName: "david",
        lastName: "rokach",
        birthday: new Date(1999),
    },
];
const contactOne = {
    id: 1,
    firtName: "menchem",
    lastName: "choen",
    birthday: new Date(),
    email: "menchem@gmail.com",
    phone: "0549595962",
};
const contactTwo = {
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
const arrContactsUion = [contactOne, contactOne, contactTwo];
const arrContactsGeneric = [contactOne];
const arrContactstTuple = [contactOne, contactTwo];
arrContactstTuple.push(contactTwo);
const fn = () => { };
const funcContacts = (id, arr) => {
    if (!arr.length)
        return null;
    const resultObj = arr.find((Obj) => id === Obj.id);
    if (!resultObj)
        return "no contact was found with this id";
    return resultObj;
};
const noId = funcContacts(5, [contactOne]);
const noArray = funcContacts(1, []);
const objectFormFun = funcContacts(1, [contactOne, contactTwo]);
console.log(noId);
console.log(noArray);
console.log(objectFormFun);
