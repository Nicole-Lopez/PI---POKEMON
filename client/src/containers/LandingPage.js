import React from "react";
import { Link } from "react-router-dom";
// import './css/landing.css'

function LandingPage() {
    return(
        <div>
           <h1>PAGINA DE BIENVENIDA</h1>
            <Link to='./pokemons'>
            	<button>Ingresar</button>
            </Link>
        </div>
    )
};


export default LandingPage;