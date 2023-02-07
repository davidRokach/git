import {
  ABOUT_PAGE,
  ADD_PIC_LINK_CONTAINER,
  ADD_PIC_PAGE,
  CARDS_DISPLAY_MODE,
  DATA_CONTAINER,
  error_Page,
  HOME_PAGE,
  LOGIN_LINK_CONTAINER,
  LOGIN_PAGE,
  LOGOUT_LINK_CONTAINER,
  NO_DATA_CONTAINER,
  SINGUP_PAGE,
  SLIDER_DISPLAY_MODE,
  TABLE_DISPLAY_MODE,
} from "../services/domService.js";
import PAGES from "../models/pageModel.js";
import { getItemFromLocalStorage } from "../services/localStorageService.js";
import DISPLAY from "../models/displayModel.js";

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

export const setNavDisplay = () => {
  ADD_PIC_LINK_CONTAINER.className = "d-none";
  const token = getItemFromLocalStorage("user");
  if (!token) {
    LOGIN_LINK_CONTAINER.className = "navbar-nav";
    LOGOUT_LINK_CONTAINER.className = "d-none";
    return;
  }
  LOGIN_LINK_CONTAINER.className = "d-none";
  LOGOUT_LINK_CONTAINER.className = "navbar-nav";
  const user = JSON.parse(token);
  if (user.isBusiness) return (ADD_PIC_LINK_CONTAINER.className = "nav-item");
};

export const onChangeDisplayMode = (pictures, display = []) => {
  NO_DATA_CONTAINER.className = "d-none";
  DATA_CONTAINER.className = "d-none";
  TABLE_DISPLAY_MODE.className = "d-none";
  SLIDER_DISPLAY_MODE.className = "d-none";
  CARDS_DISPLAY_MODE.className = `d-none`;

  if (!pictures.length) return (NO_DATA_CONTAINER.className = "d-block");
  DATA_CONTAINER.className = "d-block";

  switch (display) {
    case DISPLAY.SLIDER:
      return (SLIDER_DISPLAY_MODE.className = "d-block");
    case DISPLAY.TABLE:
      return (TABLE_DISPLAY_MODE.className = "d-block");
    case DISPLAY.CARDS:
      return (CARDS_DISPLAY_MODE.className = "d-block");
  }
};
