import React from 'react'
// import './Loader.css'
// import loding from '../../img/loader.png'

export default function Loader () {





    return  (
        <div className="loader">
        <div>
         <img src='{loding}' alt='loading...' />
        </div>
        <div>
            <p className='loding'>Cargando pokemons!</p>
        </div>
        </div>


      );
}