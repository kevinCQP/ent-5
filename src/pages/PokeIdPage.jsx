import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom';
import './styles/pokeIdPage.css'
const PokeIdPage = () => {
  const [pokemon, getPokemon] = useFetch();
  const param = useParams();
  
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${param.id}`
    getPokemon(url);
  }, [])

  console.log(pokemon)
  

  return (
    <div>
      <div className='fondo'>
       <div className='fondo_rojo'>
       <figure  >
          <img  className='poke_imagen' src="..\assets\pokedex.png" alt="pokedex" />
         </figure>
       </div>
       <div className='fondo_negro'></div>
      </div>
     
    <section className='imagen'>
       <article className='tarjeta'>
         <div className='tarjeta_sup'> 
          <div className='img_card'>
           <img className='imagen_pokemon' src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon imagen" />
          
         </div>
        </div>
        <article><h3>{pokemon?.name}</h3></article>
         <section className='peso_nom_altura'>
          <div><span><h4>weigth</h4><hr /></span>{pokemon?.weight}</div>
          <div><span><h4>Altura</h4><hr /></span>{pokemon?.height}</div>
         </section>
            <div className='spanes'>
              <span className='span_1'>tipo</span>
              <span className='span_1'>habilidades</span>
            </div>
             <section className='tipo_skill'>
              <div className='tipo'> 
               {pokemon?.types.map((item, index) => (
                 <div className='tipos_1' key={index}>{item.type.name}</div>))}
                 </div>
              <div className='skills'> 
               {pokemon?.abilities.map((item, index) => (
               <div className='skills_1' key={index}>{item.ability.name}</div>))}
              </div>
                 </section>
                   <article className='text_hp'> 
                     <span> HP </span><span>status</span>
                  </article>
                   <section className='stats'>
                     <div className='barra_general'>
                       {pokemon?.stats.map((stat, index) => (
                        stat.stat.name === 'hp' ? (
                       <div key={index} style={{
                        width: `${stat.base_stat}%`,
                        backgroundColor: 'blue',
                       height: '100%', // Altura de la barra
                       }}></div>
                       ) : null
                       ))}
                     </div>
                   </section>
                   <article className='text_hp'> 
                     <span> Ataque </span><span>status</span>
                  </article>
                 <section className='stats'>
                   <div className='barra_general'>
                   {pokemon?.stats.map((stat, index) => (
                        stat.stat.name === 'attack' ? (
                       <div key={index} style={{
                        width: `${stat.base_stat}%`,
                        backgroundColor: 'blue',
                       height: '100%', // Altura de la barra
                       }}></div>
                       ) : null
                       ))}
                   </div>
                   </section>
                   <article className='text_hp'> 
                     <span> Defensa </span><span>status</span>
                  </article>
                 <section className='stats'>
                   <div className='barra_general'>
                   {pokemon?.stats.map((stat, index) => (
                        stat.stat.name === 'defense' ? (
                       <div key={index} style={{
                        width: `${stat.base_stat}%`,
                        backgroundColor: 'blue',
                       height: '100%', // Altura de la barra
                       }}></div>
                       ) : null
                       ))}
                   </div>
                   </section>
                   <article className='text_hp'> 
                     <span> Velocidad </span><span>status</span>
                  </article>
                 <section className='stats'>
                   <div className='barra_general'>
                   {pokemon?.stats.map((stat, index) => (
                        stat.stat.name === 'speed' ? (
                       <div key={index} style={{
                        width: `${stat.base_stat}%`,
                        backgroundColor: 'blue',
                       height: '100%', // Altura de la barra
                       }}></div>
                       ) : null
                       ))}
                   </div>

            </section>

      </article>
    </section>
    
    </div>
  )
}

export default PokeIdPage