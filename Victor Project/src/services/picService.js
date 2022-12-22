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
