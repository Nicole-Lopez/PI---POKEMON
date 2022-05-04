import axios from 'axios'



export function getPokemon () {
    return async function (dispatch) {
        let json= await axios.get('http://localhost:3001/pokemons')
        return dispatch({        
            type: 'GET_POKEMONS',
            payload: json.data
        })
    }
}


export function getDetail (id) {
    return async function (dispatch) {
        try{
        let json= await axios.get('http://localhost:3001/pokemons/'+id)
        return dispatch({        
            type: 'POKEMON_ID',
            payload: json.data
        })

        } catch(err){
            console.log(err)
        }
    }
}

// export const getPokemon =() => dispatch => {
//     return fetch('http://localhost:3001/pokemons')
//     .then(r => r.json())
//     .then(getpoke => dispatch({
//         type: 'GET_POKEMONS',
//         payload:getpoke
//     }))
// }

// export const getPokeName=(name) => dispatch =>{
//     return fetch('http://localhost:3001/pokemons?name=' + name)
//     .then(r => r.json())
//     .then(pokename => dispatch({
//         type:'GET_NAME_POKEMON',
//         payload:pokename
//     }))
// }

export function getPokeName (name){
    return async function (dispatch){
      try{
          let json= await axios.get('http://localhost:3001/pokemons?name='+ name)
          
          return dispatch ({
                type: 'GET_NAME_POKEMON',
                payload: json.data
            })
        }catch(error){
         console.log(error)
        }

    }
}


// export const getPokeId = (id)=> dispatch => {
//     return fetch(`http://localhost:3001/pokemons/${id}`)
//     .then(r => r.json())
//     .then(houseId=>dispatch({type:'POKEMON_ID', payload:houseId}))
// };s

export const getType = () => dispatch => {
    return fetch(`http://localhost:3001/types`)
    .then( r => r.json())
    .then(typeGet => dispatch ({
        type: 'GET_TYPES',
        payload: typeGet
    }))
}


export function postPokemon (payload){
    return async function (dispatch){
        const response = axios.post('http://localhost:3001/pokemons', payload)
        console.log(response)
        return response;
    }
}
    
export function pokemonCreate (payload){
    return async function (dispatch){
        const response = axios.post('http://localhost:3001/pokemons', payload)
        console.log(response)
        return response;
    }
}

export function filterByOrder (payload){
    return {
        type: 'FILTER_BY_ORDER',
        payload
    }
}

export function filterByAttack(payload){
    return {
        type: 'FILTER_BY_ATTACK',
        payload
    }
}
export function filterByType(payload){
    return {
        type:'FILTER_BY_TYPE',
        payload
    }
}
export function filterByDb(payload){
    return {
        type: 'FILTER_CREATED',
        payload
    };
}



