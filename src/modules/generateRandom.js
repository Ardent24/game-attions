export const generateRandom = (cubes, max) => {
  const result = [];

  for (let i = 0; i < cubes; i++) {
    const randomNum = Math.floor(Math.random() * max);

    if (result.indexOf(randomNum) === -1) {
      result.push(randomNum);
    } else i--;
  }
  return result;
};
