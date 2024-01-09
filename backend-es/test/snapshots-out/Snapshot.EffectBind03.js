import * as $runtime from "../runtime.js";
const MyEffect = x => x;
const functorMyEffect$d0 = f => v => () => {
  const a$p = v();
  return f(a$p);
};
const functorMyEffect = {map: functorMyEffect$d0};
const bindMyEffect$d0 = v => k => () => {
  const a$p = v();
  return k(a$p)();
};
const applyMyEffect$d1 = $__unused => functorMyEffect;
const applicativeMyEffect$d0 = x => () => x;
const monadMyEffect$d0 = $__unused => applicativeMyEffect$lazy();
const monadMyEffect$d1 = $__unused => bindMyEffect$lazy();
const bindMyEffect$d1 = $__unused => applyMyEffect$lazy();
const applyMyEffect$d0 = f => a => () => {
  const a$p = f();
  const a$p$1 = a();
  return applicativeMyEffect$lazy().pure(a$p(a$p$1))();
};
const applicativeMyEffect$d1 = $__unused => applyMyEffect$lazy();
const monadMyEffect$lazy = /* #__PURE__ */ $runtime.binding(() => ({Applicative0: monadMyEffect$d0, Bind1: monadMyEffect$d1}));
const bindMyEffect$lazy = /* #__PURE__ */ $runtime.binding(() => ({bind: bindMyEffect$d0, Apply0: bindMyEffect$d1}));
const applyMyEffect$lazy = /* #__PURE__ */ $runtime.binding(() => ({apply: applyMyEffect$d0, Functor0: applyMyEffect$d1}));
const applicativeMyEffect$lazy = /* #__PURE__ */ $runtime.binding(() => ({pure: applicativeMyEffect$d0, Apply0: applicativeMyEffect$d1}));
const monadMyEffect = /* #__PURE__ */ monadMyEffect$lazy();
const bindMyEffect = /* #__PURE__ */ bindMyEffect$lazy();
const applyMyEffect = /* #__PURE__ */ applyMyEffect$lazy();
const applicativeMyEffect = /* #__PURE__ */ applicativeMyEffect$lazy();
const test = random => () => {
  const a$p = random();
  const a$p$1 = random();
  return a$p + a$p$1 | 0;
};
export {
  MyEffect,
  applicativeMyEffect,
  applicativeMyEffect$d0,
  applicativeMyEffect$d1,
  applyMyEffect,
  applyMyEffect$d0,
  applyMyEffect$d1,
  bindMyEffect,
  bindMyEffect$d0,
  bindMyEffect$d1,
  functorMyEffect,
  functorMyEffect$d0,
  monadMyEffect,
  monadMyEffect$d0,
  monadMyEffect$d1,
  test
};
