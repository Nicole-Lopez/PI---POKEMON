const axios = require('axios');
const { Type } = require('../db.js');

const dataFromApi = async ()=>{
	const dataApiTypes = await axios.get("https://pokeapi.co/api/v2/type")
	return dataApiTypes.data.results;
}

const getTypes = async (req, res, next)=>{
	const apiTypes= await dataFromApi()

	try {
		let tableData = await Type.findAll();

		if (!tableData.length) await Type.bulkCreate(apiTypes)

		let total = await Type.findAll();
		res.send(total)	

	} catch (err) {
      next(err)
  	}
}

module.exports = {
    getTypes
}
