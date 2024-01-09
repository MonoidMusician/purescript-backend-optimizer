import * as Data$dMaybe from "../Data.Maybe/index.js";
const span$dgo = p => arr => i => {
  if (i >= 0 && i < arr.length) {
    if (p(arr[i])) { return span$dgo(i + 1 | 0); }
    return Data$dMaybe.$Maybe("Just", i);
  }
  return Data$dMaybe.Nothing;
};
const span = p => arr => span$dgo(0);
export {span, span$dgo};
