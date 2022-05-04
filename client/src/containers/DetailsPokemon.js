 import React from 'react';
import {Link} from 'react-router-dom'
import Detail from '../components/Detail'

 export default function DetailsPokemon() {
     return ( 
         <div className='container'>
            <Detail />
            <Link to='/pokemons'>
            <button>Volver</button>
            </Link>
         </div>
     )
 }