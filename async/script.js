const cb = () => {
  console.log("cb was called");
};
function sendDataToServer(cb) {
  //do somthing
  cb();

  //do somthing else
  if (true === true) cb();
}

sendDataToServer(cb);

// how do i make sure that i run the callback only once?

// how do react only after i get response from somwhere?

const prom = new Promise((resolve, reject) => {
  const input = +prompt("Enter you age");
  20;
  setTimeout(() => {
    switch (true) {
      case input > 70:
        reject(`You can't drink`);
        break;
      case input >= 18:
        resolve(`You can drink`);
        break;
    }
    reject(new Error("You can't drink"));
  }, 5000);
});

prom
  .then((res) => {
    document.querySelector("#ok").textContent = res;
  })
  .catch((err) => {
    document.querySelector("#ok").style.color = "red";
    document.querySelector("#ok").textContent = err;
  });
//*********************
function job() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`hello world`);
    }, 2000);
  });
}

job().then((resolve) => {
  console.log(resolve);
});
//*********************

/**
 * this is a function that returns a promise
 * @param {*} data should be anything, because this will be a generic function
 * @returns a promise that will be resolved or rejected immediately or after 1 or 2 seconds
 */

function job2(data) {
  return new Promise((resolve, reject) => {
    switch (true) {
      case typeof data !== "number":
        reject(new Error("data is not a number"));
        break;
      case data % 2 === 0:
        setTimeout(() => {
          resolve("even");
        }, 1000);
        break;
      case data % 2 === 1:
        setTimeout(() => {
          reject("odd");
        }, 2000);
        break;
    }
  });
}
job2(31)
  .then((res) => {
    console.log(res);
  })
  .catch((reject) => {
    console.log(reject);
  });
//************************************** */

const addressProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    const addresses = [
      {
        street: "123 Main St",
        userId: 1,
      },
      {
        street: "456 Main St",
        userId: 2,
      },
    ];
    resolve(addresses);
  }, 2000);
});
const usersProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    const users = [
      {
        id: 1,
        name: "John",
      },
      {
        id: 2,
        name: "Jane",
      },
    ];
    resolve(users);
  }, 1000);
});
const productsProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    const products = [
      {
        id: 1,
        userId: 1,
        name: "product 1",
      },
      {
        id: 2,
        userId: 2,
        name: "product 2",
      },
    ];
    resolve(products);
  }, 1500);
});
Promise.all([addressProm, usersProm, productsProm]).then((res) => {
  const [addresses, users, products] = res;
  console.log(res);

  products.forEach((product) => {
    const user = users.find((user) => user.id === product.userId);
    const address = addresses.find(
      (address) => address.userId === product.userId
    );
    console.log(
      `send product ${product.id} to ${address.street} (${user.name})`
    );
  });
});
//********************************* */

//#region home work promise
const houseAddressProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    const addresses = [
      {
        street: "ba sharon",
        id: 1,
      },
      {
        street: "yavne",
        id: 2,
      },
    ];
    resolve(addresses);
  }, 1000);
});
const clientProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    const clients = [
      {
        name: "Gez",
        id: 1,
      },
      {
        name: "Katabi",
        id: 2,
      },
    ];
    resolve(clients);
  }, 3000);
});
const halvaaTypeProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    const halvaaTypes = [
      {
        name: "tzamud",
        id: 1,
      },
      {
        name: "prime",
        id: 2,
      },
      {
        name: "mishtama",
        id: 3,
      },
    ];
    resolve(halvaaTypes);
  }, 0);
});

const tamhilimProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    const tamhilim = [
      {
        halvaoot: [1, 2],
        id: 1,
      },
      {
        halvaoot: [2, 3],
        id: 2,
      },
      {
        halvaoot: [1, 3],
        id: 3,
      },
    ];
    resolve(tamhilim);
  }, 2500);
});

const shukProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    const shuk = [
      {
        client: 1,
        address: 1,
        tamhil: 1,
      },
      {
        client: 2,
        address: 2,
        tamhil: 3,
      },
    ];
    resolve(shuk);
  }, 2000);
});

//#region 1

Promise.all([
  houseAddressProm,
  clientProm,
  halvaaTypeProm,
  tamhilimProm,
  shukProm,
]).then((res) => {
  console.log("exercise one");
  const [addresses, clients, halvaaTypes, tamhilim, shuk] = res;
  console.log(res);

  shuk.forEach((BankCustomer) => {
    const client = clients.find((client) => client.id === BankCustomer.client);
    const Address = addresses.find(
      (Address) => Address.id === BankCustomer.address
    );

    const tamhil = tamhilim.find((tamhil) => tamhil.id === BankCustomer.tamhil);

    let halvaaType = [];
    for (let index = 0; index < tamhil.halvaoot.length; index++) {
      halvaaType.push(halvaaTypes.find((t) => t.id === tamhil.halvaoot[index]));
    }
    console.log(halvaaType);

    console.log(
      `${client.name} is taking a loan for the house in ${Address.street} for the tamhil:${halvaaType[0].name} and ${halvaaType[1].name} `
    );
  });
});
//#endregion

//#region 2

Promise.all([
  houseAddressProm,
  clientProm,
  halvaaTypeProm,
  tamhilimProm,
  shukProm,
]).then((res) => {
  console.log(" ");
  console.log("exercise two");
  const [addresses, clients, halvaaTypes, tamhilim, shuk] = res;
  console.log(res);

  shuk.forEach((BankCustomer) => {
    const client = clients.find((client) => client.id === BankCustomer.client);
    const Address = addresses.find(
      (Address) => Address.id === BankCustomer.address
    );

    const tamhil = tamhilim.find((tamhil) => tamhil.id === BankCustomer.tamhil);
    console.log(tamhil.halvaoot);

    const tamhilFilter = tamhil.halvaoot.filter((tamhil) => tamhil !== 2);
    console.log(tamhilFilter);

    let halvaaType = [];
    for (let index = 0; index < tamhilFilter.length; index++) {
      halvaaType.push(halvaaTypes.find((t) => t.id === tamhilFilter[index]));
    }
    console.log(halvaaType);
    if (halvaaType.length === 2) {
      console.log(
        `${client.name} is taking a loan for the house in ${Address.street} for the tamhil:${halvaaType[0].name} and ${halvaaType[1].name} `
      );
    } else {
      console.log(
        `${client.name} is taking a loan for the house in ${Address.street} for the tamhil:${halvaaType[0].name}  `
      );
    }
  });
});
//#endregion
//#endregion

temp = (preson) => {
  console.log(preson.name);
  console.log(preson.address);
};
temp({
  name: "",
  address: "",
});
