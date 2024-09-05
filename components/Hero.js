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
      <div className="relative flex flex-col items-center justify-center text-center gap-16">
        <h1 className="text-white text-5xl font-bold animate-fade-slide-up mb-6">
          Welcome to Pokedex ~ By Mithlesh
        </h1>
        <Link href="#popular">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-full shadow-lg  transition-colors cursor-pointer scroll-smooth">
            Explore Popular Pokemons
          </span>
        </Link>
        <div className="flex space-x-4 ">
  <Link href="/habitat/cave"
     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
      Filter by habitat
    
  </Link>
  <Link href="/type/normal"
    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300">
      Filter by type
    
  </Link>
</div>
      </div>
    </div>
  );
}

export default Hero;
