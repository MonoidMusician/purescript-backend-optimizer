const test4 = ref => arr => () => {
  for (const a of arr) {
    if (a < 10) {
      const $0 = ref.value;
      ref.value = $0 + a | 0;
    } else {
      const $0 = ref.value;
      ref.value = $0 + 1 | 0;
    }
  }
};
const test3 = ref => arr => () => {
  for (const a of arr) {
    if (a < 10) {
      const $0 = ref.value;
      ref.value = $0 + a | 0;
    }
  }
};
const test2$d0 = ref => k => k(42);
const test2 = ref => k => () => {
  for (const a of test2$d0(ref)(k)) {
    const $0 = ref.value;
    ref.value = $0 + a | 0;
  }
  for (const $0 of k(42)) {
    const $1 = ref.value;
    ref.value = $0 + $1 | 0;
  }
  for (const $0 of k(42)) {
    const $1 = ref.value;
    ref.value = $1 + 1 | 0;
  }
};
const test1$d0 = ref => k => k(42);
const test1 = ref => k => () => {
  for (const a of test1$d0(ref)(k)) {
    const $0 = ref.value;
    ref.value = $0 + a | 0;
    const $1 = ref.value;
    ref.value = $1 + a | 0;
  }
};
export {test1, test1$d0, test2, test2$d0, test3, test4};
