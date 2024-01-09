const test$dc = f => f(2);
const test = f => ({b: f(1), c1: test$dc(f), c2: test$dc(f)});
export {test, test$dc};
