const axios = require('axios');
const { Type, Pokemon, pokemon_types } = require('../db.js');

const get40 = async () => { 
  try {
    let urlOne = 'https://pokeapi.co/api/v2/pokemon'
    let resOne = await axios.get(urlOne)
    let first20Poks =resOne.data.results

    let urlTwo = resOne.data.next
    let resTwo = await axios.get(urlTwo)
    let second20Poks = resTwo.data.results

    let poks40= first20Poks.concat(second20Poks)
    
    let arr=[]
    for (var i = 0; i < poks40.length; i++) {
      let detail = await axios.get(poks40[i].url)
      let pok = detail.data

        let pokemon={
            name: pok.name,
            ide: pok.id,
            img: pok.sprites.other.dream_world.front_default,
            hp: pok.stats[0].base_stat,
            attack: pok.stats[1].base_stat,
            defense: pok.stats[2].base_stat,
            speed: pok.stats[5].base_stat,
            height: pok.height,
            weight: pok.weight,
            fromApi: true,
            types: pok.types.map(types => types.type.name),
        }
        
      arr.push(pokemon)
    }
    return arr

  }catch(err){
    console.log(err)
  }
}



const getDB= async ()=>{
  let pokesDB = await Pokemon.findAll({
    include: {
      model: Type,
      atributes: ['name'],
    },
  });

  let pokesDetail = pokesDB.map((e) => {
    return { 
      ...e.dataValues, 
      types: e.dataValues.types.map((tip) => tip.dataValues.name) 
    }
  });

  return pokesDetail
}

const getAllPokemons= async ()=>{
  let api = await get40()
  let db = await getDB()

  if (!db) {
    return api
  } else {
    let total = api.concat(db);  
    return total
  }
}




const getbyName= async (namePok)=>{
  let all= await getAllPokemons()
  
  let filtro=[all.find((p)=>p.name.toLowerCase()==namePok.toLowerCase())]

  if (filtro) {
    return filtro    
  } else {
    return 'No se ha encontrado este pokemon'
  }   
}


const getPo = async (req, res, next)=>{
  const{ name }=req.query

  try {
    if(name){
      return res.status(200).send(await getbyName(name))
    }
    else{
      return res.status(200).send(await getAllPokemons())
    }

  } 
  catch (err) {
    next(err)
  }
}

module.exports = {
    getPo,
    get40,
    getAllPokemons
}
