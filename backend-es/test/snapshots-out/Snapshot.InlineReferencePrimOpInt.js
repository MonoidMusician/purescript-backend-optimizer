// @inline export fn never
// @inline export localTest always
// @inline export externTest always
import * as $runtime from "../runtime.js";
const fn = v => 0;
const localTest$drec = f => ({a: {b: {c: 99}}, d: fn({}), e: 11});
const localTest$dres = f => f(localTest$drec(f));
const localTest = f => {
  if (localTest$dres(f) !== -2147483648) { return localTest$dres(f); }
  return fn(localTest$drec(f));
};
const test1 = 110;
const test2 = 88;
const test3 = 1089;
const test4 = 9;
const extern$lazy = /* #__PURE__ */ $runtime.binding(() => ({a: {b: {c: 99}}, d: fn({}), e: 11}));
const extern = /* #__PURE__ */ extern$lazy();
const externTest$dres = f => f(extern);
const externTest = f => {
  if (externTest$dres(f) !== -2147483648) { return externTest$dres(f); }
  return -2147483648;
};
const test5 = 110;
const test6 = 88;
const test7 = 1089;
const test8 = 9;
export {extern, externTest, externTest$dres, fn, localTest, localTest$drec, localTest$dres, test1, test2, test3, test4, test5, test6, test7, test8};
