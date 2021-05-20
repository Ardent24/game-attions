export const generateCubes = (num) => {
  const result = [];

  for (let i = 0; i < num; i++) {
    result.push({ id: i, randomActive: false, clkActive: false });
  }
  return result;
};
