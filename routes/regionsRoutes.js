const express = require('express');
const { getRegions , createRegion }= require('../controllers/regionsController');
const router = express.Router();


router.route('/')
.get(getRegions)
.post(createRegion);

module.exports = router;