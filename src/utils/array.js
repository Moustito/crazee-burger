export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array));
};

export const find = (id, array) => {
  return array.find((itemInArray) => itemInArray.id === id);
};

export const findIndex = (id, array) => {
  return array.findIndex((itemInArray) => itemInArray.id === id);
};

export const filter = (idOfItemToRemove, array) => {
  return array.filter((itemInArray) => itemInArray.id !== idOfItemToRemove);
};
