// File: PokemonDetailsClient.js
"use client";

import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const PokemonDetailsClient = ({ pokemon, species, habitat, similarPokemon }) => {
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
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {pokemon.stats.map((stat) => (
            <div key={stat.stat.name} className="w-full sm:w-1/2">
              <p className="text-center text-gray-600 text-lg font-medium">{stat.stat.name.toUpperCase()}</p>
              <ProgressBar
                completed={stat.base_stat}
                maxCompleted={150}
                bgColor="#6b46c1"
                baseBgColor="#e2e8f0"
                height="12px"
                className="rounded-full shadow-sm"
                labelClassName="hidden"
              />
            </div>
          ))}
        </div>

        {/* Habitat, Species, and Type Information */}
        <h4 className="text-xl font-semibold text-gray-700 text-center mb-4">Details</h4>
        <div className="overflow-x-auto mb-6">
  <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
    <tbody>
      <tr className="border-b">
        <td className="px-6 py-4 text-right text-lg font-medium text-gray-700">Habitat:</td>
        <td className="px-6 py-4 text-left text-lg text-gray-700">{habitat ? habitat.name : 'Unknown'}</td>
      </tr>
      <tr className="border-b">
        <td className="px-6 py-4 text-right text-lg font-medium text-gray-700">Species:</td>
        <td className="px-6 py-4 text-left text-lg text-gray-700">{species.genera[7]?.genus || species.name}</td>
      </tr>
      <tr>
        <td className="px-6 py-4 text-right text-lg font-medium text-gray-700">Types:</td>
        <td className="px-6 py-4 text-left text-lg text-gray-700">{pokemon.types.map(type => type.type.name).join(', ')}</td>
      </tr>
    </tbody>
  </table>
</div>

        {/* Similar Pokémon List */}
        <h4 className="text-xl font-semibold text-gray-700 text-center mb-4">Similar Pokémon</h4>
        <div className="flex flex-wrap justify-center gap-4">
          {similarPokemon.map((poke, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-4 w-40 text-center shadow-sm hover:shadow-lg transition-shadow duration-200"
            >
              <p className="capitalize font-semibold text-gray-700">{poke.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsClient;
