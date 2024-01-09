// @inline Snapshot.RecursionSchemes01.cata arity=2
// @inline Snapshot.RecursionSchemes01.functorExprF.map arity=2
import * as $runtime from "../runtime.js";
const $ExprF = (tag, _1, _2) => ({tag, _1, _2});
const Add = value0 => value1 => $ExprF("Add", value0, value1);
const Mul = value0 => value1 => $ExprF("Mul", value0, value1);
const Lit = value0 => $ExprF("Lit", value0);
const functorExprF$d0 = f => m => {
  if (m.tag === "Add") { return $ExprF("Add", f(m._1), f(m._2)); }
  if (m.tag === "Mul") { return $ExprF("Mul", f(m._1), f(m._2)); }
  if (m.tag === "Lit") { return $ExprF("Lit", m._1); }
  $runtime.fail();
};
const functorExprF = {map: functorExprF$d0};
const cata$dgo = dictFunctor => alg => v => alg(dictFunctor.map(cata$dgo)(v));
const test1 = cata$dgo;
const test2 = cata$dgo;
export {$ExprF, Add, Lit, Mul, cata$dgo, functorExprF, functorExprF$d0, test1, test2};
