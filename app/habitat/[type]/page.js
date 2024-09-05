import { fetchPokemonListByCategory, fetchPokemonDetails } from '../../../utils/FetchPokemons';
import PokemonCard from '../../../components/PokemonCard';
import TypeDropdown from '../../../components/TypeDropdown';

export default async function CategorizedPage({ params }) {
  const { type } = params; // Get the type from the URL

  // Fetch available types from your API or a static list
  const types = ['cave', 'forest','grassland','mountain','rare','rough-terrain' , 'sea','urban']; // Update this list based on available types

  // Fetch Pokémon based on the selected type
  try {
    const pokemonList = await fetchPokemonListByCategory(type);
    const ppokemonDetails = await Promise.all(
      pokemonList.map(pokemon => fetchPokemonDetails(pokemon.url))
    );

    // Check if you got the correct Pokémon species
    const selectedTypeDetails = ppokemonDetails.find(detail => detail.name === type) || { pokemon_species: [] };
    const allPokemonSpecies = selectedTypeDetails.pokemon_species || [];
    const pokemonDetails = await Promise.all(
      allPokemonSpecies.map(pokemon =>
        fetchPokemonDetails(pokemon.url.replace('pokemon-species', 'pokemon'))
      )
    );

    const typeColors = {
      normal: "#A8A878",
      fire: "#F08030",
      water: "#6890F0",
      electric: "#F8D030",
      grass: "#78C850",
      ice: "#98D8D8",
      fighting: "#C03028",
      poison: "#A040A0",
      ground: "#E0C068",
      flying: "#A890F0",
      psychic: "#F85888",
      bug: "#A8B820",
      rock: "#B8A038",
      ghost: "#705898",
      dragon: "#7038F8",
      dark: "#705848",
      steel: "#B8B8D0",
      fairy: "#EE99AC",
    };

    const getTypeColor = (pokemon) => {
      const mainType = pokemon?.types[0]?.type?.name;
      return typeColors[mainType] || "#FFFFFF"; // Default to white if color is not found
    };

    return (
      <section className="py-20 h-auto bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 capitalize">{type} Pokémon</h2>
          <TypeDropdown types={types} str ="habitat" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pokemonDetails.map(pokemon => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                backgroundColor={getTypeColor(pokemon)}
              />
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error(`Failed to fetch Pokémon for type: ${type}`, error);
    return (
      <section className="py-20 h-auto bg-red-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Error fetching {type} Pokémon</h2>
        </div>
      </section>
    );
  }
}
