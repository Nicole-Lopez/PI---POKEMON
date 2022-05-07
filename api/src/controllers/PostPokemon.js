const axios = require('axios');
const { Type, Pokemon, pokemon_types } = require('../db.js');


let count=40  


const createPoke = async (req, res, next) => {
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

 	count++


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
