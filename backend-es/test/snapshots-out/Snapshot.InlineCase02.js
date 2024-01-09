// @inline Data.Maybe.maybe arity=3
// @inline Data.Maybe.maybe' arity=3
import * as $runtime from "../runtime.js";
const test5$d0 = a => g => z => g(1);
const test5 = a => g => z => {
  if (z.tag === "Nothing") { return a + 1 | 0; }
  if (z.tag === "Just") { return test5$d0(a)(g)(z)(z._1); }
  $runtime.fail();
};
const test4$d0 = f => g => z => g(1);
const test4 = f => g => z => {
  if (z.tag === "Nothing") { return f(); }
  if (z.tag === "Just") { return test4$d0(f)(g)(z)(z._1); }
  $runtime.fail();
};
const test3 = f => z => {
  if (z.tag === "Nothing") { return f(); }
  if (z.tag === "Just") { return 1 + z._1 | 0; }
  $runtime.fail();
};
const test2$d0 = f => g => z => f();
const test2$d1 = f => g => z => g(1);
const test2 = f => g => z => {
  if (z.tag === "Nothing") { return test2$d0(f)(g)(z); }
  if (z.tag === "Just") { return test2$d1(f)(g)(z)(z._1); }
  $runtime.fail();
};
const test1$d0 = f => z => f();
const test1 = f => z => {
  if (z.tag === "Nothing") { return test1$d0(f)(z); }
  if (z.tag === "Just") { return 1 + z._1 | 0; }
  $runtime.fail();
};
export {test1, test1$d0, test2, test2$d0, test2$d1, test3, test4, test4$d0, test5, test5$d0};
