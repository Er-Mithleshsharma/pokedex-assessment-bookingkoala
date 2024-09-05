import Link from 'next/link';

const PokemonCard = ({ pokemon, backgroundColor }) => {
  return (
    <Link href={`pokemon/${pokemon.id}`}>
    <div className="flex flex-col p-4 rounded-lg m-4 shadow-md overflow-hidden" style={{ backgroundColor }}>
      <div className="flex items-center rounded-lg overflow-hidden w-full">
        <img
          src={pokemon.sprites?.front_default}
          alt={pokemon?.name}
          className="w-32 h-32 object-cover mx-auto mt-4 transition-transform transform hover:scale-110"
        />
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold capitalize text-black">{pokemon.name}</h3>
          <p className="text-sm text-gray-700">Height: {pokemon.height / 10}m</p>
          <p className="text-sm text-gray-700">Base Experience: {pokemon.base_experience}</p>
        </div>
      </div>

      <div className="flex flex-col items-center text-lg font-semibold capitalize text-black mt-4">
        <h4 className="text-center mb-2">Abilities:</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {pokemon?.abilities?.map((ability, index) => (
            <span key={index} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {ability.ability.name}
            </span>
          ))}
        </div>

        <div className="w-full">
          <h4 className="text-center mb-2">Stats:</h4>
          <div className="flex flex-wrap justify-center gap-2">
          {pokemon?.stats?.map((stat) => (
            <div key={stat.stat.name} className="w-full">
              <p className="text-sm font-semibold text-gray-700">{stat.stat.name}</p>
              <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
                <div
                  className="bg-purple-600 h-2.5 rounded-full"
                  style={{ width: `${(stat.base_stat / 150) * 100}%` }}  // Render stat as a static percentage
                ></div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default PokemonCard;
