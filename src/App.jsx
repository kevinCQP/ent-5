
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import PokedexPages from './pages/PokedexPages';
import PokeIdPage from './pages/PokeIdPage';
import RutaProtejida from './pages/RutaProtejida';

function App() {
  

  return (
    
    
    
    <Routes>
      <Route path='/' element={<HomePage/>}/>
        <Route element={<RutaProtejida/>}>
         <Route path='/pokedex' element={<PokedexPages/>}/>
         <Route path='/pokedex/:id' element={<PokeIdPage/>}/>
        </Route>
    </Routes> 
    
   
    
  )
}

export default App
