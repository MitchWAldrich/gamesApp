export const removeStringItemFromArray = (array: string[], id: string) => {
  const index = array.indexOf(id);
  array.splice(index, 1);
  return array;
};

export const sortNumbers = (numStringArray: string[]) => {
  return numStringArray.sort((a, b) => Number(a) - Number(b));
};
