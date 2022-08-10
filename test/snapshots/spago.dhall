{ name = "snapshots"
, dependencies =
  [ "arrays"
  , "console"
  , "convertable-options"
  , "effect"
  , "either"
  , "foldable-traversable"
  , "functions"
  , "heterogeneous"
  , "integers"
  , "maybe"
  , "partial"
  , "prelude"
  , "profunctor-lenses"
  , "record"
  , "refs"
  , "tuples"
  , "type-equality"
  , "variant"
  ]
, packages = ./packages.dhall
, sources = [ "./*.purs", "./*/*.purs" ]
}
