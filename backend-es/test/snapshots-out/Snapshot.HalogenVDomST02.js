import * as Assert from "../Assert/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Snapshot$dHalogenVDomST01 from "../Snapshot.HalogenVDomST01/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const bIsSymbol$d0 = $__unused => "b";
const bIsSymbol = {reflectSymbol: bIsSymbol$d0};
const aIsSymbol$d0 = $__unused => "a";
const aIsSymbol = {reflectSymbol: aIsSymbol$d0};
const assertEqual = /* #__PURE__ */ Assert.assertEqual({
  eq: /* #__PURE__ */ Data$dEq.eqArrayImpl(/* #__PURE__ */ Data$dEq.eqRowCons$d0({eqRecord: /* #__PURE__ */ Data$dEq.eqRowCons$d0(Data$dEq.eqRowNil)()(bIsSymbol)(Data$dEq.eqInt)})()(aIsSymbol)(Data$dEq.eqString)(Type$dProxy.Proxy))
})({
  show: /* #__PURE__ */ Data$dShow.showArrayImpl(record => "{" + Data$dShow.showRecordFieldsCons$d0(aIsSymbol)({
    showRecordFields: Data$dShow.showRecordFieldsConsNil$d0(bIsSymbol)(Data$dShow.showInt)
  })(Data$dShow.showString)(Type$dProxy.Proxy)(record) + "}")
});
const ixIsSymbol$d0 = $__unused => "ix";
const ixIsSymbol = {reflectSymbol: ixIsSymbol$d0};
const assertEqual3 = /* #__PURE__ */ Assert.assertEqual({
  eq: /* #__PURE__ */ Data$dEq.eqArrayImpl(/* #__PURE__ */ Data$dEq.eqRowCons$d0({
    eqRecord: /* #__PURE__ */ Data$dEq.eqRowCons$d0({eqRecord: /* #__PURE__ */ Data$dEq.eqRowCons$d0(Data$dEq.eqRowNil)()(ixIsSymbol)(Data$dEq.eqInt)})()(bIsSymbol)(Data$dEq.eqInt)
  })()(aIsSymbol)(Data$dEq.eqString)(Type$dProxy.Proxy))
})({
  show: /* #__PURE__ */ Data$dShow.showArrayImpl(record => "{" + Data$dShow.showRecordFieldsCons$d0(aIsSymbol)({
    showRecordFields: Data$dShow.showRecordFieldsCons$d0(bIsSymbol)({showRecordFields: Data$dShow.showRecordFieldsConsNil$d0(ixIsSymbol)(Data$dShow.showInt)})(Data$dShow.showInt)
  })(Data$dShow.showString)(Type$dProxy.Proxy)(record) + "}")
});
const main = () => {
  const merged1 = [];
  const added1 = [];
  const deleted1 = [];
  const result = Snapshot$dHalogenVDomST01.diffWithIxE(
    ["1", "2", "3"],
    [1, 2],
    (ix, a, b) => {
      merged1.push({a, b});
      return {ix, a, b};
    },
    (v, a) => {deleted1.push(a);},
    (ix, b) => {
      added1.push(b);
      return {ix, a: "", b};
    }
  );
  const m1 = [...merged1];
  const a1 = [...added1];
  const d1 = [...deleted1];
  assertEqual("diffWithIxE/merged")({expected: [{a: "1", b: 1}, {a: "2", b: 2}], actual: m1})();
  Assert.assertEqual({eq: Data$dEq.eqArrayImpl(Data$dEq.eqIntImpl)})({show: Data$dShow.showArrayImpl(Data$dShow.showIntImpl)})("diffWithIxE/added")({expected: [], actual: a1})();
  Assert.assertEqual({eq: Data$dEq.eqArrayImpl(Data$dEq.eqStringImpl)})({show: Data$dShow.showArrayImpl(Data$dShow.showStringImpl)})("diffWithIxE/deleted")({
    expected: ["3"],
    actual: d1
  })();
  return assertEqual3("diffWithIxE/result")({expected: [{ix: 0, a: "1", b: 1}, {ix: 1, a: "2", b: 2}], actual: result})();
};
export {aIsSymbol, aIsSymbol$d0, assertEqual, assertEqual3, bIsSymbol, bIsSymbol$d0, ixIsSymbol, ixIsSymbol$d0, main};
