const test9$d0 = g => g(42);
const test9 = g => () => {
  let ref = test9$d0(g);
  const prev = ref;
  ref = prev + 1 | 0;
  const $0 = ref;
  ref = 1 + $0 | 0;
  return ref;
};
const test8$d0 = g => r => g(g);
const test8 = g => r => () => {
  const $0 = r.value;
  return r.value = test8$d0(g)(r)($0);
};
const test7 = g => r => () => {
  const $0 = r.value;
  return r.value = g($0);
};
const test6$d0 = g => r => g(42);
const test6 = g => r => () => r.value = test6$d0(g)(r);
const test5 = r => () => r.value = 42;
const test4$d0 = g => r => g(r);
const test4 = g => r => () => test4$d0(g)(r).value;
const test3 = r => () => r.value;
const test2$d0 = g => g(42);
const test2 = g => () => ({value: test2$d0(g)});
const test1 = () => ({value: 42});
export {test1, test2, test2$d0, test3, test4, test4$d0, test5, test6, test6$d0, test7, test8, test8$d0, test9, test9$d0};
