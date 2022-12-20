(function () {
  function colorLightSaber() {
    const li = document.querySelector("body > ul > li:nth-child(1)");
    console.log(li);
    // 1. get and print the h1 element
    const h1 = document.querySelector("h1");
    console.log("h1", h1);

    // 2. get and print all the even li elements
    const evenLi = document.querySelectorAll("ul > li:nth-child(even)");
    evenLi.forEach((li) => (li.style.color = "blue"));

    // 3. get the h1 element and print it's 'innerText'
    console.log("h1.innerText", h1.innerText);

    // 4. color all the li elements with the color that is in innerText
    const colorLi = document.querySelectorAll("ul > li");
    colorLi.forEach((li) => (li.style.color = li.innerText));
  }

  const btn = document.querySelector("#btn");
  btn.addEventListener("click", colorLightSaber);

  //   exercise 1

  const inputText = document.querySelector("#inputText");
  const output = document.querySelector("#outputText");

  inputText.addEventListener("keyup", ($e) => {
    output.innerText = $e.target.value;
  });

  //   exercise 2
  function bgChangeFun() {
    const colors = [
      "red",
      "green",
      "blue",
      "yellow",
      "pink",
      "purple",
      "orange",
      "black",
      "white",
    ];

    document.body.style.backgroundColor = colors[Math.floor(Math.random() * 9)];
  }

  const changeColor = document.querySelector("#bgChange");
  changeColor.addEventListener("click", bgChangeFun);

  //   exercise 3

  function increaseNumFun() {
    let num = parseInt(increaseNumber.innerText);
    increaseNumber.innerText = num + 1;
  }

  const increaseNumber = document.querySelector("#increaseNum");
  increaseNumber.addEventListener("click", increaseNumFun);

  //   exercise 4

  const trs = document.querySelectorAll("table#calc-table  tr");

  function buttonSumFun() {
    trs.forEach((tr) => {
      console.log(tr);
      const tds = tr.querySelectorAll("th");
      let sum = 0;
      //   const tdsArr = Array.from(tds);
      tds.forEach((td) => {
        const num = +td.innerText;
        sum += num;
      });
      tds[tds.length - 1].innerText = sum;
    });
  }
  const buttonSum = document.querySelector("#sum");
  buttonSum.addEventListener("click", buttonSumFun);
})();
