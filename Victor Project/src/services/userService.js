import PAGES from "../models/pageModel.js";
import { onChangePage } from "../routes/router.js";
import {
  CANCEL_SING_UP_BTN,
  FIRST_NAME_ERROR_SIGN_UP,
  FIRST_NAME_SIGN_UP,
  SUBMIT_SING_UP_BTN,
} from "./domService.js";
import useForm from "./formService.js";

export const handleSingUp = () => {
  // הגענו לדף
  onChangePage(PAGES.SIGNUP);

  // להרשם לאירועי הזנת המידע בשדות
  singUpforfieldsListeners();

  const cancelEH = () => {
    const conf = confirm("Are you sure you want to cancel?");
    if (conf) handleCancelSingUp();
  };

  CANCEL_SING_UP_BTN.removeEventListener("click", cancelEH);
  CANCEL_SING_UP_BTN.addEventListener("click", cancelEH);

  SUBMIT_SING_UP_BTN.removeEventListener("click", handleSubmitNewPic);
  SUBMIT_SING_UP_BTN.addEventListener("click", handleSubmitNewPic);
};

export const singUpforfieldsListeners = () => {
  const { onChangeInputField } = useForm();
  const schema = ["first-name"];
  FIRST_NAME_SIGN_UP.addEventListener("input", (e) => {
    const validation = {
      regex: /^\w+$/,
      min: 2,
    };
    const element = {
      input: e.target,
      errorSpan: FIRST_NAME_ERROR_SIGN_UP,
      validation,
    };
    onChangeInputField(schema, element, SUBMIT_SING_UP_BTN);
  });
};

export const handleCancelSingUp = () => {};
