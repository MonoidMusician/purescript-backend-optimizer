const test2$d0 = a => a + 1 | 0;
const test2 = a => () => test2$d0(a);
const test1 = () => 1;
export {test1, test2, test2$d0};
