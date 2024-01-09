// @inline Snapshot.BranchSpecialization01.eqTest.eq arity=2
const $Test = tag => tag;
const Foo = /* #__PURE__ */ $Test("Foo");
const Bar = /* #__PURE__ */ $Test("Bar");
const Baz = /* #__PURE__ */ $Test("Baz");
const Qux = /* #__PURE__ */ $Test("Qux");
const eqTest$d0 = x => y => {
  if (x === "Foo") { return y === "Foo"; }
  if (x === "Bar") { return y === "Bar"; }
  if (x === "Baz") { return y === "Baz"; }
  return x === "Qux" && y === "Qux";
};
const eqTest = {eq: eqTest$d0};
const test1 = a => a === "Baz";
const test2 = a => a === "Baz";
export {$Test, Bar, Baz, Foo, Qux, eqTest, eqTest$d0, test1, test2};
