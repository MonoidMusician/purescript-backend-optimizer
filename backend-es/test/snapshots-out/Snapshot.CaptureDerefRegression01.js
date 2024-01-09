const $Box = _1 => ({tag: "Box", _1});
const Box = value0 => $Box(value0);
const test3$d0 = v => v._1;
const test3 = v => $Box(b => test3$d0(v) + b | 0);
const test2$d0 = v => v._1;
const test2 = v => b => test2$d0(v) + b | 0;
const test1 = v => b => v._1 + b | 0;
export {$Box, Box, test1, test2, test2$d0, test3, test3$d0};
