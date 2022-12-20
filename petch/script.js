import { fetchData } from "./dataAccess.js";

//#region
const responseFetch = fetch("https://jsonplaceholder.typicode.com/posts");
//     .then((response) => response.json())
//     .then((json) => console.log(json));

async function responseFetchFun() {
  const response = await responseFetch;
  const json = await response.json();
  console.log(json);
}
responseFetchFun();

// *******************************
const CreatingResource = fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

async function CreatingResourceFun() {
  const response = await CreatingResource;
  const json = await response.json();
  console.log(json);
}
CreatingResourceFun();
//******************************* */
const UpdatingResource = fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

async function UpdatingResourceFun() {
  const response = await UpdatingResource;
  const json = await response.json();
  console.log(json);
}
UpdatingResourceFun();
//******************************* */
//#endregion

// function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     resolve(fetch(url));
//   });
// }

//#region 3
const rand = Math.floor(Math.random() * 10) + 1;
console.log(rand);

const url = `https://jsonplaceholder.typicode.com/users/${rand}`;
async function fetchDataFun(url) {
  const response = await fetchData(url);
  const json = await response.json();
  return json;
}
const resolve = await fetchDataFun(url);
console.log(resolve);

function createUserHtmlElement(user) {
  const divCard = document.createElement("div");
  divCard.classList.add("card");
  divCard.style = "width: 22rem";

  const divBody = document.createElement("div");
  divBody.classList.add("card-body");
  divBody.style.textAlign = "center";

  const id = user.id;
  const img = document.createElement("img");
  img.src = `https://randomuser.me/api/portraits/men/${id}.jpg`;

  img.classList.add("card-img-top");

  const Name = document.createElement("h5");
  Name.append(user.name);
  Name.classList.add("card-title");

  const ul = document.createElement("ul");
  ul.classList.add("list-group");
  ul.classList.add("list-group-flush");

  const liPhone = document.createElement("li");
  liPhone.classList.add("list-group-item");
  liPhone.append(`phone number: ${user.phone}`);

  const liEmail = document.createElement("li");
  liEmail.classList.add("list-group-item");
  liEmail.append(`email: ${user.email}`);

  const liCity = document.createElement("li");
  liCity.classList.add("list-group-item");
  liCity.append(`city: ${user.address.city}`);

  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.classList.add("btn-primary");
  btn.append("click here >>>");
  btn.style.marginTop = "10px";

  const postId = `https://jsonplaceholder.typicode.com/user/${id}/posts`;

  const postFun = async function (post) {
    const response = await fetchData(post);
    const json = await response.json();
    console.log(json);

    const ulPost = document.createElement("ol");
    ulPost.classList.add("list-group");
    ulPost.classList.add("list-group-numbered");

    for (const post of json) {
      const liPost = document.createElement("li");
      liPost.classList.add("list-group-item");

      liPost.append(post.title);
      ulPost.appendChild(liPost);
    }
    ul.appendChild(ulPost);
    ulPost.style.display = "none";

    btn.addEventListener("click", (e) => {
      ulPost.classList.toggle("postRemove");
    });
  };
  postFun(postId);
  // document.body.appendChild(divCard);
  divCard.appendChild(img);
  divCard.appendChild(divBody);
  divBody.appendChild(Name);
  divBody.appendChild(ul);
  ul.appendChild(liPhone);
  ul.appendChild(liEmail);
  ul.appendChild(liCity);
  ul.appendChild(btn);

  return divCard;
}
// createUserHtmlElement(resolve);
//#endregion 3

const urlUsers = `https://jsonplaceholder.typicode.com/users/`;
async function fetchDataFun2(url) {
  const response = await fetchData(url);
  const json = await response.json();
  return json;
}
const resolveUsers = await fetchDataFun2(urlUsers);

console.log(resolveUsers);

const divContainer = document.createElement("div");
divContainer.classList.add("container");
const divRow = document.createElement("div");
divRow.classList.add("row");

divContainer.appendChild(divRow);
document.body.appendChild(divContainer);

for (const user of resolveUsers) {
  const divCol = document.createElement("div");
  divCol.classList.add("col-4");
  divRow.appendChild(divCol);

  divCol.append(createUserHtmlElement(user));
}
