const test4$d0 = f => g => g();
const test4$d1 = f => g => f();
const test4$d2 = f => g => g();
const test4$d3 = f => g => f();
const test4$d4 = f => g => g();
const test4 = f => g => x => test4$d0(f)(g)(test4$d1(f)(g)(test4$d2(f)(g)(test4$d3(f)(g)(test4$d4(f)(g)(x)))));
const test3$d0 = f => g => f();
const test3$d1 = f => g => g();
const test3$d2 = f => g => f();
const test3$d3 = f => g => g();
const test3 = f => g => x => test3$d0(f)(g)(test3$d1(f)(g)(test3$d2(f)(g)(test3$d3(f)(g)(x))));
const test2$d0 = f => g => g();
const test2$d1 = f => g => f();
const test2$d2 = f => g => g();
const test2$d3 = f => g => x => test2$d1(f)(g)(test2$d2(f)(g)(x));
const test2 = f => g => x => test2$d0(f)(g)(test2$d3(f)(g)(x));
const test1$d0 = f => g => f();
const test1$d1 = f => g => g();
const test1 = f => g => x => test1$d0(f)(g)(test1$d1(f)(g)(x));
export {
  test1,
  test1$d0,
  test1$d1,
  test2,
  test2$d0,
  test2$d1,
  test2$d2,
  test2$d3,
  test3,
  test3$d0,
  test3$d1,
  test3$d2,
  test3$d3,
  test4,
  test4$d0,
  test4$d1,
  test4$d2,
  test4$d3,
  test4$d4
};
