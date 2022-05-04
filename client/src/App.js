// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './containers/LandingPage'
// import HomePage from './containers/HomePage'
// import Home from './component/Home/Home'
import HomePage from './containers/HomePage'
// import DetailPoke from './component/Detail/DetailPoke'
import DetailsPokemon from './containers/DetailsPokemon'
import PokemonCreate from './containers/PokemonCreate'

// import PokemonCreate from './component/CreatePoke/CreatePokemon'
// import PokemonCreate from './component/CreatePoke/PokemonCreate'

function App() {
  	return (

		<div className="App">
	  		<BrowserRouter>
	  			<Routes>
		  			<Route exact path='/' element={<LandingPage />} />
		  			{/*<Route path='/pokemons' element={<Home />} />
      				<Route path="/pokemons/:id" element={<DetailPoke />} />*/}
      				<Route path="/pokemons" element={<HomePage />} />
      				<Route path="/pokemons/:id" element={<DetailsPokemon />} />
      				<Route path="/pokemons/create" element={<PokemonCreate />} />

      				{/*<Route exact path="/pokemons/create" element={<PokemonCreate />} />*/}
			  	</Routes>
			</BrowserRouter>  		     
		</div>
	);
}

export default App;
