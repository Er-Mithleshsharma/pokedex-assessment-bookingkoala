import { fetchPokemonList, fetchPokemonDetails } from '../utils/FetchPokemons';
import PokemonCard from './PokemonCard';
import LoadMoreButton from './LoadMoreButton'; // Import the new client component

export const runtime = 'edge'; // Optional but indicates this is server-rendered

const PopularPage = async ({ searchParams }) => {
  const offset = parseInt(searchParams?.offset || '0', 10);
  const { results: pokemonList, next } = await fetchPokemonList(offset);

  const pokemonDetails = await Promise.all(
    pokemonList.map(pokemon => fetchPokemonDetails(pokemon.url))
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
    <section
      id="popular"
      className="py-20 h-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Popular Pokémon</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pokemonDetails.map(pokemon => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              backgroundColor={getTypeColor(pokemon)}
            />
          ))}
        </div>

        {/* Render the Load More button using the client component */}
        {next && <LoadMoreButton offset={offset} />}
      </div>
    </section>
  );
};

export default PopularPage;
