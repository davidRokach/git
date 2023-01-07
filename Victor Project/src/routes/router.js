import {
  ABOUT_PAGE,
  ADD_PIC_PAGE,
  error_Page,
  HOME_PAGE,
  LOGIN_PAGE,
  SINGUP_PAGE,
} from "../services/domService.js";
import PAGES from "../models/pageModel.js";

export const onChangePage = (page) => {
  HOME_PAGE.className = "d-none";
  ABOUT_PAGE.className = "d-none";
  ADD_PIC_PAGE.className = "d-none";
  LOGIN_PAGE.className = "d-none";
  SINGUP_PAGE.className = "d-none";
  error_Page.className = "d-none";

  switch (page) {
    case PAGES.HOME:
      HOME_PAGE.className = "d-block";
      break;
    case PAGES.ABOUT:
      ABOUT_PAGE.className = "d-block";
      break;
    case PAGES.ADD_PIC:
      ADD_PIC_PAGE.className = "d-block";
      break;
    case PAGES.LOGIN:
      LOGIN_PAGE.className = "d-block";
      break;
    case PAGES.SIGNUP:
      SINGUP_PAGE.className = "d-block";
      break;
    default:
      error_Page.className = "d-block";
      break;
  }
};
