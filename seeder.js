const fs = require('fs')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const Regions = require('./models/Cities')
// const Cities = require('./models/Cities');

dotenv.config({ path: './config/config.env' })

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})

/**
 * @Read_in_json_files
 */
const ahafo = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/ahafo.json`, 'utf-8')
)
const ashanti = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/ashanti.json`, 'utf-8')
)


const bonoEast = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bono-east.json`, 'utf-8')
)
const bono = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bono.json`, 'utf-8')
)
const central = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/central.json`, 'utf-8')
)
const eastern = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/eastern.json`, 'utf-8')
)
const greaterAccra = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/greater-accra.json`, 'utf-8')
)

const northEast = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/north-east.json`, 'utf-8')
)
const northern = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/northern.json`, 'utf-8')
)
const oti = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/oti.json`, 'utf-8'))

const savana = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/savana.json`, 'utf-8')
)
const upperEast = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/upper-east.json`, 'utf-8')
)
const upperWest = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/upper-west.json`, 'utf-8')
)
const volta = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/volta.json`, 'utf-8')
)
const westernNorth = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/western-north.json`, 'utf-8')
)

const western = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/western.json`, 'utf-8')
)

/**
 * @importing_data_into_database
 */

const importData = async (req, res) => {
  try {
    await Regions.create(ahafo)
    await Regions.create(ashanti)
    await Regions.create(bonoEast)
    await Regions.create(bono)
    await Regions.create(central)
    await Regions.create(eastern)
    await Regions.create(greaterAccra)
    await Regions.create(northEast)
    await Regions.create(northern)
    await Regions.create(oti)
    await Regions.create(savana)
    await Regions.create(upperEast)
    await Regions.create(upperWest)
    await Regions.create(volta)
    await Regions.create(westernNorth)
    await Regions.create(western)
  } catch (err) {
    console.log(err)
  }
}

const deleteData = async (req, res) => {
  try {
    await Regions.deleteMany(ahafo)
    await Regions.deleteMany(ashanti)
    await Regions.deleteMany(bonoEast)
    await Regions.deleteMany(bono)
    await Regions.deleteMany(central)
    await Regions.deleteMany(eastern)
    await Regions.deleteMany(greaterAccra)
    await Regions.deleteMany(northEast)
    await Regions.deleteMany(northern)
    await Regions.deleteMany(oti)
    await Regions.deleteMany(savana)
    await Regions.deleteMany(upperEast)
    await Regions.deleteMany(upperWest)
    await Regions.deleteMany(volta)
    await Regions.deleteMany(westernNorth)
    await Regions.deleteMany(western)
  } catch (err) {
    console.log(err)
  }
}

if (process.argv[2] === '-i') {
  importData()
  console.log('Done importing')
} else if (process.argv[2] === '-d') {
  deleteData()
  console.log('Done deleting')
}
