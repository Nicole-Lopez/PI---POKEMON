import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './containers/LandingPage'
import HomePage from './containers/HomePage'

function App() {
  	return (

		<div className="App">
	  		<BrowserRouter>
	  			<Routes>
		  			<Route exact path='/' element={<LandingPage />} />
		  			<Route path='/pokemons' element={<HomePage />} />
			  		
			  	</Routes>
			</BrowserRouter>  		     
		</div>
	);
}

export default App;
