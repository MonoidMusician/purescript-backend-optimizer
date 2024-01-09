import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dSemiring from "../Data.Semiring/index.js";
const sum = /* #__PURE__ */ Data$dFoldable.foldlArray(Data$dSemiring.intAdd)(0);
const test$dfn = x => y => (a, b) => sum([x, a, b, a, b, a, b, a, b, a, b, a, b, a, b, a, b, a, b]);
const test = x => y => test$dfn(x)(y)(x, y) + test$dfn(x)(y)(y, x) | 0;
export {sum, test, test$dfn};
