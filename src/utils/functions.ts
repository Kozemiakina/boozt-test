export const priceToText = (num: number) => {
  const price = Number(num);
  if (price - Math.ceil(price) > 0) {
    return `${price.toFixed(2)} €`;
  }
  return `${price} €`;
};

export const generateArray = (size: number) => {
  const generatedArray = [];
  for (let i = 0; i < size; i += 1) {
    generatedArray.push(i + 1);
  }
  return generatedArray;
};
