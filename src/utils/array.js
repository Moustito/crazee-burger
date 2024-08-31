export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array));
};

export const findObjectById = (id, array) => {
  return array.find((itemInArray) => itemInArray.id === id);
};

export const findIndexById = (id, array) => {
  return array.findIndex((itemInArray) => itemInArray.id === id);
};

export const removeObjectById = (idOfItemToRemove, array) => {
  return array.filter((itemInArray) => itemInArray.id !== idOfItemToRemove);
};

export const isEmpty = (array) => {
  return array.length === 0;
};
