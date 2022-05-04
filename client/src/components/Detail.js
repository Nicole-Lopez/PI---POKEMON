import React from 'react';
import  {useEffect, useState} from 'react';
import {getDetail} from '../redux/actions/index';
import {useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom';

export default function Detail() {
  
const dispatch = useDispatch();
const pokemonDetail = useSelector((state) => state.detail)
const {id} = useParams()


useEffect(() => {
    dispatch(getDetail(id))
}, [dispatch, id])


return (
    <div className='idpoke'>
       
        { 
         pokemonDetail.length > 0?


         <div>
            
          <img src={pokemonDetail[0].img? pokemonDetail[0].img : pokemonDetail[0].img ?pokemonDetail[0].img : 'https://i.pinimg.com/564x/7a/89/9a/7a899ae5a7bf99e40fef753983427222.jpg'} alt='img not found'/> 
                
          <h1>Name: {pokemonDetail[0].name? pokemonDetail[0].name :null}</h1>
          <p>{pokemonDetail[0].ide? pokemonDetail[0].ide :null}</p>
          <p>HP: {pokemonDetail[0].hp? pokemonDetail[0].hp :null}</p>
          <p>Attack: {pokemonDetail[0].attack? pokemonDetail[0].attack :null}</p>
          <p>Defense: {pokemonDetail[0].defense? pokemonDetail[0].defense :null}</p>
          <p>Speed: {pokemonDetail[0].speed? pokemonDetail[0].speed :null}</p>
          <p>Height: {pokemonDetail[0].height? pokemonDetail[0].height :null}</p>
          <p>Weigth: {pokemonDetail[0].weight? pokemonDetail[0].weight :null}</p>  
          <p>Tipos: {pokemonDetail[0].types? pokemonDetail[0].types.map(el => el + ' ') :null}</p>
                     
         </div> :
          <div className='loading'> 
              Cargando...
              
          </div> 

}          
    </div>
  
                        

  
)

}