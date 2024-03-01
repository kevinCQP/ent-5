import axios from 'axios';
import { useState } from 'react'

const useFetch = () => {
    
    //para obtener la api se necesita un estado
  const [papiData, setPapiData] = useState();
  //funcion para obtener la api
  const obtenerApi = (url)=>{
        axios.get(url)
        .then(res=>setPapiData(res.data))
        .catch(err=>console.log(err))
}
  const obtenerApiTipo = (url)=>{
        axios.get(url)
         .then(res=>setPapiData({
          results: res.data.pokemon.map(poke=>poke.pokemon)
          }))
         .catch(err => console.log(err));
}
  return [papiData, obtenerApi, obtenerApiTipo ]; 
}

export default useFetch