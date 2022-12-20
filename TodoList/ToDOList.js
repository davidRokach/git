(function () {
  //#region input button
  const button = document.querySelector("#toDoB");
  button.addEventListener("click", () => {
    //#endregion

    //#region create element in const
    const ulList = document.querySelector("#ulList");
    const input = document.querySelector("#inputToDo");
    const ul = document.createElement("ul");
    const span = document.createElement("span");
    const li = document.createElement("li");
    const p = document.createElement("p");
    const quote = document.createElement("quote");
    //#endregion

    //#region order the cildren element
    li.appendChild(p);
    li.appendChild(span);
    li.appendChild(quote);
    ul.appendChild(li);
    ulList.appendChild(ul);
    //#endregion

    //#region button line-through
    p.append(input.value);
    input.value = " ";
    span.append(`🟩`);

    span.addEventListener("click", () => {
      if (!p.classList.contains("sapnClick")) {
        p.classList.add("sapnClick");
        span.innerText = `✅`;
      } else {
        p.classList.remove("sapnClick");
        span.innerText = `🟩`;
      }
    });
    //#endregion

    //#region button remove li
    quote.append(`❌`);
    quote.classList.add("remove");
    quote.addEventListener("click", ($event) =>
      $event.target.parentElement.remove()
    );
    //#endregion
  });
})();
