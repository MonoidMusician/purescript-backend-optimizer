// @inline Data.Show.Generic.genericShowConstructor arity=2
// -- @inline Data.Enum.Generic.genericEnumConstructor arity=1
// @inline Data.Enum.Generic.genericEnumSum arity=4
// -- @inline Data.Bounded.Generic.genericBottomConstructor arity=1
// -- @inline Data.Bounded.Generic.genericBottomSum arity=1
// @inline export genericTest.from arity=1
import * as $runtime from "../runtime.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
const $Test = tag => tag;
const Foo = /* #__PURE__ */ $Test("Foo");
const Bar = /* #__PURE__ */ $Test("Bar");
const Baz = /* #__PURE__ */ $Test("Baz");
const Qux = /* #__PURE__ */ $Test("Qux");
const eqTest = {
  eq: x => y => {
    if (x === "Foo") { return y === "Foo"; }
    if (x === "Bar") { return y === "Bar"; }
    if (x === "Baz") { return y === "Baz"; }
    return x === "Qux" && y === "Qux";
  }
};
const ordTest = {
  compare: x => y => {
    if (x === "Foo") {
      if (y === "Foo") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "Foo") { return Data$dOrdering.GT; }
    if (x === "Bar") {
      if (y === "Bar") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "Bar") { return Data$dOrdering.GT; }
    if (x === "Baz") {
      if (y === "Baz") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "Baz") { return Data$dOrdering.GT; }
    if (x === "Qux" && y === "Qux") { return Data$dOrdering.EQ; }
    $runtime.fail();
  },
  Eq0: () => eqTest
};
const genericTest = {
  to: x => {
    if (x.tag === "Inl") { return Foo; }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return Bar; }
      if (x._1.tag === "Inr") {
        if (x._1._1.tag === "Inl") { return Baz; }
        if (x._1._1.tag === "Inr") { return Qux; }
      }
    }
    $runtime.fail();
  },
  from: x => {
    if (x === "Foo") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (x === "Bar") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
    if (x === "Baz") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))); }
    if (x === "Qux") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments))); }
    $runtime.fail();
  }
};
const enumTest = {
  pred: x => {
    if (x === "Foo") { return Data$dMaybe.Nothing; }
    if (x === "Bar") { return Data$dMaybe.$Maybe("Just", Foo); }
    if (x === "Baz") { return Data$dMaybe.$Maybe("Just", Bar); }
    if (x === "Qux") { return Data$dMaybe.$Maybe("Just", Baz); }
    $runtime.fail();
  },
  succ: x => {
    if (x === "Foo") { return Data$dMaybe.$Maybe("Just", Bar); }
    if (x === "Bar") { return Data$dMaybe.$Maybe("Just", Baz); }
    if (x === "Baz") { return Data$dMaybe.$Maybe("Just", Qux); }
    if (x === "Qux") { return Data$dMaybe.Nothing; }
    $runtime.fail();
  },
  Ord0: () => ordTest
};
const showTest = {
  show: x => {
    if (x === "Foo") { return "Foo"; }
    if (x === "Bar") { return "Bar"; }
    if (x === "Baz") { return "Baz"; }
    if (x === "Qux") { return "Qux"; }
    $runtime.fail();
  }
};
export {$Test, Bar, Baz, Foo, Qux, enumTest, eqTest, genericTest, ordTest, showTest};
