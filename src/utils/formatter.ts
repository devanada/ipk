export const formatToUppercase = (word: string) => {
  const result = word
    .toLowerCase()
    .split(" ")
    .map((val) => val.charAt(0).toUpperCase() + val.substring(1))
    .join(" ");
  return result;
};

export const formatWord = (word: string) => {
  let dupeWord = word;
  if (dupeWord.includes("-")) {
    const removeNumeric = dupeWord.split("-");
    dupeWord = removeNumeric[1];
  }
  const result = dupeWord.replace(/\.[^/.]+$/, "").replace("_", " ");
  return result;
};
