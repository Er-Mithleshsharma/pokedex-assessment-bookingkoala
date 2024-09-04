"use client"
const usePokemonsById = (id) => {
    const [pokemons, setPokemons] = useState([]);
  
    useEffect(() => {
      const getPokemons = async (id) => {
        const pokemonList = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const pokemonDetails = await pokemonList.json();
        console.log(pokemonDetails)
        setPokemons(pokemonDetails);
      };
  
      getPokemons();
    }, []);
  
    return pokemons;
  };
  
  export default usePokemonsById;