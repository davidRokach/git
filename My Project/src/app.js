import PAGES from "./models/pageModel.js";
import { onClickPage } from "./routes/router.js";
import {
  about_link,
  add_movie_link,
  home_link,
  Login_link,
  singup_link,
} from "./services/domService.js";

home_link.addEventListener("click", () => {
  onClickPage(PAGES.HOME);
});
about_link.addEventListener("click", () => {
  onClickPage(PAGES.ABOUT);
});
Login_link.addEventListener("click", () => {
  onClickPage(PAGES.LOGIN);
});
singup_link.addEventListener("click", () => {
  onClickPage(PAGES.singup);
});
add_movie_link.addEventListener("click", () => {
  onClickPage(PAGES.add_movie);
});
