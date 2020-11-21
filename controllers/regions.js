const Regions = require('../models/Regions')
const asycHandler = require('../middleware/async')
// const ErrorResponse = require('../utils/errorResponse');

exports.getRegions = asycHandler(async (req, res, next) => {
  const regions = await Regions.find()
  res
    .status(200)
    .json({ success: true, results: regions.length, data: regions })
})

exports.createRegion = asycHandler(async (req, res, next) => {
  const region = await Cities.create(req.body)
  res.status(201).json({ success: true, data: region })
})
