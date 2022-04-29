import axios from 'axios';

export const GET_CHARACTERS = 'GET_CHARACTERS'


export function getCharacters(pages) {
	return async function(dispatch) {
		var json = await axios.get('http://localhost:3001/pokemons?page='+pages)
	return dispatch({ 
		type:GET_CHARACTERS, 
		payload: json.data 
	});
	}
}







