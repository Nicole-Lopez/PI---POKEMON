const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');


const allTypes = require('./TypesRouter')
const pokes = require('./PokemonsRouter')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/pokemons', pokes);
router.use('/types', allTypes);









module.exports = router;
