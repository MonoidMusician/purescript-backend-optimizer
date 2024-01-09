import * as $runtime from "../runtime.js";
const test4 = ref => lo => hi => () => {
  for (const a of $runtime.range(lo, hi)) {
    if (a < 10) {
      const $0 = ref.value;
      ref.value = $0 + a | 0;
    } else {
      const $0 = ref.value;
      ref.value = $0 + 1 | 0;
    }
  }
};
const test3 = ref => lo => hi => () => {
  for (const a of $runtime.range(lo, hi)) {
    if (a < 10) {
      const $0 = ref.value;
      ref.value = $0 + a | 0;
    }
  }
};
const test2$d0 = ref => lo => hi => lo + 1 | 0;
const test2$d1 = ref => lo => hi => hi + 1 | 0;
const test2 = ref => lo => hi => () => {
  for (const a of $runtime.range(test2$d0(ref)(lo)(hi), test2$d1(ref)(lo)(hi))) {
    const $0 = ref.value;
    ref.value = $0 + a | 0;
  }
  for (const $0 of $runtime.range(lo + 1 | 0, hi + 1 | 0)) {
    const $1 = ref.value;
    ref.value = $0 + $1 | 0;
  }
  for (const $0 of $runtime.range(lo + 1 | 0, hi + 1 | 0)) {
    const $1 = ref.value;
    ref.value = $1 + 1 | 0;
  }
};
const test1$d0 = ref => lo => hi => lo + 1 | 0;
const test1$d1 = ref => lo => hi => hi + 1 | 0;
const test1 = ref => lo => hi => () => {
  for (const a of $runtime.range(test1$d0(ref)(lo)(hi), test1$d1(ref)(lo)(hi))) {
    const $0 = ref.value;
    ref.value = $0 + a | 0;
    const $1 = ref.value;
    ref.value = $1 + a | 0;
  }
};
export {test1, test1$d0, test1$d1, test2, test2$d0, test2$d1, test3, test4};
