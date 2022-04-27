// ESTE CODIGO FUNCIONA

const axios = require('axios');
const { Type, Pokemon, pokemon_types } = require('../db.js');

const get40 = async () => { 

  let allPoks=[]

    let i =1
    while (i <= 10) {
      let url = 'https://pokeapi.co/api/v2/pokemon'+'/'+i
      const apiPok = await axios.get(url) 


      let info = []
      for (let e in apiPok.data){
        info.push(apiPok.data[e])
      }


      let pokemon={
        name: info[10],
        ide: info[6],
        img: info[14].other.dream_world.front_default,
        // tipos: info[16].map(types => types.type.name),
        hp: info[15][0].base_stat,
        attack: info[15][1].base_stat,
        defense: info[15][2].base_stat,
        speed: info[15][5].base_stat,
        height: info[4],
        weight: info[17],
        fromApi: true
      }

      allPoks.push(pokemon)


      

      i++;
    }
  return allPoks;
}


const getbyName= async (namePok)=>{
  let all= await get40()
  
  let filtro=all.find((p)=>p.name==namePok)

  if (filtro) {
    return filtro    
  } else {
    return 'No se ha encontrado este pokemon'
  }

}







const getPo = async (req, res, next)=>{
	const{name}=req.query
  const call= await get40()

	try {
		if(name){
      return res.send(await getbyName(name))
    }
    await Pokemon.bulkCreate(call)

		let newCall = await Pokemon.findAll();
		res.send(newCall)	

	} 
  catch (err) {
    next(err)
  }
}

module.exports = {
    getPo,
    get40
}
