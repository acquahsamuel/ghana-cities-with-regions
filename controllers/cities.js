const Cities = require('../models/Cities');
const asycHandler = require('../middleware/async');
// const ErrorResponse = require('../utils/errorResponse');

exports.getCities = asycHandler(async (req, res, next) => {
  const cities = await Cities.find()
  res
    .status(200)
    .json({ success: true, results: cities.length, data : cities })
})

exports.createCities = asycHandler(async (req, res, next) => {
  const cities = await Cities.create(req.body)
  res.status(201).json({ success: true, data: cities })
})
