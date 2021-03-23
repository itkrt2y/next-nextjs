/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { ScalarsEnumsHash } from "gqless";

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export const scalarsEnumsHash: ScalarsEnumsHash = {
  Int: true,
  ID: true,
  String: true,
  Float: true,
  Boolean: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: "String!" },
    query: { __type: "Query" },
    pokemons: { __type: "[Pokemon]", __args: { first: "Int!" } },
    pokemon: { __type: "Pokemon", __args: { id: "String", name: "String" } },
  },
  mutation: {},
  subscription: {},
  Pokemon: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    number: { __type: "String" },
    name: { __type: "String" },
    weight: { __type: "PokemonDimension" },
    height: { __type: "PokemonDimension" },
    classification: { __type: "String" },
    types: { __type: "[String]" },
    resistant: { __type: "[String]" },
    attacks: { __type: "PokemonAttack" },
    weaknesses: { __type: "[String]" },
    fleeRate: { __type: "Float" },
    maxCP: { __type: "Int" },
    evolutions: { __type: "[Pokemon]" },
    evolutionRequirements: { __type: "PokemonEvolutionRequirement" },
    maxHP: { __type: "Int" },
    image: { __type: "String" },
  },
  PokemonDimension: {
    __typename: { __type: "String!" },
    minimum: { __type: "String" },
    maximum: { __type: "String" },
  },
  PokemonAttack: {
    __typename: { __type: "String!" },
    fast: { __type: "[Attack]" },
    special: { __type: "[Attack]" },
  },
  Attack: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
    type: { __type: "String" },
    damage: { __type: "Int" },
  },
  PokemonEvolutionRequirement: {
    __typename: { __type: "String!" },
    amount: { __type: "Int" },
    name: { __type: "String" },
  },
} as const;

/**
 * Query any Pokémon by number or name
 */
export interface Query {
  __typename: "Query" | undefined;
  query?: Maybe<Query>;
  pokemons: (args: {
    first: ScalarsEnums["Int"];
  }) => Maybe<Array<Maybe<Pokemon>>>;
  pokemon: (args?: {
    id?: ScalarsEnums["String"];
    name?: ScalarsEnums["String"];
  }) => Maybe<Pokemon>;
}

export interface Mutation {
  __typename: "Mutation" | undefined;
}

export interface Subscription {
  __typename: "Subscription" | undefined;
}

/**
 * Represents a Pokémon
 */
export interface Pokemon {
  __typename: "Pokemon" | undefined;
  /**
   * The ID of an object
   */
  id: ScalarsEnums["ID"];
  /**
   * The identifier of this Pokémon
   */
  number?: ScalarsEnums["String"];
  /**
   * The name of this Pokémon
   */
  name?: ScalarsEnums["String"];
  /**
   * The minimum and maximum weight of this Pokémon
   */
  weight?: Maybe<PokemonDimension>;
  /**
   * The minimum and maximum weight of this Pokémon
   */
  height?: Maybe<PokemonDimension>;
  /**
   * The classification of this Pokémon
   */
  classification?: ScalarsEnums["String"];
  /**
   * The type(s) of this Pokémon
   */
  types?: Array<Maybe<ScalarsEnums["String"]>>;
  /**
   * The type(s) of Pokémons that this Pokémon is resistant to
   */
  resistant?: Array<Maybe<ScalarsEnums["String"]>>;
  /**
   * The attacks of this Pokémon
   */
  attacks?: Maybe<PokemonAttack>;
  /**
   * The type(s) of Pokémons that this Pokémon weak to
   */
  weaknesses?: Array<Maybe<ScalarsEnums["String"]>>;
  fleeRate?: ScalarsEnums["Float"];
  /**
   * The maximum CP of this Pokémon
   */
  maxCP?: ScalarsEnums["Int"];
  /**
   * The evolutions of this Pokémon
   */
  evolutions?: Maybe<Array<Maybe<Pokemon>>>;
  /**
   * The evolution requirements of this Pokémon
   */
  evolutionRequirements?: Maybe<PokemonEvolutionRequirement>;
  /**
   * The maximum HP of this Pokémon
   */
  maxHP?: ScalarsEnums["Int"];
  image?: ScalarsEnums["String"];
}

/**
 * Represents a Pokémon's dimensions
 */
export interface PokemonDimension {
  __typename: "PokemonDimension" | undefined;
  /**
   * The minimum value of this dimension
   */
  minimum?: ScalarsEnums["String"];
  /**
   * The maximum value of this dimension
   */
  maximum?: ScalarsEnums["String"];
}

/**
 * Represents a Pokémon's attack types
 */
export interface PokemonAttack {
  __typename: "PokemonAttack" | undefined;
  /**
   * The fast attacks of this Pokémon
   */
  fast?: Maybe<Array<Maybe<Attack>>>;
  /**
   * The special attacks of this Pokémon
   */
  special?: Maybe<Array<Maybe<Attack>>>;
}

/**
 * Represents a Pokémon's attack types
 */
export interface Attack {
  __typename: "Attack" | undefined;
  /**
   * The name of this Pokémon attack
   */
  name?: ScalarsEnums["String"];
  /**
   * The type of this Pokémon attack
   */
  type?: ScalarsEnums["String"];
  /**
   * The damage of this Pokémon attack
   */
  damage?: ScalarsEnums["Int"];
}

/**
 * Represents a Pokémon's requirement to evolve
 */
export interface PokemonEvolutionRequirement {
  __typename: "PokemonEvolutionRequirement" | undefined;
  /**
   * The amount of candy to evolve
   */
  amount?: ScalarsEnums["Int"];
  /**
   * The name of the candy to evolve
   */
  name?: ScalarsEnums["String"];
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  Pokemon: Pokemon;
  PokemonDimension: PokemonDimension;
  PokemonAttack: PokemonAttack;
  Attack: Attack;
  PokemonEvolutionRequirement: PokemonEvolutionRequirement;
}
export type SchemaObjectTypesNames =
  | "Query"
  | "Mutation"
  | "Subscription"
  | "Pokemon"
  | "PokemonDimension"
  | "PokemonAttack"
  | "Attack"
  | "PokemonEvolutionRequirement";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
