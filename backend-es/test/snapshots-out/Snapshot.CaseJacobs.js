import * as $runtime from "../runtime.js";
const $Expr = (tag, _1, _2) => ({tag, _1, _2});
const Add = value0 => value1 => $Expr("Add", value0, value1);
const Mul = value0 => value1 => $Expr("Mul", value0, value1);
const Succ = value0 => $Expr("Succ", value0);
const Zero = /* #__PURE__ */ $Expr("Zero");
const showExpr$d0 = v => {
  if (v.tag === "Add") { return "Add(" + showExpr$lazy().show(v._1) + " " + showExpr$lazy().show(v._2) + ")"; }
  if (v.tag === "Mul") { return "Mul(" + showExpr$lazy().show(v._1) + " " + showExpr$lazy().show(v._2) + ")"; }
  if (v.tag === "Succ") { return "Succ(" + showExpr$lazy().show(v._1) + ")"; }
  if (v.tag === "Zero") { return "Zero"; }
  $runtime.fail();
};
const showExpr$lazy = /* #__PURE__ */ $runtime.binding(() => ({show: showExpr$d0}));
const showExpr = /* #__PURE__ */ showExpr$lazy();
const test1 = v => {
  if (v.tag === "Add") {
    if (v._2.tag === "Zero") {
      if (v._1.tag === "Zero") { return "e1"; }
      if (v._1.tag === "Succ") { return "e3: " + showExpr$d0(v._1._1) + " " + showExpr$d0(v._2); }
      return "e6: " + showExpr$d0(v._1);
    }
    if (v._1.tag === "Succ") { return "e3: " + showExpr$d0(v._1._1) + " " + showExpr$d0(v._2); }
    return "e7: " + showExpr$d0(v);
  }
  if (v.tag === "Mul") {
    if (v._1.tag === "Zero") { return "e2: " + showExpr$d0(v._2); }
    if (v._2.tag === "Zero") { return "e4: " + showExpr$d0(v._1); }
    if (v._1.tag === "Add") { return "e5: " + showExpr$d0(v._1._1) + " " + showExpr$d0(v._1._2) + " " + showExpr$d0(v._2); }
  }
  return "e7: " + showExpr$d0(v);
};
export {$Expr, Add, Mul, Succ, Zero, showExpr, showExpr$d0, test1};
