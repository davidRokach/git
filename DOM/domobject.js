(function (window, document) {
  const lightSabers = document.querySelector("#lightSabers");
  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "pink",
    "purple",
    "orange",
    "black",
    "brown",
  ];
  const ul = document.createElement("ul");

  for (let index = 0; index < colors.length; index++) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const quote = document.createElement("quote");
    li.appendChild(span);
    span.append(colors[index]);
    span.appendChild(quote);
    quote.append("❌");

    quote.addEventListener("mouseover", () => quote.classList.add("danger"));

    quote.addEventListener("mouseout", () => quote.classList.remove("danger"));

    quote.addEventListener("click", ($event) =>
      $event.target.parentElement.parentElement.remove()
    );
    // quote.classList.add("danger");
    li.style.color = colors[index];
    ul.appendChild(li);
  }
  lightSabers.appendChild(ul);

  //   lightSabers.append(`<ul>
  //     <li> red </li>
  //     </ul>`);
})(window, document);
