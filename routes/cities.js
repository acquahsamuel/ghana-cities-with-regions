const express = require('express');
const { getCities , createCities }= require('../controllers/cities');
const router = express.Router();


router.route('/')
.get(getCities)
.post(createCities);

module.exports = router;