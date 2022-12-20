(function (window, document) {
  // Easy
  //#region 1.
  function elementSet(value) {
    return value.forEach((element) => {
      console.log(element);
    });
  }
  const first = new Set();
  first.add(1);
  elementSet(first);
  //#endregion;

  //#region 2.1
  // What does the following code return?
  const set = new Set([1, 1, 2, 2, 3, 4]); // => [1,2,3,4], no doplicite number in set
  console.log(set);

  //#endregion

  //#region 2.2
  // What does the following code return?
  const set2 = [...new Set("referee")].join(""); // => ref, no doplicite string in set
  console.log(set2);
  //#endregion

  //#region 3
  let m = new Map();
  m.set([1, 2, 3], true);
  m.set([1, 2, 3], false);
  //=> {Array(3) => true, Array(3) => false}, Because of all array is in different locotion in the Memory
  console.log(m);
  //#endregion

  //#region 3. hasDuplicate

  function hasDuplicate(arr) {
    const set = new Set(arr);
    const rtnArr = Array.from(set);
    console.log(arr);
    console.log(rtnArr);
    const result = rtnArr.length === arr.length ? false : true;
    return result;
  }
  console.log(hasDuplicate([1, 3, 2, 1]));
  //#endregion
  const arrbooks = [
    {
      title: "It Ends With Us",
      imageUrl:
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4711/9781471156267.jpg",
      author: " Colleen Hoover",
      year: "2016",
      ISBN: "9781471156267",
    },
    {
      title: "Before the Coffee Gets Cold",
      imageUrl:
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5290/9781529029581.jpg",
      author: " Colleen Hoover",
      year: "2016",
      ISBN: "9781471156267",
    },
    {
      title: "Verity ",
      imageUrl:
        "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4087/9781408726600.jpg",
      author: " Toshikazu Kawaguchi , Translated by  Geoffrey Trousselot",
      year: "2019",
      ISBN: "9781529029581",
    },
  ];

  const books = document.querySelector("#books");

  for (const book of arrbooks) {
    const div = document.createElement("div");
    div.classList.add("bookCss");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const p_year = document.createElement("p");
    const p_ISBN = document.createElement("p");
    const image = document.createElement("img");

    image.src = book.imageUrl;
    h1.append(book.title);
    h2.append(book.author);
    p_year.append(`Publication date: ${book.year}`);
    p_ISBN.append(`ISBN13: ${book.ISBN}`);

    books.appendChild(div);
    div.appendChild(image);
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(p_year);

    div.appendChild(p_ISBN);
  }
  //#endregion

  //   Medium

  //#region 1. Vowel Count
  function vowelCount(str) {
    const newArr = str.split("");
    console.log(newArr);
    let myMap = new Map();
    // console.log(myMap);
    let counter1 = 1;
    let counter2 = 1;
    let counter3 = 1;
    let counter4 = 1;
    let counter5 = 1;

    for (const Letter of newArr) {
      if (Letter === "a") {
        myMap.set(Letter, counter1);
        counter1++;
      }
    }
    for (const Letter of newArr) {
      if (Letter === "e") {
        myMap.set(Letter, counter2);
        counter2++;
      }
    }
    for (const Letter of newArr) {
      if (Letter === "i") {
        myMap.set(Letter, counter3);
        counter4++;
      }
    }
    for (const Letter of newArr) {
      if (Letter === "o") {
        myMap.set(Letter, counter4);
        counter4++;
      }
    }
    for (const Letter of newArr) {
      if (Letter === "u") {
        myMap.set(Letter, counter5);
        counter5++;
      }
    }

    return myMap;
  }
  console.log(vowelCount("awesome"));
  //#endregion
})(window, document);
