import {
  ABOUT_PAGE_LINK,
  ADD_PIC_PAGE_LINK,
  HOME_PAGE_LINK,
  LOGIN_PAGE_LINK,
  RETURE_HOME_PAGE_LINK,
  SINGUP_PAGE_LINK,
  slider_next_btn,
  slider_prev_btn,
  SUBMIT_CREATE_PIC_BTN,
} from "./services/domService.js";
import PAGES from "./models/pageModel.js";
import { onChangePage } from "./routes/router.js";
import { renderSlider as render } from "./services/renderSlider.js";
import {
  handleCancelCreatePic,
  handleCreatePic,
  onCreateNewPic,
  setCounter,
} from "./services/picService.js";
import User from "./models/userModel.js";
import Initialdata from "./initialData/initialData.js";
import { handleSingUp } from "./services/userService.js";

//#region הגדרת משתנים גלובליים
let { pictures, users } = Initialdata();
console.log(pictures);
console.log(users);
let counter = 0;
//#endregion

// אתחול הצגה ראשונית
render(pictures);

//slider logic
const onChangeSliderPic = (controler) => {
  counter = setCounter(pictures, counter, controler);
  render(pictures, counter);
};

//#region האזנה לאירועים
HOME_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ABOUT));
LOGIN_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.LOGIN));
SINGUP_PAGE_LINK.addEventListener("click", () => handleSingUp());

ADD_PIC_PAGE_LINK.addEventListener("click", () => handleCreatePic());
RETURE_HOME_PAGE_LINK.addEventListener("click", () =>
  onChangePage(PAGES.ERROR_404)
);
// מצגת תמונות
slider_next_btn.addEventListener("click", () => {
  onChangeSliderPic("next");
});
slider_prev_btn.addEventListener("click", () => onChangeSliderPic("prev"));

//#endregion

export const handleSubmitNewPic = () => {
  pictures = onCreateNewPic(pictures);
  console.log(pictures);
  handleCancelCreatePic();
};

//#endregion
