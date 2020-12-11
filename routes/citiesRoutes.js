const express = require('express');
const { getCities , createCities }= require('../controllers/citiesController');
const router = express.Router();


router.route('/')
.get(getCities)
// .post(createCities);

module.exports = router;

