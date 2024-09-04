import React from "react";
import Image from 'next/image';
import pokeballImg from '../public/pokeball.webp'; // Adjust the path as needed

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 h-[10vh] shadow-lg pl-4 pr-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-extrabold tracking-wider drop-shadow-lg" style={{ fontFamily: "'Bebas Neue', cursive" }}>
          POKEDEX APP
        </h1>
        <div className="pt-1">
          <Image 
            src={pokeballImg} 
            alt="Poké Ball" 
            width={60} 
            height={60} 
            className="drop-shadow-lg"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
