-- @inline Data.Show.Generic.genericShowConstructor arity=2
-- @inline Data.Enum.Generic.genericEnumConstructor arity=1
-- @inline Data.Enum.Generic.genericEnumSum arity=4
-- @inline Data.Enum.Generic.genericEnumSum(..).genericPred' arity=1
-- @inline Data.Enum.Generic.genericEnumConstructor(..).genericPred' arity=1
-- @inline Data.Bounded.Generic.genericBottomConstructor arity=1
-- @inline Data.Bounded.Generic.genericBottomSum arity=1
-- @inline export genericTest.from arity=1
-- @inline export genericTest.to arity=1
module Snapshot.KnownConstructors08 where

import Prelude

import Data.Enum (class Enum)
import Data.Enum.Generic (genericPred, genericSucc)
import Data.Generic.Rep (class Generic)
import Data.Show.Generic (genericShow)

data Test
  = A | B | C | D | E | F | G | H | I | J | K -- | L | M
  -- | N | O | P | Q | R | S | T | U | V | W | X | Y | Z

-- derive instance Eq Test
-- derive instance Ord Test
derive instance genericTest :: Generic Test _

instance Show Test where
  show = genericShow

-- instance Enum Test where
--   pred = genericPred
--   succ = genericSucc
