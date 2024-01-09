// @inline ConvertableOptions.convertRecordOptionsCons arity=6
// @inline ConvertableOptions.convertRecordOptionsNil always
// @inline export flub always
// @inline export flubImpl never
import * as ConvertableOptions from "../ConvertableOptions/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Record$dUnsafe$dUnion from "../Record.Unsafe.Union/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $Flub = () => ({tag: "Flub"});
const barIsSymbol$d0 = $__unused => "bar";
const barIsSymbol = {reflectSymbol: barIsSymbol$d0};
const bazIsSymbol$d0 = $__unused => "baz";
const bazIsSymbol = {reflectSymbol: bazIsSymbol$d0};
const Flub = /* #__PURE__ */ $Flub();
const flubImpl = v => "???";
const defaultOptions = {foo: 42, baz: Data$dMaybe.Nothing};
const convertFlubDefault$d0 = v => v1 => a => a;
const convertFlubDefault = {convertOption: convertFlubDefault$d0};
const convertFlubBaz2$d0 = v => v1 => mb => mb;
const convertFlubBaz2 = {convertOption: convertFlubBaz2$d0};
const convertFlubBaz1$d0 = v => v1 => bool => Data$dMaybe.$Maybe("Just", bool);
const convertFlubBaz1 = {convertOption: convertFlubBaz1$d0};
const convertFlubBar2$d0 = v => v1 => str => str;
const convertFlubBar2 = {convertOption: convertFlubBar2$d0};
const test1 = /* #__PURE__ */ flubImpl(/* #__PURE__ */ Record$dUnsafe$dUnion.unsafeUnionFn(
  /* #__PURE__ */ ConvertableOptions.convertRecordOptionsCons$d0(ConvertableOptions.convertRecordOptionsNil)(convertFlubBar2)()()()(barIsSymbol)(Flub)(Type$dProxy.Proxy)({
    bar: "Hello"
  })({}),
  defaultOptions
));
const test2 = /* #__PURE__ */ flubImpl(/* #__PURE__ */ Record$dUnsafe$dUnion.unsafeUnionFn(
  /* #__PURE__ */ ConvertableOptions.convertRecordOptionsCons$d0({
    convertRecordOptions: /* #__PURE__ */ ConvertableOptions.convertRecordOptionsCons$d0(ConvertableOptions.convertRecordOptionsNil)(convertFlubDefault)()()()({
      reflectSymbol: $__unused => "foo"
    })
  })(convertFlubBar2)()()()(barIsSymbol)(Flub)(Type$dProxy.Proxy)({foo: 99, bar: "Hello"})({}),
  defaultOptions
));
const test3 = /* #__PURE__ */ flubImpl(/* #__PURE__ */ Record$dUnsafe$dUnion.unsafeUnionFn(
  /* #__PURE__ */ ConvertableOptions.convertRecordOptionsCons$d0({
    convertRecordOptions: /* #__PURE__ */ ConvertableOptions.convertRecordOptionsCons$d0({
      convertRecordOptions: /* #__PURE__ */ ConvertableOptions.convertRecordOptionsCons$d0(ConvertableOptions.convertRecordOptionsNil)(convertFlubDefault)()()()({
        reflectSymbol: $__unused => "foo"
      })
    })(convertFlubBaz2)()()()(bazIsSymbol)
  })(convertFlubBar2)()()()(barIsSymbol)(Flub)(Type$dProxy.Proxy)({foo: 99, bar: "Hello", baz: /* #__PURE__ */ Data$dMaybe.$Maybe("Just", true)})({}),
  defaultOptions
));
const convertFlubBar1$d0 = v => v1 => $$int => Data$dShow.showIntImpl($$int);
const convertFlubBar1 = {convertOption: convertFlubBar1$d0};
const test4 = /* #__PURE__ */ flubImpl(/* #__PURE__ */ Record$dUnsafe$dUnion.unsafeUnionFn(
  /* #__PURE__ */ ConvertableOptions.convertRecordOptionsCons$d0({
    convertRecordOptions: /* #__PURE__ */ ConvertableOptions.convertRecordOptionsCons$d0({
      convertRecordOptions: /* #__PURE__ */ ConvertableOptions.convertRecordOptionsCons$d0(ConvertableOptions.convertRecordOptionsNil)(convertFlubDefault)()()()({
        reflectSymbol: $__unused => "foo"
      })
    })(convertFlubBaz1)()()()(bazIsSymbol)
  })(convertFlubBar1)()()()(barIsSymbol)(Flub)(Type$dProxy.Proxy)({foo: 99, bar: 42, baz: true})({}),
  defaultOptions
));
export {
  $Flub,
  Flub,
  barIsSymbol,
  barIsSymbol$d0,
  bazIsSymbol,
  bazIsSymbol$d0,
  convertFlubBar1,
  convertFlubBar1$d0,
  convertFlubBar2,
  convertFlubBar2$d0,
  convertFlubBaz1,
  convertFlubBaz1$d0,
  convertFlubBaz2,
  convertFlubBaz2$d0,
  convertFlubDefault,
  convertFlubDefault$d0,
  defaultOptions,
  flubImpl,
  test1,
  test2,
  test3,
  test4
};
