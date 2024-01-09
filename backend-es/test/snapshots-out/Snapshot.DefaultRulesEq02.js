import * as Data$dEq from "../Data.Eq/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const test6 = y => !Data$dEq.eqRowCons$d0({
  eqRecord: Data$dEq.eqRowCons$d0({eqRecord: Data$dEq.eqRowCons$d0(Data$dEq.eqRowNil)()({reflectSymbol: $__unused => "foo"})(Data$dEq.eqInt)})()({reflectSymbol: $__unused => "baz"})(Data$dEq.eqBoolean)
})()({reflectSymbol: $__unused => "bar"})(Data$dEq.eqString)(Type$dProxy.Proxy)({foo: 42, bar: "hello", baz: false})(y);
const test5 = y => 12 !== y;
const test4 = a => a !== 12;
const test3 = a => 12 !== a;
const test2 = a => b => a !== b;
const test1 = x => y => x !== y;
export {test1, test2, test3, test4, test5, test6};
