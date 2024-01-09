import * as $runtime from "../runtime.js";
const Id = x => x;
const bindId$d0 = v => k => k(v());
const applicativeId$d0 = a => v => a;
const monadId$d0 = $__unused => applicativeId$lazy();
const monadId$d1 = $__unused => bindId$lazy();
const functorId$d0 = f => a => bindId$lazy().bind(a)(a$p => applicativeId$lazy().pure(f(a$p)));
const bindId$d1 = $__unused => applyId$lazy();
const applyId$d0 = f => a => applicativeId$lazy().pure(f()(a()));
const applyId$d1 = $__unused => functorId$lazy();
const applicativeId$d1 = $__unused => applyId$lazy();
const monadId$lazy = /* #__PURE__ */ $runtime.binding(() => ({Applicative0: monadId$d0, Bind1: monadId$d1}));
const functorId$lazy = /* #__PURE__ */ $runtime.binding(() => ({map: functorId$d0}));
const bindId$lazy = /* #__PURE__ */ $runtime.binding(() => ({bind: bindId$d0, Apply0: bindId$d1}));
const applyId$lazy = /* #__PURE__ */ $runtime.binding(() => ({apply: applyId$d0, Functor0: applyId$d1}));
const applicativeId$lazy = /* #__PURE__ */ $runtime.binding(() => ({pure: applicativeId$d0, Apply0: applicativeId$d1}));
const monadId = /* #__PURE__ */ monadId$lazy();
const functorId = /* #__PURE__ */ functorId$lazy();
const bindId = /* #__PURE__ */ bindId$lazy();
const applyId = /* #__PURE__ */ applyId$lazy();
const applicativeId = /* #__PURE__ */ applicativeId$lazy();
const test2 = k => k();
const test1 = k => () => k()();
export {
  Id,
  applicativeId,
  applicativeId$d0,
  applicativeId$d1,
  applyId,
  applyId$d0,
  applyId$d1,
  bindId,
  bindId$d0,
  bindId$d1,
  functorId,
  functorId$d0,
  monadId,
  monadId$d0,
  monadId$d1,
  test1,
  test2
};
