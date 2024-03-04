import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPokemonNombre } from '../store/slices/pokemonName.slice';
import useFetch from '../hooks/useFetch';
import PokeCards from '../components/pokedexPage/PokeCards';
import SelecType from '../components/pokedexPage/SelecType';
import './styles/pokedexPage.css'


const PokedexPages = () => {

  const [selectValue, setSelectValue] = useState('allpokemons');
  const traineName = useSelector( (store)=>(store.trainerNameSlice));
  const nombrePokemon = useSelector( (store)=>(store.pokemonName));
  const  despachar = useDispatch();
  const [pokemons, getApicito, obtenerApiTipo] = useFetch();
  const textImput = useRef();
  
 

  useEffect(() => {
   if (selectValue === 'allpokemons') {
     const url = 'https://pokeapi.co/api/v2/pokemon/?limit=30';
     getApicito(url);}
    else { 
      obtenerApiTipo(selectValue);
    }
   
  }, [selectValue]);
  
  const handleSubmit = (event) => {
   event.preventDefault();
   despachar(setPokemonNombre(textImput.current.value.trim().toLowerCase()))
   textImput.current.value = '';
  }
  
  const cbFilter =()=>{
    if (nombrePokemon){
      return pokemons?.results.filter(element => element.name.includes(nombrePokemon)); }
      else{
        return pokemons?.results;}
    }
 
  return (
    
  <div>
    <div className='fondo_1'>
       <div className='fondo_rojo_1'>
       
         <figure  >
          <img  className='poke_page_img' src="..\assets\pokedex.png" alt="pokedex" />
         </figure>
       </div>
       <div className='fondo_negro_1'>
          <div className='pokebola'></div>
           <div className='poke_2'></div>
           
       </div>
    </div>
      <div className='pokedex'>
       <section className='poke_head'>
        <h3><span>Bienvenido {traineName}, </span>aqui pondras encontrar tu pokemon favorito</h3>
         <div className='container'>
          <form onSubmit={handleSubmit}>
           <input type="text" ref={textImput} />
           <button>Buscar</button>
          </form>
            <SelecType
            setSelectValue ={setSelectValue}
            />
         </div>
      </section>
      <section className='poke_container'>
        {
          cbFilter()?.map(poke =>(
            <PokeCards
            key={poke.url}
            url={poke.url}/>
           ))
         }
       </section>
      </div>
     </div>
  )
}

export default PokedexPages