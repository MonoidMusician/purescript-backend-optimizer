const test4 = f => $0 => $1 => $2 => f($0, $1, $2);
const test3$d0 = f => g => g(1);
const test3 = f => g => $0 => $1 => f(test3$d0(f)(g), $0, $1);
const test2$d0 = f => g => g(1);
const test2 = f => g => $0 => f(test2$d0(f)(g), 2, $0);
const test1 = f => g => f(g(1), 2, 3);
export {test1, test2, test2$d0, test3, test3$d0, test4};
