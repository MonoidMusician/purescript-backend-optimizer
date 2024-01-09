// @inline export mapU arity=1
// @inline export filterMapU arity=1
// @inline export filterU arity=1
// @inline export fromArray arity=1
// @inline export toArray arity=1
// @inline export overArray arity=1
import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
const $Unfold$p = (_1, _2) => ({tag: "Unfold", _1, _2});
const toUnfoldable = /* #__PURE__ */ (() => Data$dUnfoldable.unfoldableArray.unfoldr(xs => {
  if (xs.tag === "Nil") { return Data$dMaybe.Nothing; }
  if (xs.tag === "Cons") { return Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple(xs._1, xs._2)); }
  $runtime.fail();
}))();
const Unfold = value0 => value1 => $Unfold$p(value0, value1);
const toArray$dloop = v => s2 => acc => v._2(s2)(v1 => Data$dArray.reverse(toUnfoldable(acc)))(s3 => a => toArray$dloop(s3)(Data$dList$dTypes.$List("Cons", a, acc)));
const test = x => toArray$dloop(0)(Data$dList$dTypes.Nil);
export {$Unfold$p, Unfold, test, toArray$dloop, toUnfoldable};
