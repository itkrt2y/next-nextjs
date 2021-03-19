import { gql } from '@urql/core';
import * as Urql from '@urql/preact';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Query any Pokémon by number or name */
export type Query = {
  readonly __typename?: 'Query';
  readonly query?: Maybe<Query>;
  readonly pokemons?: Maybe<ReadonlyArray<Maybe<Pokemon>>>;
  readonly pokemon?: Maybe<Pokemon>;
};


/** Query any Pokémon by number or name */
export type QueryPokemonsArgs = {
  first: Scalars['Int'];
};


/** Query any Pokémon by number or name */
export type QueryPokemonArgs = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** Represents a Pokémon */
export type Pokemon = {
  readonly __typename?: 'Pokemon';
  /** The ID of an object */
  readonly id: Scalars['ID'];
  /** The identifier of this Pokémon */
  readonly number?: Maybe<Scalars['String']>;
  /** The name of this Pokémon */
  readonly name?: Maybe<Scalars['String']>;
  /** The minimum and maximum weight of this Pokémon */
  readonly weight?: Maybe<PokemonDimension>;
  /** The minimum and maximum weight of this Pokémon */
  readonly height?: Maybe<PokemonDimension>;
  /** The classification of this Pokémon */
  readonly classification?: Maybe<Scalars['String']>;
  /** The type(s) of this Pokémon */
  readonly types?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The type(s) of Pokémons that this Pokémon is resistant to */
  readonly resistant?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The attacks of this Pokémon */
  readonly attacks?: Maybe<PokemonAttack>;
  /** The type(s) of Pokémons that this Pokémon weak to */
  readonly weaknesses?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly fleeRate?: Maybe<Scalars['Float']>;
  /** The maximum CP of this Pokémon */
  readonly maxCP?: Maybe<Scalars['Int']>;
  /** The evolutions of this Pokémon */
  readonly evolutions?: Maybe<ReadonlyArray<Maybe<Pokemon>>>;
  /** The evolution requirements of this Pokémon */
  readonly evolutionRequirements?: Maybe<PokemonEvolutionRequirement>;
  /** The maximum HP of this Pokémon */
  readonly maxHP?: Maybe<Scalars['Int']>;
  readonly image?: Maybe<Scalars['String']>;
};

/** Represents a Pokémon's dimensions */
export type PokemonDimension = {
  readonly __typename?: 'PokemonDimension';
  /** The minimum value of this dimension */
  readonly minimum?: Maybe<Scalars['String']>;
  /** The maximum value of this dimension */
  readonly maximum?: Maybe<Scalars['String']>;
};

/** Represents a Pokémon's attack types */
export type PokemonAttack = {
  readonly __typename?: 'PokemonAttack';
  /** The fast attacks of this Pokémon */
  readonly fast?: Maybe<ReadonlyArray<Maybe<Attack>>>;
  /** The special attacks of this Pokémon */
  readonly special?: Maybe<ReadonlyArray<Maybe<Attack>>>;
};

/** Represents a Pokémon's attack types */
export type Attack = {
  readonly __typename?: 'Attack';
  /** The name of this Pokémon attack */
  readonly name?: Maybe<Scalars['String']>;
  /** The type of this Pokémon attack */
  readonly type?: Maybe<Scalars['String']>;
  /** The damage of this Pokémon attack */
  readonly damage?: Maybe<Scalars['Int']>;
};

/** Represents a Pokémon's requirement to evolve */
export type PokemonEvolutionRequirement = {
  readonly __typename?: 'PokemonEvolutionRequirement';
  /** The amount of candy to evolve */
  readonly amount?: Maybe<Scalars['Int']>;
  /** The name of the candy to evolve */
  readonly name?: Maybe<Scalars['String']>;
};

export type PokemonsQueryVariables = Exact<{
  first: Scalars['Int'];
}>;


export type PokemonsQuery = (
  { readonly __typename: 'Query' }
  & { readonly pokemons?: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename: 'Pokemon' }
    & Pick<Pokemon, 'id' | 'number' | 'name'>
  )>>> }
);


export const PokemonsDocument = gql`query pokemons($first:Int!){__typename pokemons(first:$first){__typename id number name}}`;

export function usePokemonsQuery(options: Omit<Urql.UseQueryArgs<PokemonsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PokemonsQuery>({ query: PokemonsDocument, ...options });
};