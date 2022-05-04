const axios = require('axios');
const { get40, getAllPokemons } = require('../controllers/GetAllPokemons');

const findbyid= async (id)=>{
	let all=await getAllPokemons()
  
  let filtro=all.find((p)=>p.ide==id)

  if (filtro) {
    return [filtro]    
  } else {
    return 'No se ha encontrado este pokemon'
  }

}


const getbyID = async (req, res)=>{
	const { id }=req.params
	
	res.send(await findbyid(id))	

}

module.exports = {
    getbyID
}
