const test$d0 = x => {
  if (x) { return a => () => a.push(1); }
  return a => () => a.unshift(2);
};
const test = x => {
  const arr = [];
  test$d0(x)(arr)();
  return arr;
};
export {test, test$d0};
