// pages/popular.js
"use client";

import React, { useState } from 'react';
import Popular from '../components/Popular'; // Adjust the import path
import LoadMoreButton from '../components/LoadMoreButton'; // Adjust the import path
import usePokemons from '../utils/usePokemons'; // Adjust the import path

const PopularClient = () => {
  const allPokemons = usePokemons();
  const [visibleCount, setVisibleCount] = useState(12);

  return (
    <>
      <Popular pokemons={allPokemons.slice(0, visibleCount)} setVisibleCount={setVisibleCount} />
    </>
  );
};

export default PopularClient;
