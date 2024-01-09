import * as $runtime from "../runtime.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
const test4 = lo => hi => () => {
  for (const a of $runtime.range(lo, hi)) {
    if (a < 10) {
      Effect$dConsole.log(Data$dShow.showIntImpl(a))();
    } else {
      Effect$dConsole.log("wat")();
    }
  }
};
const test3 = lo => hi => () => {
  for (const a of $runtime.range(lo, hi)) {
    const $0 = Effect$dConsole.log(Data$dShow.showIntImpl(a));
    if (a < 10) { $0(); }
  }
};
const test2$d0 = lo => hi => lo + 1 | 0;
const test2$d1 = lo => hi => hi + 1 | 0;
const test2 = lo => hi => () => {
  for (const a of $runtime.range(test2$d0(lo)(hi), test2$d1(lo)(hi))) {
    Effect$dConsole.log(Data$dShow.showIntImpl(a))();
  }
  for (const $0 of $runtime.range(lo + 1 | 0, hi + 1 | 0)) {
    Effect$dConsole.log(Data$dShow.showIntImpl($0))();
  }
  const $0 = Effect$dConsole.log("wat");
  for (const $1 of $runtime.range(lo + 1 | 0, hi + 1 | 0)) {
    $0();
  }
};
const test1$d0 = lo => hi => lo + 1 | 0;
const test1$d1 = lo => hi => hi + 1 | 0;
const test1 = lo => hi => () => {
  for (const a of $runtime.range(test1$d0(lo)(hi), test1$d1(lo)(hi))) {
    Effect$dConsole.log(Data$dShow.showIntImpl(a))();
    Effect$dConsole.log(Data$dShow.showIntImpl(a))();
  }
};
export {test1, test1$d0, test1$d1, test2, test2$d0, test2$d1, test3, test4};
