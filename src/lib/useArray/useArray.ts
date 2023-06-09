export const getArray = (value: number) => {
  const array = [];
  for (let index = 1; index <= value; index++) {
    array.push(index);
  }
  return array;
};
