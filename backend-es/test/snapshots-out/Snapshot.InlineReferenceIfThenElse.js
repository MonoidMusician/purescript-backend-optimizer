// @inline export fn never
import * as $runtime from "../runtime.js";
const fn = v => 0;
const test1 = 42;
const extern1$lazy = /* #__PURE__ */ $runtime.binding(() => ({a: {b: {c: true}}, d: fn({})}));
const extern1 = /* #__PURE__ */ extern1$lazy();
const test2 = 42;
export {extern1, fn, test1, test2};
