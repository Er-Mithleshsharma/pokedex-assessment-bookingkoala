import ProgressBar from '@ramonak/react-progress-bar';
import Link from 'next/link';

const PokemonCard = ({ pokemon, backgroundColor }) => {
  return (
    <Link href={`pokemon/${pokemon.id}`}>
    <div className="flex flex-col p-4 rounded-lg m-4 shadow-md overflow-hidden" style={{ backgroundColor }}>
      <div className="flex items-center rounded-lg overflow-hidden w-full">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
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
          {pokemon.abilities.map((ability, index) => (
            <span key={index} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {ability.ability.name}
            </span>
          ))}
        </div>

        <div className="w-full">
          <h4 className="text-center mb-2">Stats:</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name} className="flex flex-col w-1/2 sm:w-1/4 mb-2" style={{ marginTop: stat.stat.name === "speed" ? "20px" : "" }}>
                <p className="text-center text-sm font-medium ">{stat.stat.name.toUpperCase()}</p>
                <ProgressBar
                  completed={stat.base_stat}
                  maxCompleted={100}
                  bgColor="#fff" // Custom color for the progress bar
                  baseBgColor="#gray" // Base color for the background
                  height="10px" // Increased height for better visibility
                  className="rounded-full shadow-md" // Rounded corners and shadow for better look
                  labelClassName="label"
                />
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
