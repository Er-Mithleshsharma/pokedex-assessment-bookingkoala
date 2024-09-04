import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div 
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('./bg.jpg')" }}
    >
      {/* Dark Overlay and Blur */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-5xl font-bold animate-fade-slide-up mb-6">
          Welcome to Pokedex ~ By Mithlesh
        </h1>
        <Link href="#popular">
          <span className="bg-red-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-red-700 transition-colors cursor-pointer scroll-smooth">
            Explore Popular Pokemons
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
