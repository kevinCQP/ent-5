import React, { useRef } from 'react';
import {setTrainerName} from '../store/slices/trainerName.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../pages/styles/homePage.css'


const HomePage = () => {
  
  const textoIntro  = useRef();
  const dispatch = useDispatch();
  const trainerName = useSelector((store)=>store.trainerNameSlice);
  const navegacion = useNavigate();

  
  const ponerMano  = (event) =>{
    event.preventDefault();
    //event.current.value.trim()
    dispatch(setTrainerName(textoIntro.current.value.trim()));
    navegacion('/pokedex');
  }
  
  return (
    <div className='hello'>
      <figure  >
        <img  className='img_pokedex' src="..\assets\pokedex.png" alt="pokedex" />
      </figure>
       <h1>¡Hola entrenador!</h1>
       <h2>Para poder comenzar dame tu nombre</h2>
        <form onSubmit={ponerMano}>
         <input type="text" ref={textoIntro} />
         <button>Comenzar</button>
        </form>
      <div className='fondo_pie'></div>
      <section className='fondo_nigga'></section>
      <section className=''></section>
      
    </div>
    
  )
}

export default HomePage