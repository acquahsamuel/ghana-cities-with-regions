const mongoose = require('mongoose')

const RegionCitiesSchema = new mongoose.Schema({
  region: {
    type: String,
    trim: true
  },
  cities: {
    type: Array
  }
})

module.exports = mongoose.model('Cities', RegionCitiesSchema)
