 import React from 'react';
import {Link} from 'react-router-dom'
// import './Cards.css'
 export default function Pokemon ({name, type, sprites, id}) {
     return ( 
         <div className='container'>

        <div className='cards'>
             {/*<Link className='link2' to={`/pokemons/${id}`}>*/}
            {
             sprites?   
                <img  className= 'cardsimg' src={sprites} alt='image not found'/>
                :
                <img className='cardsimg' src='https://i.pinimg.com/564x/7a/89/9a/7a899ae5a7bf99e40fef753983427222.jpg' alt='image not found'/>
                
            }
            <h3 className='nombre'>{name}</h3>
           
            <h4 className='tipos'>Tipo:</h4>
            <p className='tipo'>{type}</p>
            
            {/*</Link>*/}
        </div>
         </div>
     )
 }
 