export const randomNumBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const makeFirstLetterCapital = (string) => {
  const term = string.toLowerCase().trim();
  return term.charAt(0).toUpperCase() + term.slice(1);
};
export const generateUniqNumber = (array, key) => {
  const random = randomNumBetween(1_000_000, 9_999_999);
  const UniqNumberCheck = array.find((num) => num[key] === random);
  if (!UniqNumberCheck) return random;
  this.generateUniqNumber(array, key);
};
