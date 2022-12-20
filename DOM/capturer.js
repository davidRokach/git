(function () {
  // const handler
  const clickBtn = document.querySelector("#clickBtn");
  clickBtn.addEventListener("click", ($event) => {
    console.log(`click button`);
    alert(`click button`);
  });
  const red = document.querySelector("#red");
  red.addEventListener("click", ($event) => {
    console.log(`click red`);
    alert(`click red`);
  });
  const blue = document.querySelector("#blue");
  blue.addEventListener("click", ($event) => {
    console.log(`click blue`);
    alert(`click blue`);
    $event.stopPropagation();
  });
  const green = document.querySelector("#green");
  green.addEventListener("click", ($event) => {
    console.log(`click green`);
    alert(`click green`);
  });

  setTimeout(() => {
    blue.remove;
  }, 5000);

  // HomeWork
  const alertButton = document.querySelector("#alert");
  alertButton.addEventListener("click", ($event) => {
    alert(`button one`);
    $event.stopImmediatePropagation();
  });
  alertButton.addEventListener("click", ($event) => alert(`button two`));

  const alertdiv = document.querySelector("#alert-div");
  alertdiv.addEventListener("click", ($event) => alert(`div`));
  const alertP = document.querySelector("#alert-p");
  alertP.addEventListener("click", ($event) => alert(`p`));

  const select = document.querySelector("#select");
  select.addEventListener("change", (event) => {
    console.log(`${event.target.value}`);
  });
})();
