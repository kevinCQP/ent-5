import { configureStore } from "@reduxjs/toolkit";
import trainerNameSlice from "./slices/trainerName.slice.js";
import pokemonName from "./slices/pokemonName.slice.js";

const store = configureStore ({
 reducer:{
    trainerNameSlice, 
    pokemonName,
 }
});
export default store;