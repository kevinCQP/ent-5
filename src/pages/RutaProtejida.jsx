import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const RutaProtejida = () => {

    const traineName = useSelector( (store)=>(store.trainerNameSlice))
    console.log(traineName)

    if (traineName.length>2){
  return <Outlet/>
    } else {return <Navigate to='/'/>} 

}

export default RutaProtejida;