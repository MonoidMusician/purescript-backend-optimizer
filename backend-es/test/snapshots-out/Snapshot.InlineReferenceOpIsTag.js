// @inline export fn' never
import * as $runtime from "../runtime.js";
const $List = (tag, _1, _2) => ({tag, _1, _2});
const Cons = value0 => value1 => $List("Cons", value0, value1);
const Nil = /* #__PURE__ */ $List("Nil");
const test3 = fn => $List("Cons", 0, $List("Cons", 1, fn({})));
const test2 = fn => $List("Cons", 0, $List("Cons", 1, fn({})));
const test1 = fn => $List("Cons", 0, $List("Cons", 1, fn({})));
const fn$p = v => Nil;
const extern2$lazy = /* #__PURE__ */ $runtime.binding(() => ({a: {b: {c: $List("Cons", 1, fn$p({}))}}}));
const extern2 = /* #__PURE__ */ extern2$lazy();
const extern3$lazy = /* #__PURE__ */ $runtime.binding(() => ({d: extern2, e: fn$p({})}));
const extern3 = /* #__PURE__ */ extern3$lazy();
const test6 = /* #__PURE__ */ (() => $List("Cons", 0, extern2.a.b.c))();
const test5 = /* #__PURE__ */ (() => $List("Cons", 0, extern2.a.b.c))();
const extern1 = /* #__PURE__ */ $List("Cons", 1, /* #__PURE__ */ fn$p({}));
const test4 = /* #__PURE__ */ $List("Cons", 0, extern1);
export {$List, Cons, Nil, extern1, extern2, extern3, fn$p, test1, test2, test3, test4, test5, test6};
