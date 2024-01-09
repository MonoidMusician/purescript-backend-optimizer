import * as Data$dShow from "../Data.Show/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
const test4 = arr => () => {
  for (const a of arr) {
    if (a < 10) {
      Effect$dConsole.log(Data$dShow.showIntImpl(a))();
    } else {
      Effect$dConsole.log("wat")();
    }
  }
};
const test3 = arr => () => {
  for (const a of arr) {
    const $0 = Effect$dConsole.log(Data$dShow.showIntImpl(a));
    if (a < 10) { $0(); }
  }
};
const test2$d0 = k => k(42);
const test2 = k => () => {
  for (const a of test2$d0(k)) {
    Effect$dConsole.log(Data$dShow.showIntImpl(a))();
  }
  for (const $0 of k(42)) {
    Effect$dConsole.log(Data$dShow.showIntImpl($0))();
  }
  const $0 = Effect$dConsole.log("wat");
  for (const $1 of k(42)) {
    $0();
  }
};
const test1$d0 = k => k(42);
const test1 = k => () => {
  for (const a of test1$d0(k)) {
    Effect$dConsole.log(Data$dShow.showIntImpl(a))();
    Effect$dConsole.log(Data$dShow.showIntImpl(a))();
  }
};
export {test1, test1$d0, test2, test2$d0, test3, test4};
