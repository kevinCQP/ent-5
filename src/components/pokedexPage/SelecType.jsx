import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import { useDispatch } from 'react-redux';
import { setPokemonNombre } from '../../store/slices/pokemonName.slice';

const SelecType = ({setSelectValue}) => {
    
    const dispatch = useDispatch();
    const [tipos, getTipo] = useFetch();
    useEffect(() => {
        const url =  'https://pokeapi.co/api/v2/type';
        getTipo(url);
    }, [])
    const textSelection = useRef();
    const cambioMano =()=>  {
          setSelectValue(textSelection.current.value);
          dispatch(setPokemonNombre(''));
    }
   
    
  return (
    <select onChange={cambioMano}  ref={textSelection}>
        <option value="allPokemons">All Pokemons</option>
        {
          tipos?.results.map(tipo=>(
            <option key={tipo.url}
            value={tipo.url}>{tipo.name}</option>
          ))
        }
    </select>
  )
}

export default SelecType;