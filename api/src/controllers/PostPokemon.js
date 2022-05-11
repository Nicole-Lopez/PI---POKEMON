const axios = require('axios');
const { Type, Pokemon, pokemon_types } = require('../db.js');
const { getAllPokemons } = require('../controllers/GetAllPokemons');


let count

const getLastArrItem = (arr) => { 
  	let lastItem=arr[arr.length-1];  
  	count=lastItem 
}   

const createPoke = async (req, res, next) => {

	let num= await getAllPokemons()
	let iden= num.map((e)=>e.ide)
	getLastArrItem(iden)

    let  {
        name,
        tipos,
        height,
        img,
        weight,
        hp,
        attack,
        defense,
        speed,
    } = req.body
 
	let pokeCreated = await Pokemon.create({
	    name,
	    weight,
	    height,
	    hp,
	    img,
	    attack,
	    defense,
	    speed,
	    ide:count+1
	})

	let typeDb = await Type.findAll({
	    where:{
	        name: tipos
	    }
	})
	
	return (pokeCreated.addType(typeDb))?res.status(200).send('Successful creation'): res.status(404).send('Failed creation')
}



module.exports = {
    createPoke
}
