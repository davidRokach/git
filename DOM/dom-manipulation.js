(function () {
  let result = '<table border="1">';
  for (let i = 1; i <= 10; i++) {
    result += `<tr>  `;
    for (let j = 1; j <= 10; j++) {
      result += `<td> ${i * j} </td> `;
    }
    result += `</tr>  `;
  }

  result += "</table>";

  document.querySelector("#loch-acfel").innerHTML = result;
  // ---------------------------
  const LightSaber = [
    "red",
    "green",
    "blue",
    "yellow",
    "pink",
    "purple",
    "orange",
    "black",
    "white",
    "gray",
  ];

  let resultColor = `<ul>`;
  LightSaber.forEach((color) => {
    resultColor += `<li style="color:${color} ">${color} </li>`;
  });

  resultColor += `</ul>`;

  document.querySelector("#LightSaber").innerHTML = resultColor;
  // HW

  // Exercise 1
  const r = document.querySelector("#r");
  const g = document.querySelector("#g");
  const b = document.querySelector("#b");
  const imple = () => {
    let bgColor = `<div style="width: 50vw; height: 100px; border: solid 2px black; border-radius:35px ; background-color: rgb(${r.value},${g.value},${b.value})"></div>`;

    document.querySelector("#colorList").innerHTML = bgColor;
  };
  imple();
  r.addEventListener("input", imple);
  g.addEventListener("input", imple);
  b.addEventListener("input", imple);

  // Exercise 2

  // let resultText = " ";
  // const r = document.querySelector("#r");
  // const g = document.querySelector("#g");
  // const b = document.querySelector("#b");
  const live = () => {
    let resultText = " ";
    const text = document.querySelector("#text").innerText;
    const textArray = text.split(" ");
    console.log(textArray);
    const textArrayRedu = textArray.reduce(function (acc, word) {
      if (word.length > 7) {
        return (
          acc +
          ` <strong style="color: rgb(${r.value}, ${g.value}, ${b.value});">${word}</strong>`
        );
      } else {
        return acc + ` ${word}`;
      }
    }, " ");
    console.log(textArrayRedu);

    resultText += textArrayRedu;

    document.querySelector("#text").innerHTML = resultText;
  };
  live();
  r.addEventListener("input", live);
  g.addEventListener("input", live);
  b.addEventListener("input", live);

  // const colorizeText = document.querySelector("#colorizeText");
  // colorizeText.addEventListener("click", colorizeTextFun);

  // -----------------------------
})();
