import * as $runtime from "../runtime.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const State = x => x;
const functorState$d0 = f => v => next1 => s1 => v(s2 => {
  const $0 = next1(s2);
  return x => $0(f(x));
})(s1);
const functorState = {map: functorState$d0};
const bindState$d0 = v => k2 => next1 => s1 => v(s2 => a => k2(a)(next1)(s2))(s1);
const applyState$d1 = $__unused => functorState;
const applicativeState$d0 = a => next => s1 => next(s1)(a);
const monadState$d0 = $__unused => applicativeState$lazy();
const monadState$d1 = $__unused => bindState$lazy();
const bindState$d1 = $__unused => applyState$lazy();
const applyState$d0 = f => a => next1 => s1 => f(s2 => a$1 => a(s2$1 => a$2 => applicativeState$lazy().pure(a$1(a$2))(next1)(s2$1))(s2))(s1);
const applicativeState$d1 = $__unused => applyState$lazy();
const monadState$lazy = /* #__PURE__ */ $runtime.binding(() => ({Applicative0: monadState$d0, Bind1: monadState$d1}));
const bindState$lazy = /* #__PURE__ */ $runtime.binding(() => ({bind: bindState$d0, Apply0: bindState$d1}));
const applyState$lazy = /* #__PURE__ */ $runtime.binding(() => ({apply: applyState$d0, Functor0: applyState$d1}));
const applicativeState$lazy = /* #__PURE__ */ $runtime.binding(() => ({pure: applicativeState$d0, Apply0: applicativeState$d1}));
const monadState = /* #__PURE__ */ monadState$lazy();
const bindState = /* #__PURE__ */ bindState$lazy();
const applyState = /* #__PURE__ */ applyState$lazy();
const applicativeState = /* #__PURE__ */ applicativeState$lazy();
const runState = s => v => v(Data$dTuple.Tuple)(s);
const put = s => next => v => next(s)();
const $$get = next => s => next(s)(s);
const test4 = next1 => s1 => next1(s1 + 2 | 0)();
export {
  State,
  applicativeState,
  applicativeState$d0,
  applicativeState$d1,
  applyState,
  applyState$d0,
  applyState$d1,
  bindState,
  bindState$d0,
  bindState$d1,
  functorState,
  functorState$d0,
  $$get as get,
  monadState,
  monadState$d0,
  monadState$d1,
  put,
  runState,
  test4
};
