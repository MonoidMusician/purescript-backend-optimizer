// @inline export fn never
import * as $runtime from "../runtime.js";
const fn = v => 0;
const test1 = 42;
const test2 = 42;
const test3 = 42;
const extern1$lazy = /* #__PURE__ */ $runtime.binding(() => ({a: {b: {c: true}}, d: fn({}), e: true, f: false}));
const extern1 = /* #__PURE__ */ extern1$lazy();
const test4 = 42;
const test5 = 42;
const test6 = 42;
export {extern1, fn, test1, test2, test3, test4, test5, test6};
