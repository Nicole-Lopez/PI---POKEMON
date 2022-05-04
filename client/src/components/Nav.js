import React from 'react'
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {getPokemon, filterByOrder, filterByAttack, getType, filterByType, filterByDb, filterByHp, menorHp} from '../redux/actions/index'
import SearchBar from './SearchBar';

export default function Nav ({setCurrentPage , setOrder}) {
    const dispatch = useDispatch()
   
    const allTypes = useSelector((state) => state.typePokemon)
    
    
    useEffect(() => { 
        dispatch(getPokemon())
        dispatch(getType())
    },[dispatch])
    

    // function handleClick (e){
    //     dispatch(getPokemon())
    // }
    function handleOrder(e){
        // e.preventDefault();
        dispatch(filterByOrder(e.target.value))
        setCurrentPage(1);
        setOrder(`ordenando ${e.target.value}`)
    }

    function handleAttack(e){
        e.preventDefault();
        dispatch(filterByAttack(e.target.value))
        setCurrentPage(1);
        setOrder(`ordenando ${e.target.value}`)
    }   
    function handleFilterType (e){
        dispatch(filterByType(e.target.value))
    }
    function handleCreated(e){
        dispatch(filterByDb(e.target.value))
        setCurrentPage(1);
        // setOrder(`ordenando ${e.target.value}`)
    }
    
   
    
        
    return (
       

                
        <div className='flex'>
           <img src='#' alt='AL parecer este es logo'/>
           <SearchBar/>
        <Link to='/pokemons/create'>  
            <button>Crear pokemon</button>  
        </Link>

        {/*<button onClick={(e) => handleClick(e)}>Cargar todos los pokemones</button>*/}
        
        <select onChange={(e) => handleOrder(e)}>
            <option disabled >Ordenar alfabeticamente</option>
            <option value='asc'>A-Z</option>
            <option value='des'>Z-A</option>
        </select>

        <select onChange={(e) => handleAttack(e)} >
            <option disabled >Filtro fuerza</option>         
            <option value='major'>Menor Fuerza</option>
            <option value='minor'>Mayor Fuerza</option>
        </select>

        <select onChange={(e) => handleFilterType (e)}>
              
            <option disabled >Tipos de pokemones</option>
            <option value="allTypes">Todos</option>
            {
                allTypes?.map(el => {
                    return (
                        <option key={el.id} name={el.name}>{el.name}</option>
                        )
                    })
            }
        </select>
        
        <select onChange={e=> handleCreated(e)}>
            <option value="all">Todos</option>
            <option value="db">Creados</option>
            <option value="api">Existente</option>
        </select>
      

            
        </div>
              
    )
}
    
