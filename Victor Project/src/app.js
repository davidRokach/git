import {
  ABOUT_PAGE_LINK,
  ADD_PIC_PAGE_LINK,
  CARDS_ICON,
  HOME_PAGE_LINK,
  LINK_TO_SIGNUP_PAGE,
  LOGIN_PAGE_LINK,
  RETURE_HOME_PAGE_LINK,
  SINGUP_PAGE_LINK,
  SLIDER_ICON,
  slider_next_btn,
  slider_prev_btn,
  SUBMIT_CREATE_PIC_BTN,
  TABLE_ICON,
} from "./services/domService.js";
import PAGES from "./models/pageModel.js";
import {
  onChangeDisplayMode,
  onChangePage,
  setNavDisplay,
} from "./routes/router.js";
import { renderSlider as render } from "./services/renderSlider.js";
import {
  handleCancelCreatePic,
  handleCreatePic,
  onCreateNewPic,
  setCounter,
} from "./services/picService.js";
import User from "./models/userModel.js";
import Initialdata from "./initialData/initialData.js";
import {
  handleCancelSingUp,
  handleLogin,
  handleSingUp,
  onCreateNewUser,
} from "./services/userService.js";
import DISPLAY from "./models/displayModel.js";
import { handleDisplayMode } from "./services/displayModeService.js";
import {
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
} from "./services/localStorageService.js";

//#region הגדרת משתנים גלובליים
let { users } = Initialdata();

console.log(users);
let counter = 0;
let pictures = [];

console.log(pictures);
let display;

//#endregion

//slider logic
const onChangeSliderPic = (controler) => {
  counter = setCounter(pictures, counter, controler);
  render(pictures, counter);
};

//#region האזנה לאירועים
// ניתוב דפים
HOME_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ABOUT));
LOGIN_PAGE_LINK.addEventListener("click", () => {
  let { users } = Initialdata();
  handleLogin(users);
});
SINGUP_PAGE_LINK.addEventListener("click", () => handleSingUp());

ADD_PIC_PAGE_LINK.addEventListener("click", () => handleCreatePic());
RETURE_HOME_PAGE_LINK.addEventListener("click", () =>
  onChangePage(PAGES.ERROR_404)
);
LINK_TO_SIGNUP_PAGE.addEventListener("click", () => handleSingUp());
// מצגת תמונות
slider_next_btn.addEventListener("click", () => {
  onChangeSliderPic("next");
});
slider_prev_btn.addEventListener("click", () => onChangeSliderPic("prev"));

// בקרי תצוגה
TABLE_ICON.addEventListener("click", () =>
  onChangeDisplayMode(pictures, DISPLAY.TABLE)
);
SLIDER_ICON.addEventListener("click", () =>
  onChangeDisplayMode(pictures, DISPLAY.SLIDER)
);

//#endregion

//#region create New Pic
export const handleSubmitNewPic = () => {
  pictures = onCreateNewPic(pictures);
  console.log(pictures);
  render(pictures, counter);
  handleCancelCreatePic();
  display = handleDisplayMode(pictures, DISPLAY.TABLE);
};

//#endregion

//#region Signup new User
export const handleSubmitNewUser = () => {
  users = onCreateNewUser(users);
  console.log(users);
  // clear field
  handleCancelSingUp();
  // return to login page
};
//#endregion

//#region Change Display Mode
TABLE_ICON.addEventListener(
  "click",
  () => (display = handleDisplayMode(pictures, DISPLAY.TABLE))
);
SLIDER_ICON.addEventListener(
  "click",
  () => (display = handleDisplayMode(pictures, DISPLAY.SLIDER))
);
CARDS_ICON.addEventListener(
  "click",
  () => (display = handleDisplayMode(pictures, DISPLAY.CARDS))
);

//#endregion

//#region Change Display Mode
// אתחול הצגה ראשונית

setNavDisplay(); // בדיקה עם היוזר מחובר
onChangePage(PAGES.HOME);
onChangeDisplayMode(pictures, DISPLAY.SLIDER);
onChangeSliderPic();
render(pictures);
//#endregion
