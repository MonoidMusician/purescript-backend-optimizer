// @inline Snapshot.Cps02.mkState always
// @inline Snapshot.Cps02.unState always
// @inline Snapshot.Cps02.put arity=1
// @inline Snapshot.Cps02.get always
import * as $runtime from "../runtime.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const State = x => x;
const unState = v => k$p => s => v(($0, $1) => k$p($0)($1), s);
const runState = s => k => k(($0, $1) => Data$dTuple.$Tuple($0, $1), s);
const mkState = k => (k$p, s) => k($0 => $1 => k$p($0, $1))(s);
const put = s => (k$p, s$1) => k$p(s, undefined);
const functorState$d0 = f => k => (k$p, s) => k(($0, $1) => k$p($0, f($1)), s);
const functorState = {map: functorState$d0};
const bindState$d0 = k1 => k2 => (k$p, s) => k1(($0, $1) => k2($1)(($2, $3) => k$p($2, $3), $0), s);
const applyState$d1 = $__unused => functorState;
const applicativeState$d0 = a => (k$p, s) => k$p(s, a);
const monadState$d0 = $__unused => applicativeState$lazy();
const monadState$d1 = $__unused => bindState$lazy();
const bindState$d1 = $__unused => applyState$lazy();
const applyState$d0 = f => a => (k$p, s) => f(($0, $1) => a(($2, $3) => applicativeState$lazy().pure($1($3))(($4, $5) => k$p($4, $5), $2), $0), s);
const applicativeState$d1 = $__unused => applyState$lazy();
const monadState$lazy = /* #__PURE__ */ $runtime.binding(() => ({Applicative0: monadState$d0, Bind1: monadState$d1}));
const bindState$lazy = /* #__PURE__ */ $runtime.binding(() => ({bind: bindState$d0, Apply0: bindState$d1}));
const applyState$lazy = /* #__PURE__ */ $runtime.binding(() => ({apply: applyState$d0, Functor0: applyState$d1}));
const applicativeState$lazy = /* #__PURE__ */ $runtime.binding(() => ({pure: applicativeState$d0, Apply0: applicativeState$d1}));
const monadState = /* #__PURE__ */ monadState$lazy();
const bindState = /* #__PURE__ */ bindState$lazy();
const applyState = /* #__PURE__ */ applyState$lazy();
const applicativeState = /* #__PURE__ */ applicativeState$lazy();
const $$get = (k$p, s) => k$p(s, s);
const test4 = (k$p, s) => k$p(s + 2 | 0, undefined);
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
  mkState,
  monadState,
  monadState$d0,
  monadState$d1,
  put,
  runState,
  test4,
  unState
};
