import { handleSubmitNewPic } from "../app.js";
import PAGES from "../models/pageModel.js";
import Picture from "../models/pictureModel.js";
import { onChangePage } from "../routes/router.js";
import {
  ALT_CREATE_PIC,
  ALT_ERROR_PIC,
  CANCEL_BTN,
  CREDIT_CREATE_PIC,
  CREDIT_ERROR_PIC,
  PRICE_CREATE_PIC,
  PRICE_ERROR_PIC,
  SUBMIT_CREATE_PIC_BTN,
  URL_CREATE_PIC,
  URL_ERROR_PIC,
} from "./domService.js";
import useForm from "./formService.js";
import { setItemInLocalStorage } from "./localStorageService.js";

//#region Navigation in the photo menu
export const setCounter = (array, conter, controller = " ") => {
  let newCounter;
  if (controller === "next") {
    newCounter = conter < array.length - 1 ? conter + 1 : 0;
    return newCounter;
  }
  if (controller === "prev") {
    newCounter = conter > 0 ? conter - 1 : array.length - 1;
    return newCounter;
  }
  return 0;
};
//#endregion

// craete new pic

export const handleCreatePic = () => {
  // הגענו לדף
  onChangePage(PAGES.ADD_PIC);

  // להרשם לאירועי הזנת המידע בשדות
  createPicFromFieldsListeners();

  const cancelEH = () => {
    const conf = confirm("Are you sure you want to cancel?");
    if (conf) handleCancelCreatePic();
  };

  CANCEL_BTN.removeEventListener("click", cancelEH);
  CANCEL_BTN.addEventListener("click", cancelEH);

  SUBMIT_CREATE_PIC_BTN.removeEventListener("click", handleSubmitNewPic);
  SUBMIT_CREATE_PIC_BTN.addEventListener("click", handleSubmitNewPic);
};

export const createPicFromFieldsListeners = () => {
  const { onChangeInputField } = useForm();
  const schema = ["url", "price", "alt", "credit"];
  URL_CREATE_PIC.addEventListener("input", (e) => {
    const validation = {
      regex: /^http[s]?\:\/\/.{1,}.(jpg|png|jpeg)$/g,
      min: 10,
      lowerCase: true,
    };

    const element = {
      input: e.target,
      errorSpan: URL_ERROR_PIC,
      validation,
    };

    onChangeInputField(schema, element, SUBMIT_CREATE_PIC_BTN);
  });

  PRICE_CREATE_PIC.addEventListener("input", (e) => {
    const validation = {
      regex: /^\d+$/g,
      numMin: 100,
    };

    const element = {
      input: e.target,
      errorSpan: PRICE_ERROR_PIC,
      validation,
    };
    onChangeInputField(schema, element, SUBMIT_CREATE_PIC_BTN);
  });

  ALT_CREATE_PIC.addEventListener("input", (e) => {
    const validation = {
      regex: /^\w+$/g,
      min: 1,
    };

    const element = {
      input: e.target,
      errorSpan: ALT_ERROR_PIC,
      validation,
    };
    onChangeInputField(schema, element, SUBMIT_CREATE_PIC_BTN);
  });

  CREDIT_CREATE_PIC.addEventListener("input", (e) => {
    const validation = {
      regex: /^\w+$/g,
      min: 1,
    };

    const element = {
      input: e.target,
      errorSpan: CREDIT_ERROR_PIC,
      validation,
    };
    onChangeInputField(schema, element, SUBMIT_CREATE_PIC_BTN);
  });
};

export const handleCancelCreatePic = () => {
  const { onClearFormFields } = useForm();
  const field = [
    URL_CREATE_PIC,
    ALT_CREATE_PIC,
    CREDIT_CREATE_PIC,
    PRICE_CREATE_PIC,
  ];
  const errorSpans = [
    URL_ERROR_PIC,
    ALT_ERROR_PIC,
    CREDIT_ERROR_PIC,
    PRICE_ERROR_PIC,
  ];

  onClearFormFields(SUBMIT_CREATE_PIC_BTN, field, errorSpans);
  onChangePage(PAGES.HOME);
};

export const onCreateNewPic = (pictures) => {
  try {
    let newArray = [...pictures];
    const pic = new Picture(
      {
        url: URL_CREATE_PIC.value,
        alt: ALT_CREATE_PIC.value,
        credits: CREDIT_CREATE_PIC.value,
        price: PRICE_CREATE_PIC.value,
      },
      newArray
    );
    newArray.push(pic);

    setItemInLocalStorage("pictures", JSON.stringify(newArray));
    return newArray;
  } catch (e) {
    console.log(e.massage);
  }
};
