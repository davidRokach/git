import { handleSubmitNewUser } from "../app.js";
import PAGES from "../models/pageModel.js";
import User from "../models/userModel.js";
import { onChangePage, setNavDisplay } from "../routes/router.js";
import {
  BUSINESS_SIGN_UP,
  CANCEL_LOGIN_BTN,
  CANCEL_SING_UP_BTN,
  CITY_ERROR_SIGN_UP,
  CITY_SIGN_UP,
  COUNTRY_ERROR_SIGN_UP,
  COUNTRY_SIGN_UP,
  EMAIL_ERROR_SIGN_UP,
  EMAIL_LOGIN_ERROR,
  EMAIL_LOGIN_FIELD,
  EMAIL_SIGN_UP,
  FIRST_NAME_ERROR_SIGN_UP,
  FIRST_NAME_SIGN_UP,
  HOUSE_NUMBER_ERROR_SIGN_UP,
  HOUSE_NUMBER_SIGN_UP,
  LAST_NAME_ERROR_SIGN_UP,
  LAST_NAME_SIGN_UP,
  PASSWORD_ERROR_SIGN_UP,
  PASSWORD_LOGIN_ERROR,
  PASSWORD_LOGIN_FIELD,
  PASSWORD_SIGN_UP,
  PHONE_ERROR_SIGN_UP,
  PHONE_SIGN_UP,
  STATE_ERROR_SIGN_UP,
  STATE_SIGN_UP,
  STREET_ERROR_SIGN_UP,
  STREET_SIGN_UP,
  SUBMIT_LOGIN_BTN,
  SUBMIT_SING_UP_BTN,
  ZIP_ERROR_SIGN_UP,
  ZIP_SIGN_UP,
} from "./domService.js";
import useForm from "./formService.js";
import { setItemInLocalStorage } from "./localStorageService.js";

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

  SUBMIT_SING_UP_BTN.removeEventListener("click", handleSubmitNewUser);
  SUBMIT_SING_UP_BTN.addEventListener("click", handleSubmitNewUser);
};

export const singUpforfieldsListeners = () => {
  const { onChangeInputField } = useForm();
  const schema = [
    "first-Name",
    "Last-Name",
    "Phone",
    "Email",
    "State",
    "Country",
    "City",
    "Street",
    "House-number",
    "Zip",
    "Password",
  ];
  FIRST_NAME_SIGN_UP.addEventListener("input", (e) => {
    const validation = {
      regex: /^\w+$/g,
      min: 2,
    };
    const element = {
      input: e.target,
      errorSpan: FIRST_NAME_ERROR_SIGN_UP,
      validation,
    };
    onChangeInputField(schema, element, SUBMIT_SING_UP_BTN);
  });
  LAST_NAME_SIGN_UP.addEventListener("input", (e) => {
    const validation = {
      regex: /^\w+$/g,
      min: 2,
    };
    const element = {
      input: e.target,
      errorSpan: LAST_NAME_ERROR_SIGN_UP,
      validation,
    };
    onChangeInputField(schema, element, SUBMIT_SING_UP_BTN);
  });
  PHONE_SIGN_UP.addEventListener("input", (e) => {
    const validation = {
      regex: /^0[0-9]{1,2}(\-|\s?)[0-9]{3}(\-|\s?)[0-9]{4}/g,
      min: 9,
      max: 12,
    };
    const element = {
      input: e.target,
      errorSpan: PHONE_ERROR_SIGN_UP,
      validation,
    };
    onChangeInputField(schema, element, SUBMIT_SING_UP_BTN);
  });
  EMAIL_SIGN_UP.addEventListener("input", (e) => {
    const validation = {
      regex: /^.+@.+\..{2,}$/g,
      min: 5,
    };
    const element = {
      input: e.target,
      errorSpan: EMAIL_ERROR_SIGN_UP,
      validation,
    };
    onChangeInputField(schema, element, SUBMIT_SING_UP_BTN);
  });
  STATE_SIGN_UP.addEventListener("input", (e) => {
    const validation = {
      regex: /^\w[^\d]+$/g,
      min: 2,
    };
    const element = {
      input: e.target,
      errorSpan: STATE_ERROR_SIGN_UP,
      validation,
    };
    onChangeInputField(schema, element, SUBMIT_SING_UP_BTN);
  });
  COUNTRY_SIGN_UP.addEventListener("input", (e) => {
    const validation = {
      regex: /^\w[^\d]+$/g,
      min: 2,
    };
    const element = {
      input: e.target,
      errorSpan: COUNTRY_ERROR_SIGN_UP,
      validation,
    };
    onChangeInputField(schema, element, SUBMIT_SING_UP_BTN);
  });
  CITY_SIGN_UP.addEventListener("input", (e) => {
    const validation = {
      regex: /^\w[^\d]+$/g,
      min: 2,
    };
    const element = {
      input: e.target,
      errorSpan: CITY_ERROR_SIGN_UP,
      validation,
    };
    onChangeInputField(schema, element, SUBMIT_SING_UP_BTN);
  });
  STREET_SIGN_UP.addEventListener("input", (e) => {
    const validation = {
      regex: /\w*\s*\w*\s*\w*/g,
      min: 2,
    };
    const element = {
      input: e.target,
      errorSpan: STREET_ERROR_SIGN_UP,
      validation,
    };
    onChangeInputField(schema, element, SUBMIT_SING_UP_BTN);
  });
  HOUSE_NUMBER_SIGN_UP.addEventListener("input", (e) => {
    const validation = {
      regex: /^\d+$/g,
      min: 1,
    };
    const element = {
      input: e.target,
      errorSpan: HOUSE_NUMBER_ERROR_SIGN_UP,
      validation,
    };
    onChangeInputField(schema, element, SUBMIT_SING_UP_BTN);
  });
  ZIP_SIGN_UP.addEventListener("input", (e) => {
    const validation = {
      regex: /^\d+$/g,
      min: 5,
      max: 7,
    };
    const element = {
      input: e.target,
      errorSpan: ZIP_ERROR_SIGN_UP,
      validation,
    };
    onChangeInputField(schema, element, SUBMIT_SING_UP_BTN);
  });
  PASSWORD_SIGN_UP.addEventListener("input", (e) => {
    const validation = {
      regex: /\w+(?=\d{1})\w+(?=\d{1})\w+(?=\d{1})\w+(?=.*[!@#$%^&*-]{1})./g,
      min: 7,
      max: 20,
      upperCase: true,
      lowerCase: true,
    };
    const element = {
      input: e.target,
      errorSpan: PASSWORD_ERROR_SIGN_UP,
      validation,
    };
    onChangeInputField(schema, element, SUBMIT_SING_UP_BTN);
  });
};

export const handleCancelSingUp = () => {
  const { onClearFormFields } = useForm();
  const field = [
    FIRST_NAME_SIGN_UP,
    FIRST_NAME_SIGN_UP,
    PHONE_SIGN_UP,
    EMAIL_SIGN_UP,
    COUNTRY_SIGN_UP,
    STATE_SIGN_UP,
    CITY_SIGN_UP,
    STREET_SIGN_UP,
    HOUSE_NUMBER_SIGN_UP,
    ZIP_SIGN_UP,
    PASSWORD_SIGN_UP,
  ];
  const errorSpans = [
    FIRST_NAME_ERROR_SIGN_UP,
    LAST_NAME_ERROR_SIGN_UP,
    PHONE_ERROR_SIGN_UP,
    EMAIL_ERROR_SIGN_UP,
    STATE_ERROR_SIGN_UP,
    COUNTRY_ERROR_SIGN_UP,
    CITY_ERROR_SIGN_UP,
    STREET_ERROR_SIGN_UP,
    HOUSE_NUMBER_ERROR_SIGN_UP,
    ZIP_ERROR_SIGN_UP,
    PASSWORD_ERROR_SIGN_UP,
  ];

  onClearFormFields(SUBMIT_SING_UP_BTN, field, errorSpans);
  BUSINESS_SIGN_UP.checked = false;
  onChangePage(PAGES.HOME);
};
export const onCreateNewUser = (users) => {
  try {
    let newArray = [...users];
    const user = new User(
      {
        name: {
          first: FIRST_NAME_SIGN_UP.value,
          last: LAST_NAME_SIGN_UP.value,
        },
        address: {
          state: STATE_SIGN_UP.value,
          country: COUNTRY_SIGN_UP.value,
          city: CITY_SIGN_UP.value,
          street: STATE_SIGN_UP.value,
          houseNumber: HOUSE_NUMBER_SIGN_UP.value,
          zip: ZIP_SIGN_UP.value,
        },
        phone: PHONE_SIGN_UP.value,
        email: EMAIL_SIGN_UP.value,
        password: PASSWORD_SIGN_UP.value,
        isBusiness: BUSINESS_SIGN_UP.checked,
        isAdmin: false,
      },
      newArray
    );
    newArray.push(user);
    return newArray;
  } catch (e) {
    console.log(e.massage);
  }
};

//login

export const handleLogin = (users) => {
  onChangePage(PAGES.LOGIN);
  loginUserListeners();

  CANCEL_LOGIN_BTN.removeEventListener("click", handleCancelLogin);
  CANCEL_LOGIN_BTN.addEventListener("click", handleCancelLogin);

  SUBMIT_LOGIN_BTN.removeEventListener("click", () => handleSubmitLogin(users));
  SUBMIT_LOGIN_BTN.addEventListener("click", () => handleSubmitLogin(users));
};

const loginUserListeners = () => {
  const { onChangeInputField } = useForm();
  const schema = ["login-email", "login-password"];

  EMAIL_LOGIN_FIELD.addEventListener("input", (e) => {
    onChangeInputField(
      schema,
      {
        input: e.target,
        errorSpan: EMAIL_LOGIN_ERROR,
        validation: { min: 2 },
      },
      SUBMIT_LOGIN_BTN
    );
  });

  PASSWORD_LOGIN_FIELD.addEventListener("input", (e) => {
    onChangeInputField(
      schema,
      {
        input: e.target,
        errorSpan: PASSWORD_LOGIN_ERROR,
        validation: { min: 2 },
      },
      SUBMIT_LOGIN_BTN
    );
  });
};

export const handleCancelLogin = () => {
  const { onClearFormFields } = useForm();
  const fields = [EMAIL_LOGIN_FIELD, PASSWORD_LOGIN_FIELD];
  const errorSpans = [EMAIL_LOGIN_ERROR, PASSWORD_LOGIN_ERROR];
  onClearFormFields(SUBMIT_LOGIN_BTN, fields, errorSpans);
  onChangePage(PAGES.HOME);
};

export const handleSubmitLogin = (users) => {
  const email = EMAIL_LOGIN_FIELD.value;
  const password = PASSWORD_LOGIN_FIELD.value;
  onLogin(email, password, users);
  onChangePage(PAGES.HOME);
};

export const onLogin = (email, password, users = []) => {
  if (!users.length) throw new Error("You are not registered, please sign up");
  const user = users.find((user) => user.email === email);

  if (!user) {
    PASSWORD_LOGIN_ERROR.textContent = "User mail or password is incorrect 1";
    throw new Error("User mail or password is incorrect");
  }

  if (user.password !== password) {
    PASSWORD_LOGIN_ERROR.textContent = "User mail or password is incorrect 2";
    throw new Error("User mail or password is incorrect");
  }

  const { _id, isBusiness, isAdmin } = user;

  const payload = JSON.stringify({ _id, isBusiness, isAdmin });

  setItemInLocalStorage("user", payload);
  handleCancelLogin();
  setNavDisplay();
};
