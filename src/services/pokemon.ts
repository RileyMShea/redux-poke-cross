// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pokemon } from "./types";
const { fetch } = require("cross-fetch");
// const fetch = require("isomorphic-fetch");

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
    fetchFn: fetch,
  }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => ({
        url: `pokemon/${name}`,
        responseHandler: async (response) => {
          const y = await response;
          const x = await y.json();
          y.headers.forEach((v, k) => console.log(k, v));
          console.log(x);
          return x;
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi;
