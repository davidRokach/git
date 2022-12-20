import {
  ABOUT_PAGE_LINK,
  ADD_PIC_PAGE_LINK,
  HOME_PAGE_LINK,
  LOGIN_PAGE_LINK,
} from "./services/domService.js";
import PAGES from "./models/pageModel.js";
import { onChangePage } from "./routes/router.js";

//#region האזנה לאירועים
HOME_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ABOUT));
LOGIN_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.LOGIN));
ADD_PIC_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ADD_PIC));

//#endregion
