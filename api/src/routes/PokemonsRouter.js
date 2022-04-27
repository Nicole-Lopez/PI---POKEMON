const express = require('express');
const router = express.Router();
const { getPo } = require('../controllers/GetAllPokemons');
const { getbyID } = require('../controllers/GetByID');
const { createPoke} = require('../controllers/PostPokemon');


router.get('/', getPo)

router.get('/:id', getbyID)

router.post('/', createPoke)



module.exports = router;