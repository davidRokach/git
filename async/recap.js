(function () {
  const longElem = document.querySelector("#long-operation");
  const uiBtn = document.querySelector("#show-ui-or-console");
  const listElem = document.querySelector("#list");

  uiBtn.addEventListener("click", () => {
    listElem.classList.toggle("d-none");
  });

  longElem.addEventListener("click", () => {
    const prom = new Promise((resolve, reject) => {
      const start = Date.now(); // epoch time in millisecond
      for (let index = 0; index < 2e9; index++) {
        // do nothing
      }
      const end = Date.now();
      resolve(`Time taken: ${end - start}ms`);
    });
    prom.then((res) => {
      console.log(res);
    });
  });
})();
