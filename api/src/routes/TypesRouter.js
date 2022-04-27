const express = require('express');
const router = express.Router();
const { getTypes } = require('../controllers/GetTypes');

router.get('/', getTypes)

module.exports = router;