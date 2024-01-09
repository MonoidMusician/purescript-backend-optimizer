// @inline export traverseFun1 arity=1
// @inline export rewriteBottomUpM arity=1
import * as $runtime from "../runtime.js";
const $Fun = (tag, _1, _2) => ({tag, _1, _2});
const Abs = value0 => value1 => $Fun("Abs", value0, value1);
const App = value0 => value1 => $Fun("App", value0, value1);
const traverseFun1$dApply0 = dictApplicative => dictApplicative.Apply0();
const traverseFun1$d0 = dictApplicative => traverseFun1$dApply0(dictApplicative).Functor0();
const traverseFun1 = dictApplicative => k => v => {
  if (v.tag === "Abs") { return traverseFun1$d0(dictApplicative).map(Abs(v._1))(k(v._2)); }
  if (v.tag === "App") { return traverseFun1$dApply0(dictApplicative).apply(traverseFun1$d0(dictApplicative).map(App)(k(v._1)))(k(v._2)); }
  $runtime.fail();
};
const rewriteBottomUpM$d0 = dictMonad => dictMonad.Applicative0();
const rewriteBottomUpM$d1 = dictMonad => dictMonad.Bind1();
const rewriteBottomUpM$dgo = dictMonad => k => a => {
  if (a.tag === "Abs") { return rewriteBottomUpM$d0(dictMonad).Apply0().Functor0().map(Abs(a._1))(rewriteBottomUpM$d1(dictMonad).bind(rewriteBottomUpM$dgo(a._2))(k)); }
  if (a.tag === "App") {
    return rewriteBottomUpM$d0(dictMonad).Apply0().apply(rewriteBottomUpM$d0(dictMonad).Apply0().Functor0().map(App)(rewriteBottomUpM$d1(dictMonad).bind(rewriteBottomUpM$dgo(a._1))(k)))(rewriteBottomUpM$d1(dictMonad).bind(rewriteBottomUpM$dgo(a._2))(k));
  }
  $runtime.fail();
};
const rewriteBottomUpM = dictMonad => k => a => rewriteBottomUpM$d1(dictMonad).bind(rewriteBottomUpM$dgo(a))(k);
const rewriteBottomUp = k => a => k(rewriteBottomUpM$dgo(a));
export {$Fun, Abs, App, rewriteBottomUp, rewriteBottomUpM, rewriteBottomUpM$d0, rewriteBottomUpM$d1, rewriteBottomUpM$dgo, traverseFun1, traverseFun1$d0, traverseFun1$dApply0};
