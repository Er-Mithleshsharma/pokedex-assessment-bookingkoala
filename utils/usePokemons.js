"use client";
// utils/usePokemons.js
import { useEffect, useState } from 'react';

const fetchPokemonList = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
  const data = await response.json();
  return data.results;
};

const fetchPokemonDetails = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const pokemonList = await fetchPokemonList();
      const pokemonDetails = await Promise.all(pokemonList.map(pokemon => fetchPokemonDetails(pokemon.url)));
      setPokemons(pokemonDetails);
    };

    getPokemons();
  }, []);

  return pokemons;
};

export default usePokemons;
