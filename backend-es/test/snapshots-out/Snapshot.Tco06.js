const f$d0 = a => b => a + b | 0;
const $gf = ($gf$b$copy, $gf$a0$copy, $gf$a1$copy) => {
  let $gf$b = $gf$b$copy, $gf$a0 = $gf$a0$copy, $gf$a1 = $gf$a1$copy, $gf$c = true, $gf$r;
  while ($gf$c) {
    if ($gf$b === 0) {
      const a = $gf$a0;
      $gf$b = 1;
      $gf$a0 = a;
      $gf$a1 = a + 1 | 0;
      continue;
    }
    if ($gf$b === 1) {
      const a = $gf$a0, b = $gf$a1;
      $gf$b = 1;
      $gf$a0 = f$d0(a)(b);
      $gf$a1 = f$d0(a)(b) + 1 | 0;
    }
  }
  return $gf$r;
};
const g = a => $gf(0, a);
const f = a => b => $gf(1, a, b);
export {f, f$d0, g};
