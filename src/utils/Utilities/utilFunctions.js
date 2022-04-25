export const trimHeading = (word, n) => {
  if (word.length > n) {
    return word.substring(0, n - 3) + "...";
  }
  return word;
};
