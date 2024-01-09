// @inline export overArray arity=1
import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
const toUnfoldable = /* #__PURE__ */ (() => Data$dUnfoldable.unfoldableArray.unfoldr(xs => {
  if (xs.tag === "Nil") { return Data$dMaybe.Nothing; }
  if (xs.tag === "Cons") { return Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple(xs._1, xs._2)); }
  $runtime.fail();
}))();
const fromArray$dloop = arr => cons => nil => n => acc => {
  if (n === 0) { return acc; }
  return fromArray$dloop(n - 1 | 0)(cons(arr[n])(acc));
};
const test = x => Data$dArray.reverse(toUnfoldable(fromArray$dloop(x.length - 1 | 0)(Data$dList$dTypes.Nil)));
export {fromArray$dloop, test, toUnfoldable};
