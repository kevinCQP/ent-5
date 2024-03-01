import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom';

const PokeIdPage = () => {
  const [pokemon, getPokemon] = useFetch();
  const param = useParams();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${param.id}`
    getPokemon(url);
  }, [])
  console.log(pokemon)
  

  return (
    <article>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon imagen" />
        <h3>{pokemon?.name}</h3>
    </article>
  )
}

export default PokeIdPage