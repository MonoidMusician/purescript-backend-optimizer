import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
const test6$d0 = f => g => g(1);
const test6 = f => g => () => {
  f(test6$d0(f)(g), 2, 3);
  f(g(1), 2, 3);
  return f(g(1), 2, 3);
};
const test5$d0 = f => g => g(1);
const test5 = f => g => () => {
  f(test5$d0(f)(g), 2, 3);
  return f(g(1), 2, 3);
};
const test4 = f => Effect$dUncurried.runEffectFn3(f);
const test3 = f => g => Effect$dUncurried.runEffectFn3(f)(g(1));
const test2 = f => g => Effect$dUncurried.runEffectFn3(f)(g(1))(2);
const test1$d0 = f => g => g(1);
const test1 = f => g => () => f(test1$d0(f)(g), 2, 3);
export {test1, test1$d0, test2, test3, test4, test5, test5$d0, test6, test6$d0};
