const axios = require('axios');
const { get40, getAllPokemons } = require('../controllers/GetAllPokemons');

const findbyid= async (id)=>{
	let all=await getAllPokemons()
  
  let filter=all.find((p)=>p.ide==id)

  return (filter) ? [filter] :'This pokemon was not found'
}

const getbyID = async (req, res, next)=>{
	const { id }=req.params
	try{
    res.send(await findbyid(id))  
  }catch(err){
    next(err)
  }
}

module.exports = {
    getbyID
}
