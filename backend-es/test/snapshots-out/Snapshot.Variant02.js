// @inline export variantBuildMatchCons arity=5
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dVariant from "../Data.Variant/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const variantBuildMatchNil$d0 = v => k => v1 => k;
const variantBuildMatchNil = {variantBuildMatch: variantBuildMatchNil$d0};
const variantBuildMatch = dict => dict.variantBuildMatch;
const variantBuildMatchCons$d0 = dictTypeEquals => $__unused => $__unused$1 => dictIsSymbol => dictVariantBuildMatch => v => k => r => {
  const $0 = Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(r);
  const $1 = dictVariantBuildMatch.variantBuildMatch(Type$dProxy.Proxy)(k)(r);
  return r$1 => {
    if (r$1.type === dictIsSymbol.reflectSymbol(Type$dProxy.Proxy)) { return $0(r$1.value); }
    return $1(r$1);
  };
};
const variantBuildMatchCons = dictTypeEquals => $__unused => $__unused$1 => dictIsSymbol => dictVariantBuildMatch => (
  {variantBuildMatch: variantBuildMatchCons$d0(dictTypeEquals)($__unused)($__unused$1)(dictIsSymbol)(dictVariantBuildMatch)}
);
const match = $__unused => dictVariantBuildMatch => dictVariantBuildMatch.variantBuildMatch(Type$dProxy.Proxy)(Data$dVariant.case_);
const test1 = /* #__PURE__ */ variantBuildMatchCons$d0(Type$dEquality.refl)()()({reflectSymbol: $__unused => "bar"})({
  variantBuildMatch: /* #__PURE__ */ variantBuildMatchCons$d0(Type$dEquality.refl)()()({reflectSymbol: $__unused => "baz"})({
    variantBuildMatch: /* #__PURE__ */ variantBuildMatchCons$d0(Type$dEquality.refl)()()({reflectSymbol: $__unused => "foo"})(variantBuildMatchNil)
  })
})(Type$dProxy.Proxy)(Data$dVariant.case_)({
  foo: a => Data$dShow.showIntImpl(a),
  bar: a => {
    if (a) { return "true"; }
    return "false";
  },
  baz: a => a
});
export {match, test1, variantBuildMatch, variantBuildMatchCons, variantBuildMatchCons$d0, variantBuildMatchNil, variantBuildMatchNil$d0};
