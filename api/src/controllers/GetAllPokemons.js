const axios = require('axios');
const { Type, Pokemon, pokemon_types } = require('../db.js');

const get40 = async () => { 

    let i =1
    while (i <= 40) {
      let url = 'https://pokeapi.co/api/v2/pokemon'+'/'+i
      const apiPok = await axios.get(url) 


      let info = []
      for (let e in apiPok.data){
        info.push(apiPok.data[e])
      }

      const [pokemon, created] = await Pokemon.findOrCreate({
        where: { 
          name: info[10],
          ide: info[6],
          img: info[14].other.dream_world.front_default,
          hp: info[15][0].base_stat,
          attack: info[15][1].base_stat,
          defense: info[15][2].base_stat,
          speed: info[15][5].base_stat,
          height: info[4],
          weight: info[17],
          fromApi: true
        },
      });
    
    

    let typeDb = await Type.findAll({
      where:{
        name: info[16].map(types => types.type.name),
      }
     })
    pokemon.addType(typeDb)
     
      i++;
    }


}

const getAllPokemons = async ()=>{
  await get40()
  let tableData = await Pokemon.findAll();
  return tableData;  
}


const getbyName= async (namePok)=>{
  let all= await getAllPokemons()
  
  let filtro=all.find((p)=>p.name==namePok)

  if (filtro) {
    return filtro    
  } else {
    return 'No se ha encontrado este pokemon'
  }

}







const getPo = async (req, res, next)=>{
  const{name, page, order}=req.query
  // const call= await getAllPokemons()
  await getAllPokemons()
  try {
    if(name){
      return res.send(await getbyName(name))
    }

    else if(page){
      let char = await Pokemon.findAll({
        limit: 12,
        offset: page,
        include: { 
          model: Type,
          attributes: ['name']
        }
      });
      return res.send(char)
    }

    else if(order){
      let ord = await Pokemon.findAll({
        order: [["name", order]],
      })
      return res.send(ord)
    }

    else{
      return res.send(await Pokemon.findAll({
        include: { 
          model: Type,
          attributes: ['name']
        }
      }))
    }


    // res.send(call)  

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
