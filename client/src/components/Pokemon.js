import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from '../redux/actions/index'



function Pokemon(prop) {
    return(
        <div>
        	<p>{prop.name}</p>
        	<img src={prop.img} alt="Noooo" />
        </div>
    )
};


export default Pokemon;