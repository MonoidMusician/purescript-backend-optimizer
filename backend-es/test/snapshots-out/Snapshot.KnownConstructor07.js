const test$dz = f => y => f(y);
const test = f => y => ({bar: test$dz(f)(y) - 2 | 0, foo: test$dz(f)(y) + 1 | 0});
export {test, test$dz};
