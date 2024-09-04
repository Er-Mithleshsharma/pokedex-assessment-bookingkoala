
import PokemonDetailsClient from '../../../components/PokemonDetailsClient';

const PokemonDetails = async ({ params }) => {
  const { id } = params;

  // Fetch the Pokémon data directly in the server component
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  if (!response.ok) {
    // Return a simple error message if the fetch fails
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-gray-500">Failed to load Pokémon data.</div>
      </div>
    );
  }

  const pokemon = await response.json();

  return <PokemonDetailsClient pokemon={pokemon} />;
};

export default PokemonDetails;
