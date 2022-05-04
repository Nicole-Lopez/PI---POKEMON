import React from 'react'
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {getPokemon} from '../redux/actions/index'
import Nav from '../components/Nav'
import Pokemon from '../components/Pokemon'
import Pagination from '../components/Pagination'
import Loader from '../components/Loader'



export default function HomePage () {
  const dispatch = useDispatch()

  const allPokemon = useSelector((state) => state.pokemons)

  const allTypes = useSelector((state) => state.typePokemon)
  const [order, setOrder]= useState('')



  const [currentPage,setCurrentPage]= useState(1)// pagina actual pagina q sigue
  const [pokePerPage, setPokePerPage]= useState(12) //personajes por pagina
  const indexOfLastPoke = currentPage * pokePerPage // 12
  const indexOfFirstPoke = indexOfLastPoke - pokePerPage
  const currentPokemon = allPokemon.slice(indexOfFirstPoke,indexOfLastPoke)

  useEffect(() => { 
      dispatch(getPokemon())
  },[dispatch])

  const  pokeNull = !currentPokemon.length > 0 ? <Loader/> : null




  return (
      <div>
      
        <div>    
          <Nav  setCurrentPage={setCurrentPage} setOrder={setOrder}/>
          <Pagination pokePerPage={pokePerPage}  allPokemon={allPokemon.length} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
        
    { pokeNull }
      <div>
         {
          currentPokemon.map(el =>{
              return (
                  <Link to={"/pokemons/" + el.ide}>
                      <Pokemon  name={el.name } sprites={el.img} type={ el.types.map(el => el + ' ')} key={el.id}/>
                  </Link>  
              )
          })
        }
      </div>
    </div>
  )
}
  
      