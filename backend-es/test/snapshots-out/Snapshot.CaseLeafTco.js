import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
const test1$dv = b => arr => Data$dArray.last(arr);
const test1 = test1$a0$copy => test1$a1$copy => {
  let test1$a0 = test1$a0$copy, test1$a1 = test1$a1$copy, test1$c = true, test1$r;
  while (test1$c) {
    const b = test1$a0, arr = test1$a1;
    if (0 < arr.length) {
      if (test1$dv(b)(arr).tag === "Just") {
        if (test1$dv(b)(arr)._1 === 2 && arr[0] === 1) {
          test1$c = false;
          test1$r = arr;
          continue;
        }
        if (b) {
          test1$c = false;
          test1$r = [];
          continue;
        }
        test1$a0 = b;
        test1$a1 = [test1$dv(b)(arr)._1, arr[0], 3, test1$dv(b)(arr)._1, 5, 6, 7, 8, 9, 10, arr[0], 12, 13, 14, 15, 16, 17, ...arr];
        continue;
      }
      if (test1$dv(b)(arr).tag === "Nothing") {
        test1$c = false;
        test1$r = [...arr, arr[0]];
        continue;
      }
      $runtime.fail();
    }
    if (test1$dv(b)(arr).tag === "Just") {
      test1$c = false;
      test1$r = [...arr, test1$dv(b)(arr)._1];
      continue;
    }
    if (test1$dv(b)(arr).tag === "Nothing") {
      test1$c = false;
      test1$r = arr;
      continue;
    }
    $runtime.fail();
  }
  return test1$r;
};
export {test1, test1$dv};
