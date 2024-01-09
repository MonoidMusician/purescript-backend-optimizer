// @inline Data.Show.Generic.genericShowConstructor arity=2
// @inline export genericTest.from arity=1
import * as $runtime from "../runtime.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
const $Test = tag => tag;
const Foo = /* #__PURE__ */ $Test("Foo");
const Bar = /* #__PURE__ */ $Test("Bar");
const Baz = /* #__PURE__ */ $Test("Baz");
const Qux = /* #__PURE__ */ $Test("Qux");
const genericTest$d0 = x => {
  if (x.tag === "Inl") { return Foo; }
  if (x.tag === "Inr") {
    if (x._1.tag === "Inl") { return Bar; }
    if (x._1.tag === "Inr") {
      if (x._1._1.tag === "Inl") { return Baz; }
      if (x._1._1.tag === "Inr") { return Qux; }
    }
  }
  $runtime.fail();
};
const genericTest$d1 = x => {
  if (x === "Foo") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
  if (x === "Bar") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
  if (x === "Baz") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))); }
  if (x === "Qux") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments))); }
  $runtime.fail();
};
const genericTest = {to: genericTest$d0, from: genericTest$d1};
const showTest$d0 = x => {
  if (x === "Foo") {
    return Data$dShow$dGeneric.genericShowConstructor$d0(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: $__unused => "Foo"})(Data$dGeneric$dRep.NoArguments);
  }
  if (x === "Bar") {
    return Data$dShow$dGeneric.genericShowConstructor$d0(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: $__unused => "Bar"})(Data$dGeneric$dRep.NoArguments);
  }
  if (x === "Baz") {
    return Data$dShow$dGeneric.genericShowConstructor$d0(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: $__unused => "Baz"})(Data$dGeneric$dRep.NoArguments);
  }
  if (x === "Qux") {
    return Data$dShow$dGeneric.genericShowConstructor$d0(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: $__unused => "Qux"})(Data$dGeneric$dRep.NoArguments);
  }
  $runtime.fail();
};
const showTest = {show: showTest$d0};
export {$Test, Bar, Baz, Foo, Qux, genericTest, genericTest$d0, genericTest$d1, showTest, showTest$d0};
