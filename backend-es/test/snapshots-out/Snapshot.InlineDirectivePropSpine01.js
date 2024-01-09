// @inline export watUnit(..).wat arity=1
// @inline export testImpl never
import * as Control$dCategory from "../Control.Category/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
const wat = dict => dict.wat;
const testImpl = Control$dCategory.categoryFn$d0;
const watUnit$d0 = dictTypeEquals => dictTypeEquals.proof(a => a);
const watUnit$d1 = dictTypeEquals => x => testImpl(watUnit$d0(dictTypeEquals)(x));
const watUnit = dictTypeEquals => ({wat: watUnit$d1(dictTypeEquals)});
const g = /* #__PURE__ */ watUnit$d1(Type$dEquality.refl);
const test2 = /* #__PURE__ */ testImpl();
const f = /* #__PURE__ */ watUnit$d1(Type$dEquality.refl);
const test1 = /* #__PURE__ */ testImpl();
export {f, g, test1, test2, testImpl, wat, watUnit, watUnit$d0, watUnit$d1};
