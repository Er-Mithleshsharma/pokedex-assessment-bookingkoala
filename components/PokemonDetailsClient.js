// File: PokemonDetailsClient.js
"use client";

import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const PokemonDetailsClient = ({ pokemon }) => {
  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col items-center p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-lg">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-40 h-40 object-cover mt-4 transition-transform transform hover:scale-125"
        />
        <div className="text-center mt-4">
          <h3 className="text-2xl font-bold capitalize text-white">{pokemon.name}</h3>
          <p className="text-lg text-white mt-2">Height: {pokemon.height / 10}m</p>
          <p className="text-lg text-white mt-1">Base Experience: {pokemon.base_experience}</p>
        </div>
      </div>

      <div className="p-6 bg-gray-50">
        <h4 className="text-xl font-semibold text-gray-700 text-center mb-4">Abilities</h4>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {pokemon.abilities.map((ability, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-blue-300 to-purple-300 text-blue-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-transform transform hover:scale-105"
            >
              {ability.ability.name}
            </span>
          ))}
        </div>

        <h4 className="text-xl font-semibold text-gray-700 text-center mb-4">Stats</h4>
        <div className="flex flex-wrap justify-center gap-4">
          {pokemon.stats.map((stat) => (
            <div key={stat.stat.name} className="w-full sm:w-1/2">
              <p className="text-center text-gray-600 text-lg font-medium">{stat.stat.name.toUpperCase()}</p>
              <ProgressBar
                completed={stat.base_stat}
                maxCompleted={150}
                bgColor="#6b46c1" // Custom color for the progress bar
                baseBgColor="#e2e8f0" // Base color for the background
                height="12px" // Increased height for better visibility
                className="rounded-full shadow-sm"
                labelClassName="hidden" // Hiding label for a cleaner look
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsClient;
