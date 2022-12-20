const names = [
  "Luke Skywalker",
  "C-3PO",
  "Darth Vader",
  "Leia Organa",
  "Owen Lars",
  "Beru Whitesun lars",
  "R5-D4",
  "Biggs Darklighter",
  "Obi-Wan Kenobi",
];
const liNames = document.querySelector("#starwarsNames");
const ul = document.createElement("ul");

for (let index = 0; index < names.length; index++) {
  const img = document.createElement("img");
  const li = document.createElement("li");
  const p = document.createElement("p");
  li.appendChild(p);
  p.append(names[index]);
  img.src = `https://starwars-visualguide.com/assets/img/characters/${
    index + 1
  }.jpg`;

  li.appendChild(img);

  p.addEventListener("mouseover", () => img.classList.add("imgHover"));

  p.addEventListener("mouseout", () => img.classList.remove("imgHover"));

  ul.appendChild(li);
}
liNames.appendChild(ul);
