const axios = require('axios');
const { Type, Pokemon, pokemon_types } = require('../db.js');

const capitalizeFirstLetter=(str) => str.charAt(0).toUpperCase() + str.slice(1);


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
            name: capitalizeFirstLetter(pok.name),
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
      name:capitalizeFirstLetter(e.name),
      types: e.dataValues.types.map((tip) => capitalizeFirstLetter(tip.dataValues.name)) 
    }
  });

  return pokesDetail
}

const getAllPokemons= async ()=>{
  let api = await get40()
  let db = await getDB()

  return (!db)? api : api.concat(db)
}




const getbyName= async (namePok)=>{
  let all= await getAllPokemons()

  let filtro=all.find((p)=>p.name.toLowerCase()==namePok.toLowerCase())
  
  return (filtro!==undefined) ? [filtro]: 'This pokemon was not found'
     
}


const getPo = async (req, res, next)=>{
  const{ name }=req.query

  try {
    if (name) {
      let rta= await getbyName(name)
      if (rta == 'This pokemon was not found') {
        return res.status(404).json({ msg: rta});
      } else{
        return res.status(200).json(rta)
      }


    } else {
      res.status(200).send(await getAllPokemons())
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
