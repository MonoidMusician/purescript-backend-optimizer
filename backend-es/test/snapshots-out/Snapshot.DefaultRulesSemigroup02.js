import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const append = /* #__PURE__ */ Data$dSemigroup.semigroupRecordCons$d0({reflectSymbol: $__unused => "bar"})()({
  appendRecord: /* #__PURE__ */ Data$dSemigroup.semigroupRecordCons$d0({reflectSymbol: $__unused => "foo"})()(Data$dSemigroup.semigroupRecordNil)(Data$dSemigroup.semigroupString)
})(Data$dSemigroup.semigroupArray)(Type$dProxy.Proxy);
const test4 = /* #__PURE__ */ append({foo: "hello", bar: ["hello"]})({foo: ", World!", bar: ["World!"]});
const test3 = /* #__PURE__ */ append({foo: "hello", bar: ["hello"]});
const test2 = a => b => append(a)(b);
const test1 = append;
export {append, test1, test2, test3, test4};
