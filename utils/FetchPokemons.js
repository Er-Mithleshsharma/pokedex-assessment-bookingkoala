// utils/fetchPokemons.js

export const fetchPokemonList = async (offset, limit = 12) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon list');
  }
  const data = await response.json();
  return {
    results: data.results, // Pokémon data
    next: data.next,       // Next URL for pagination
    previous: data.previous, // Previous URL for pagination
  };
};


export const fetchPokemonDetails = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon details');
  }
  const data = await response.json();
  return data;
};


// Fetch Pokémon by category (habitat, type, species)
export const fetchPokemonListByCategory = async (type) => {
  
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-habitat/`);
    if (!response.ok) {
      throw new Error('Failed to fetch Pokémon list');
    }
    const data = await response.json();
    return data.results;
};
export const fetchPokemonListByCategorys = async (type) => {
  
  const response = await fetch(`https://pokeapi.co/api/v2/type/`);
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon list');
  }
  const data = await response.json();
  return data.results;
};