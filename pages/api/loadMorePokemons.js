// pages/api/loadMorePokemons.js

import { fetchPokemonList, fetchPokemonDetails } from '../../utils/FetchPokemons'; // Adjust the import path

export default async function handler(req, res) {
  const { offset } = req.query; // Offset for pagination
  const limit = 12; // Number of Pokémon to load per request

  const pokemonList = await fetchPokemonList(); // Fetch the full list of Pokémon
  const pokemonDetails = await Promise.all(
    pokemonList.slice(Number(offset), Number(offset) + limit).map(pokemon => fetchPokemonDetails(pokemon.url))
  );

  res.status(200).json(pokemonDetails);
}
