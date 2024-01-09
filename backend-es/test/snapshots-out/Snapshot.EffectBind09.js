import * as Effect$dConsole from "../Effect.Console/index.js";
const when$p = bool => k => {
  if (bool) { return k(); }
  return () => {};
};
const test1$d0 = bool => {
  if (bool) { return Effect$dConsole.log("1"); }
  return () => {};
};
const test1 = bool => () => {
  test1$d0(bool)();
  if (bool) { Effect$dConsole.log("2")(); }
  if (bool) { return Effect$dConsole.log("3")(); }
};
export {test1, test1$d0, when$p};
