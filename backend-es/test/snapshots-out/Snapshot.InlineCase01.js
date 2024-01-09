// @inline Data.Maybe.maybe arity=2
// @inline Data.Maybe.maybe' arity=2
import * as $runtime from "../runtime.js";
const test5$d0 = a => g => g(1);
const test5 = a => g => v2 => {
  if (v2.tag === "Nothing") { return a + 1 | 0; }
  if (v2.tag === "Just") { return test5$d0(a)(g)(v2._1); }
  $runtime.fail();
};
const test4$d0 = f => g => g(1);
const test4 = f => g => v2 => {
  if (v2.tag === "Nothing") { return f(); }
  if (v2.tag === "Just") { return test4$d0(f)(g)(v2._1); }
  $runtime.fail();
};
const test3 = f => v2 => {
  if (v2.tag === "Nothing") { return f(); }
  if (v2.tag === "Just") { return 1 + v2._1 | 0; }
  $runtime.fail();
};
const test2$d0 = f => g => f();
const test2$d1 = f => g => g(1);
const test2 = f => g => v2 => {
  if (v2.tag === "Nothing") { return test2$d0(f)(g); }
  if (v2.tag === "Just") { return test2$d1(f)(g)(v2._1); }
  $runtime.fail();
};
const test1$d0 = f => f();
const test1 = f => v2 => {
  if (v2.tag === "Nothing") { return test1$d0(f); }
  if (v2.tag === "Just") { return 1 + v2._1 | 0; }
  $runtime.fail();
};
export {test1, test1$d0, test2, test2$d0, test2$d1, test3, test4, test4$d0, test5, test5$d0};
