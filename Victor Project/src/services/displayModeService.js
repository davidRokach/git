import { renderCards } from "../components/renderCards.js";
import { renderTable } from "../components/renderTable.js";
import DISPLAY from "../models/displayModel.js";
import { onChangeDisplayMode } from "../routes/router.js";

export const handleDisplayMode = (pictures, display) => {
  onChangeDisplayMode(pictures, display);
  if (display === DISPLAY.TABLE) {
    renderTable(pictures);
    pictures.forEach((pic) => addOnDelete(pic._id));
    return display;
  }
  if (display === DISPLAY.CARDS) {
    renderCards(pictures);
    return display;
  }
  return display;
};

const addOnDelete = (id) => {};
