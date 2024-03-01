import { createSlice } from "@reduxjs/toolkit";

const nombreEntrenadorSlice = createSlice({
    name: "entrenadorName",
    initialState: '',
    reducers:{
        setTrainerName : (currentValue,action) => {return action.payload;} }

});
export const {setTrainerName} = nombreEntrenadorSlice.actions;

export  default nombreEntrenadorSlice.reducer;