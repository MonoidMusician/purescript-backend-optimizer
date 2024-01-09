const test2$dk = n => m => {
  if (m === 100) { return test2(m - 1 | 0); }
  if (m === 900) { return 42; }
  return test2$dk(m - 1 | 0);
};
const test2 = n => {
  if (n === 0) { return n; }
  if (n <= 100) { return test2(n - 1 | 0); }
  return test2$dk(n - 1 | 0);
};
const test = test$a0$copy => {
  let test$a0 = test$a0$copy, test$c = true, test$r;
  while (test$c) {
    const n = test$a0;
    const k = k$a0$copy => {
      let k$a0 = k$a0$copy, k$c = true, k$r;
      while (k$c) {
        const m = k$a0;
        if (m === 100) {
          k$c = false;
          test$a0 = m - 1 | 0;
          continue;
        }
        if (m === 900) {
          test$c = k$c = false;
          test$r = 42;
          continue;
        }
        k$a0 = m - 1 | 0;
      }
      return k$r;
    };
    if (n === 0) {
      test$c = false;
      test$r = n;
      continue;
    }
    if (n <= 100) {
      test$a0 = n - 1 | 0;
      continue;
    }
    k(n - 1 | 0);
  }
  return test$r;
};
export {test, test2, test2$dk};
