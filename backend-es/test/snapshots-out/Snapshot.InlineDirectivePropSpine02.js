// @inline export watUnit(..).wat1 arity=1
// @inline export watUnit(..).wat2 arity=1
// @inline export testImpl never
import * as Control$dCategory from "../Control.Category/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
const wat2 = dict => dict.wat2;
const wat1 = dict => dict.wat1;
const testImpl = Control$dCategory.categoryFn$d0;
const watUnit$dto = dictTypeEquals => dictTypeEquals.proof(a => a);
const watUnit$d0 = dictTypeEquals => x => testImpl(watUnit$dto(dictTypeEquals)(x));
const watUnit$d1 = dictTypeEquals => x => testImpl(watUnit$dto(dictTypeEquals)(x));
const watUnit = dictTypeEquals => ({wat1: watUnit$d0(dictTypeEquals), wat2: watUnit$d1(dictTypeEquals)});
const g = /* #__PURE__ */ watUnit$d1(Type$dEquality.refl);
const test2 = /* #__PURE__ */ testImpl();
const f = /* #__PURE__ */ watUnit$d0(Type$dEquality.refl);
const test1 = /* #__PURE__ */ testImpl();
export {f, g, test1, test2, testImpl, wat1, wat2, watUnit, watUnit$d0, watUnit$d1, watUnit$dto};
