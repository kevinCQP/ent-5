import { createSlice } from "@reduxjs/toolkit";

const pokemonNameSlice = createSlice({
    name: "pokemon",
    initialState: '',
    reducers: {
      setPokemonNombre: (currentValue, action) => action.payload,

    }
});
export const {setPokemonNombre} = pokemonNameSlice.actions;
export default pokemonNameSlice.reducer;