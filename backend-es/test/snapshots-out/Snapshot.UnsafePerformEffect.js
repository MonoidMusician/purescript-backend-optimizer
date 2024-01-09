const test$dref = f => ({value: 0});
const test$d0 = f => f(test$dref(f));
const test = f => () => {
  const $0 = test$d0(f).value;
  test$d0(f).value = 1 + $0 | 0;
  const $1 = test$dref(f).value;
  test$dref(f).value = 1 + $1 | 0;
};
export {test, test$d0, test$dref};
