(function () {
  //   // async await - Practice lesson
  //   const isVictorCrazy = () => {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         if (true) reject(new Error("Victor is crazy! no doubt about it!"));
  //       }, 3000);
  //     });
  //   };

  //   async function askQuestion() {
  //     try {
  //       const answer = await isVictorCrazy(); // await wait for the promise to resolve
  //       console.log(answer);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   askQuestion();
  //   console.log("working code...");

  //   // async await - homw work

  //   //#region 1. create a function named compareToTen, accepts a number as a parameter (num)

  //   function ToTenPromise(num) {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         switch (true) {
  //           case num > 10:
  //             resolve("YAY");
  //             break;
  //           case num <= 10:
  //             reject(new Error("NAY"));
  //             break;
  //         }
  //       }, 5000);
  //     });
  //   }
  //   async function compareToTen(num) {
  //     try {
  //       const resolved = await ToTenPromise(num);
  //       console.log(resolved);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   const randNum = Math.floor(Math.random() * 21) - 1;
  //   console.log(randNum);
  //   compareToTen(randNum);
  //   //#endregion

  //   //#region

  //   //#region 2. create a function named arrayCounter which accepts an array (arr) as a parameter
  //   function arrayCounterPromise(arr) {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         switch (true) {
  //           case arr.length < 5:
  //             reject(new Error("array is too short"));

  //             break;
  //           case arr.length >= 5:
  //             resolve("array is too long");
  //         }
  //       }, 2000);
  //     });
  //   }
  //   async function arrayCounter(arr) {
  //     try {
  //       const resolved = await arrayCounterPromise(arr);
  //       console.log(resolved);
  //       const ul = document.createElement("ul");
  //       for (const element of arr) {
  //         const li = document.createElement("li");
  //         li.append(element);
  //         ul.appendChild(li);
  //       }
  //       const div = document.querySelector("#ok");
  //       div.appendChild(ul);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   const data = [1, 2, 3, 4];
  //   arrayCounter(data);
  //   //#endregion

  //   //#region 3. create two Promise objects (p1, p2) which:
  //   const p2 = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (true) resolve("p2");
  //     }, 1000);
  //   });

  //   const p1 = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (true) resolve("p1");
  //     }, 1000);
  //   });
  //   Promise.all([p1, p2]).then((Object) => {
  //     console.log(Object);
  //     console.log(Object[0]);
  //     console.log(Object[1]);
  //   });
  //   //#endregion
  //   //#region 4. create a function named getDog which accepts a number as a parameter (num)
  //   function getDogPromise(num) {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         switch (true) {
  //           case num % 2 === 0:
  //             resolve("dog");
  //             break;
  //           case num % 2 === 1:
  //             reject(new Error("cat"));
  //             break;
  //         }
  //       }, 5000);
  //     });
  //   }
  //   async function getDog(num) {
  //     try {
  //       const resolved = await getDogPromise(num);
  //       console.log(resolved);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getDog(randNum);
  //   //#endregion

  //   //#region 5. do the same as the previous exercise (4), but...

  //   const getRandom = (num) => {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         const randNum = Math.floor(Math.random() * (num + 1)) + 1;
  //         resolve(randNum);
  //       }, 1000);
  //     });
  //   };

  //   async function awaitGetDog() {
  //     const random = await getRandom(10);
  //     const resolved = await getDogPromise(random);
  //     console.log(resolved);
  //   }
  //   awaitGetDog();
  //   getRandom(10)
  //     .then((res) => {
  //       console.log(res);
  //       return getDogPromise(res);
  //     })
  //     .then((dogRes) => {
  //       console.log(dogRes);
  //     });
  //#endregion

  //#region B. Practice Async Await Challange:
  //#region 1
  const houseAddressProm = () => {
    return new Promise((resolve, reject) => {
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
  };
  const clientProm = () => {
    return new Promise((resolve, reject) => {
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
  };
  const halvaaTypeProm = () => {
    return new Promise((resolve, reject) => {
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
  };

  const tamhilimProm = () => {
    return new Promise((resolve, reject) => {
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
  };

  const shukProm = () => {
    return new Promise((resolve, reject) => {
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
  };
})();
