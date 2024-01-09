import * as $runtime from "../runtime.js";
import * as Control$dCategory from "../Control.Category/index.js";
const fold = dictFoldable => dictMonoid => dictFoldable.foldMap(dictMonoid)(Control$dCategory.categoryFn$d0);
const test = v1 => {
  if (v1.tag === "Nothing") { return ""; }
  if (v1.tag === "Just") { return v1._1; }
  $runtime.fail();
};
export {fold, test};
