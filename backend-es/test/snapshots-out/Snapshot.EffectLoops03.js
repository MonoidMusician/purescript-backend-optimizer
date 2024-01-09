import * as Effect$dConsole from "../Effect.Console/index.js";
const test4 = cond => ref => () => {
  while (cond.value) {
    const a = ref.value;
    if (a < 10) {
      Effect$dConsole.log("foo")();
    } else {
      Effect$dConsole.log("wat")();
    }
  }
};
const test3 = cond => ref => () => {
  while (cond.value) {
    const a = ref.value;
    const $0 = Effect$dConsole.log("foo");
    if (a < 10) { $0(); }
  }
};
const test2$d0 = cond => Effect$dConsole.log("foo");
const test2 = cond => () => {
  while (cond.value) {
    test2$d0(cond)();
  }
  const $0 = Effect$dConsole.log("bar");
  while (cond.value) {
    $0();
  }
};
const test1$d0 = cond => Effect$dConsole.log("foo");
const test1 = cond => () => {
  while (cond.value) {
    test1$d0(cond)();
    Effect$dConsole.log("bar")();
  }
};
export {test1, test1$d0, test2, test2$d0, test3, test4};
