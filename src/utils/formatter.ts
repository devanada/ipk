export const formatToUppercase = (word: string) => {
  const result = word
    .toLowerCase()
    .split("-")
    .map((val) => val.charAt(0).toUpperCase() + val.substring(1))
    .join(" ");
  return result;
};

export const formatWord = (word: string) => {
  const result = word.replace(/\.[^/.]+$/, "");
  return result;
};
