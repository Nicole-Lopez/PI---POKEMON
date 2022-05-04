const initialState = {
    pokemons: [],
    allPokemons: [],
    detail:[],
    setPokeDetai:[],
    typePokemon:[]
}

export default function rootReducer (state= initialState, action){
    switch (action.type){
        case 'GET_POKEMONS':
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }
        case  'GET_TYPES':
            return{
                ...state,
                typePokemon: action.payload,
                detail:[]
            }
        case 'GET_NAME_POKEMON':
            return {
                ...state,
                pokemons:action.payload
            }

        case 'POKEMON_ID':
            return {
                ...state,
                detail:action.payload
            }
        
        
        case 'POST_POKEMON':
            return {
                ...state
            }
     

        case 'FILTER_BY_TYPE':
        let allFilterPoke = state.allPokemons
        let typesFilt = []
        if (action.payload === 'allTypes') {
            typesFilt= allFilterPoke           
        }
        else{
            typesFilt= allFilterPoke.filter((el)=> el.types.includes(action.payload))
        }

        // const typeFiltered = action.payload === 'allTypes' ? allFilterPoke : allFilterPoke.filter((el)=> el.types.includes(action.payload))
        return {
            ...state,
            pokemons: typesFilt
        }
      
        case 'FILTER_BY_ORDER':
              let ordAsc = state.pokemons.sort((a,b)=>{
                            if (a.name < b.name) {
                              return -1;
                            }
                            if (a.name > b.name) {
                              return 1;
                            }
                              return 0;
                          })

              if (action.payload=='asc') {
                return {
                    ...state,
                    pokemons:ordAsc
                }
              }

              if (action.payload=='des') {
                return {
                    ...state,
                    pokemons:ordAsc.reverse()
                }
              }            


        case 'FILTER_BY_ATTACK':
            let ord = state.pokemons.sort((a,b)=>{
              return a.attack - b.attack;
            })
            

            if (action.payload=='major') {
                return {
                    ...state,
                    pokemons:ord
                }            
            }

            if (action.payload=='minor') {
                return {
                    ...state,
                    pokemons:ord.reverse()
                }            
            }

        case 'FILTER_CREATED': 
            let allPoks=state.allPokemons
            state.pokemons = allPoks
            if (action.payload == 'all') {
                return {
                    ...state,
                    pokemons:allPoks
                }      
            }
            if (action.payload == 'api') {
                return {
                    ...state,
                    pokemons:state.pokemons.filter((e)=>e.fromApi)  
                }      
            }
            if (action.payload == 'db') {
                return {
                    ...state,
                    pokemons:state.pokemons.filter((e)=>!e.fromApi) 
                }       
            }



            // const allPoke = state.allPokemons
            // let createdFilter= []
            // if(action.payload == 'db'){
            //     return createdFilter = allPoke.filter((poke)=> poke.createdInDB)
            // }else if(action.payload == 'api'){
            //     return createdFilter = allPoke.filter((poke)=> !poke.createdInDB)
            // }
            // return {
            //     ...state,
            //     pokemons: createdFilter
            // }
            
        default :
        return {
            ...state,
        }
    }
}