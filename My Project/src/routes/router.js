import PAGES from "../models/pageModel.js";
import {
  about_page,
  home_page,
  login_page,
  singup_page,
  movie_page,
} from "../services/domService.js";

export const onClickPage = (page) => {
  home_page.className = "d-none";
  about_page.className = "d-none";
  login_page.className = "d-none";
  singup_page.className = "d-none";
  movie_page.className = "d-none";
  switch (page) {
    case PAGES.HOME:
      home_page.className = "d-block";
      break;
    case PAGES.ABOUT:
      about_page.className = "d-block";
      break;
    case PAGES.LOGIN:
      login_page.className = "d-block";
      break;
    case PAGES.singup:
      singup_page.className = "d-block";
      break;
    case PAGES.movie:
      movie_page.className = "d-block";
      break;

    default:
      break;
  }
};
