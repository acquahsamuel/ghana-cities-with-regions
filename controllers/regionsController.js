const Regions = require('../models/Regions')
const catchAsync = require('../utils/catchAsync')

exports.getRegions = catchAsync(async (req, res, next) => {
  const regions = await Regions.find()
  res
    .status(200)
    .json({ success: true, results: regions.length, data: regions })
})

exports.createRegion = catchAsync(async (req, res, next) => {
  const region = await Cities.create(req.body)
  res.status(201).json({ success: true, data: region })
})



