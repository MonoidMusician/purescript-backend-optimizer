const test2$d0 = f => f([1, 2, 3]);
const test2 = f => a => {
  if (a) { return test2$d0(f); }
  return [];
};
const test1 = a => {
  if (a) { return [1, 2, 3]; }
  return [];
};
export {test1, test2, test2$d0};
