const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com",
  },
};

fetch("https://unogs-unogs-v1.p.rapidapi.com/search/deleted", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
