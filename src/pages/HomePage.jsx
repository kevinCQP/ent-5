import React, { useRef } from 'react';
import {setTrainerName} from '../store/slices/trainerName.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



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
    <div className='hola'>
      <h1>Hola entrenador</h1>
      <h2>para poder comenzar dame tu nombre</h2>
      <form onSubmit={ponerMano}>
        <input type="text" ref={textoIntro} />
        <button>Comenzar</button>
      </form>
    </div>
  )
}

export default HomePage