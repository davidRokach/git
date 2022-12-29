import {
  ABOUT_PAGE_LINK,
  ADD_PIC_PAGE_LINK,
  HOME_PAGE_LINK,
  LOGIN_PAGE_LINK,
  RETURE_HOME_PAGE_LINK,
  slider_next_btn,
  slider_prev_btn,
} from "./services/domService.js";
import PAGES from "./models/pageModel.js";
import { onChangePage } from "./routes/router.js";
import { renderSlider as render } from "./services/renderSlider.js";
import { setCounter } from "./services/picService.js";
import Initialdata from "./initialData/initialData.js";

//#region הגדרת משתנים גלובליים
let { pictures } = Initialdata();
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
ADD_PIC_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ADD_PIC));
RETURE_HOME_PAGE_LINK.addEventListener("click", () =>
  onChangePage(PAGES.ERROR_404)
);

slider_next_btn.addEventListener("click", () => {
  onChangeSliderPic("next");
});
slider_prev_btn.addEventListener("click", () => onChangeSliderPic("prev"));

//#endregion
