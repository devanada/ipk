export const formatToUppercase = (word: string) => {
  const result = word
    .toLowerCase()
    .replace(/-/, " ")
    .split(" ")
    .map((val) => val.charAt(0).toUpperCase() + val.substring(1))
    .join(" ");
  return result;
};

export const formatWord = (word: string) => {
  const removeNum = word.replace(/^\d+-/, "");
  const removeExt = removeNum.replace(/\.[^/.]+$/, "").replace("_", " ");
  return removeExt;
};
