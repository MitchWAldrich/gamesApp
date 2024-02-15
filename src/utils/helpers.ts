export const removeStringItemFromArray = (array: string[], id: string) => {
  const index = array.indexOf(id);
  array.splice(index, 1);
  return array;
};
