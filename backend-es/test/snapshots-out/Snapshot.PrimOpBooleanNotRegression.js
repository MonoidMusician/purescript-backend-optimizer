const test$d0 = comp => a => b => comp(a)(b);
const test = comp => a => b => test$d0(comp)(a)(b) === "LT" || test$d0(comp)(a)(b) === "GT" || test$d0(comp)(a)(b) !== "EQ";
export {test, test$d0};
