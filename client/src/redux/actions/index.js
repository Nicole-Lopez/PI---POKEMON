import axios from 'axios'

export function getPokemon () {
    return async function (dispatch) {
        try{
        let info= await axios.get('http://localhost:3001/pokemons')
            return dispatch({        
                type: 'GET_POKEMONS',
                payload: info.data
            })

        } catch(err){
            console.log(err)
        }}
}

export function getType () {
    return async function (dispatch) {
        try{
        let info= await axios.get('http://localhost:3001/types')
        return dispatch({        
            type: 'GET_TYPES',
            payload: info.data
            })
        } catch(err){
            console.log(err)
        }
    }
}

export function clear (){
    return {
        type: 'CLEAR'
    }
}

export function getDetail (id) {
    return async function (dispatch) {
        try{
        let info= await axios.get('http://localhost:3001/pokemons/'+id)
            return dispatch({        
                type: 'POKEMON_ID',
                payload: info.data
            })
        } catch(err){
            console.log(err)
        }
    }
}


export function getPokeName (name){
    return async function (dispatch){
        try{
            let info= await axios.get('http://localhost:3001/pokemons?name='+ name)   
            if (info.data =="This pokemon was not found") {
                return dispatch ({
                    type: 'ERROR',
                    payload: info.data
                })  
            } else {
                return dispatch ({
                    type: 'GET_NAME_POKEMON',
                    payload: info.data
                })  

            }
              
            



        }catch(err){
            console.log(err)
        }
    }
}

    
export function pokemonCreate (payload){
    return async function (dispatch){
        const response = axios.post('http://localhost:3001/pokemons', payload)
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
