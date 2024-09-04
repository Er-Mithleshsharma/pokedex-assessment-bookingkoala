// File: PokemonDetails.server.js

import PokemonDetailsClient from '../../../components/PokemonDetailsClient';

const PokemonDetails = async ({ params }) => {
  const { id } = params;

  // Fetch the Pokémon data
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  if (!response.ok) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-gray-500">Failed to load Pokémon data.</div>
      </div>
    );
  }

  const pokemon = await response.json();

  // Fetch species data to get the habitat and other species details
  const speciesResponse = await fetch(pokemon.species.url);
  const species = await speciesResponse.json();

  // Fetch similar Pokémon based on type
  const similarPokemonPromises = pokemon.types.map(async (type) => {
    const typeResponse = await fetch(type.type.url);
    const typeData = await typeResponse.json();
    return typeData.pokemon.map((poke) => poke.pokemon);
  });

  const similarPokemon = (await Promise.all(similarPokemonPromises)).flat().slice(0, 5); // Limit to 5 similar Pokémon

  return (
    <PokemonDetailsClient
      pokemon={pokemon}
      species={species}
      habitat={species.habitat}
      similarPokemon={similarPokemon}
    />
  );
};

export default PokemonDetails;
