// @inline Heterogeneous.Mapping.hmapRecord arity=2
// @inline Heterogeneous.Mapping.hmapWithIndexRecord arity=2
// @inline Heterogeneous.Mapping.mapRecordWithIndexCons arity=5
// @inline Heterogeneous.Mapping.mapRecordWithIndexNil.mapRecordWithIndexBuilder arity=2
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Heterogeneous$dMapping from "../Heterogeneous.Mapping/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
const aIsSymbol$d0 = $__unused => "a";
const aIsSymbol = {reflectSymbol: aIsSymbol$d0};
const bIsSymbol$d0 = $__unused => "b";
const bIsSymbol = {reflectSymbol: bIsSymbol$d0};
const cIsSymbol$d0 = $__unused => "c";
const cIsSymbol = {reflectSymbol: cIsSymbol$d0};
const zipProps$d0 = dictIsSymbol => $__unused => v => prop => Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(prop))(v);
const zipRecord1 = x => Heterogeneous$dMapping.hmapWithIndexRecord$d1()({
  mapRecordWithIndexBuilder: Heterogeneous$dMapping.mapRecordWithIndexCons$d0(aIsSymbol)({mappingWithIndex: zipProps$d0(aIsSymbol)()})({
    mapRecordWithIndexBuilder: Heterogeneous$dMapping.mapRecordWithIndexCons$d0(bIsSymbol)({mappingWithIndex: zipProps$d0(bIsSymbol)()})({
      mapRecordWithIndexBuilder: Heterogeneous$dMapping.mapRecordWithIndexCons$d0(cIsSymbol)({mappingWithIndex: zipProps$d0(cIsSymbol)()})(Heterogeneous$dMapping.mapRecordWithIndexNil)()()
    })()()
  })()()
})(x);
const test2 = /* #__PURE__ */ zipRecord1({a: $0 => 1 + $0 | 0, b: /* #__PURE__ */ Data$dTuple.Tuple("bar"), c: a => !a});
const test1 = /* #__PURE__ */ zipRecord1({a: $0 => 1 + $0 | 0, b: /* #__PURE__ */ Data$dTuple.Tuple("bar"), c: a => !a})({a: 12, b: 42.0, c: true});
export {aIsSymbol, aIsSymbol$d0, bIsSymbol, bIsSymbol$d0, cIsSymbol, cIsSymbol$d0, test1, test2, zipProps$d0, zipRecord1};
