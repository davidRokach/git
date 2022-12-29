import { slider_credits, slider_image } from "./domService.js";

export const renderSlider = (pictures, num = 0) => {
  if (!pictures?.length) return null;

  const pic = pictures[num];
  const { url, alt, credits } = pic;

  slider_image.src = url;
  slider_image.alt = alt;
  slider_credits.textContent = credits;

  return;
};
