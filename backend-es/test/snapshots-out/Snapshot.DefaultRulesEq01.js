import * as Data$dEq from "../Data.Eq/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const eq = /* #__PURE__ */ Data$dEq.eqRowCons$d0({
  eqRecord: /* #__PURE__ */ Data$dEq.eqRowCons$d0({eqRecord: /* #__PURE__ */ Data$dEq.eqRowCons$d0(Data$dEq.eqRowNil)()({reflectSymbol: $__unused => "foo"})(Data$dEq.eqInt)})()({
    reflectSymbol: $__unused => "baz"
  })(Data$dEq.eqBoolean)
})()({reflectSymbol: $__unused => "bar"})(Data$dEq.eqString)(Type$dProxy.Proxy);
const test9 = x => eq({foo: 42, bar: "hello", baz: true})({foo: 42, bar: x(), baz: true});
const test8 = x => eq({foo: 42, bar: "hello", baz: false})({foo: 43, bar: x(), baz: false});
const test7 = /* #__PURE__ */ eq({foo: 42, bar: "hello", baz: false})({foo: 43, bar: "hello", baz: false});
const test6 = /* #__PURE__ */ eq({foo: 42, bar: "hello", baz: false})({foo: 42, bar: "hello", baz: false});
const test5 = a => eq(a)({foo: 42, bar: "hello", baz: false});
const test4 = a => eq({foo: 42, bar: "hello", baz: false})(a);
const test3 = /* #__PURE__ */ eq({foo: 42, bar: "hello", baz: false});
const test2 = a => b => eq(a)(b);
const test10 = x => eq({foo: 42, bar: x(), baz: true});
const test1 = eq;
export {eq, test1, test10, test2, test3, test4, test5, test6, test7, test8, test9};
