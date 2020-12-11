const Cities = require('../models/Cities');
const catchAsync = require('../utils/catchAsync');


exports.getCities = catchAsync(async (req, res, next) => {
  const cities = await Cities.find()
  res
    .status(200)
    .json({ success: true, results: cities.length, data : cities })
})

exports.createCities = catchAsync(async (req, res, next) => {
  const cities = await Cities.create(req.body)
  res.status(201).json({ success: true, data: cities })
})


