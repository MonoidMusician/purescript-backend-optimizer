// @inline export fn never
// @inline export localTest always
// @inline export externTest always
import * as $runtime from "../runtime.js";
const fn = v => 0.0;
const localTest$drec = f => ({a: {b: {c: 99.0}}, d: fn({}), e: 11.0});
const localTest$dres = f => f(localTest$drec(f));
const localTest = f => {
  if (localTest$dres(f) !== -Infinity) { return localTest$dres(f); }
  return fn(localTest$drec(f));
};
const test1 = 110.0;
const test2 = 88.0;
const test3 = 1089.0;
const test4 = 9.0;
const extern$lazy = /* #__PURE__ */ $runtime.binding(() => ({a: {b: {c: 99.0}}, d: fn({}), e: 11.0}));
const extern = /* #__PURE__ */ extern$lazy();
const externTest$dres = f => f(extern);
const externTest = f => {
  if (externTest$dres(f) !== -Infinity) { return externTest$dres(f); }
  return -Infinity;
};
const test5 = 110.0;
const test6 = 88.0;
const test7 = 1089.0;
const test8 = 9.0;
export {extern, externTest, externTest$dres, fn, localTest, localTest$drec, localTest$dres, test1, test2, test3, test4, test5, test6, test7, test8};
