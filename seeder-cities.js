const fs = require('fs');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Cities = require('./models/Cities');

dotenv.config({path: './config/config.env'});
connectDB();

/**
 * @Read_in_json_files
 */
const ahafo = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/ahafo.json`, 'utf-8')
);
const ashanti = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/ashanti.json`, 'utf-8')
);

const bonoEast = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bono-east.json`, 'utf-8')
);
const bono = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bono.json`, 'utf-8')
);
const central = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/central.json`, 'utf-8')
);
const eastern = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/eastern.json`, 'utf-8')
);
const greaterAccra = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/greater-accra.json`, 'utf-8')
);

const northEast = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/north-east.json`, 'utf-8')
);
const northern = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/northern.json`, 'utf-8')
);
const oti = JSON.parse(fs.readFileSync(`${__dirname}/_data/oti.json`, 'utf-8'));

const savana = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/savana.json`, 'utf-8')
);
const upperEast = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/upper-east.json`, 'utf-8')
);
const upperWest = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/upper-west.json`, 'utf-8')
);
const volta = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/volta.json`, 'utf-8')
);
const westernNorth = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/western-north.json`, 'utf-8')
);

const western = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/western.json`, 'utf-8')
);

/**
 * @importing_data_into_database
 */

const importData = async (req, res) => {
  try {
    await Cities.create(ahafo);
    await Cities.create(ashanti);
    await Cities.create(bonoEast);
    await Cities.create(bono);
    await Cities.create(central);
    await Cities.create(eastern);
    await Cities.create(greaterAccra);
    await Cities.create(northEast);
    await Cities.create(northern);
    await Cities.create(oti);
    await Cities.create(savana);
    await Cities.create(upperEast);
    await Cities.create(upperWest);
    await Cities.create(volta);
    await Cities.create(westernNorth);
    await Cities.create(western);
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async (req, res) => {
  try {
    await Cities.deleteMany(ahafo);
    await Cities.deleteMany(ashanti);
    await Cities.deleteMany(bonoEast);
    await Cities.deleteMany(bono);
    await Cities.deleteMany(central);
    await Cities.deleteMany(eastern);
    await Cities.deleteMany(greaterAccra);
    await Cities.deleteMany(northEast);
    await Cities.deleteMany(northern);
    await Cities.deleteMany(oti);
    await Cities.deleteMany(savana);
    await Cities.deleteMany(upperEast);
    await Cities.deleteMany(upperWest);
    await Cities.deleteMany(volta);
    await Cities.deleteMany(westernNorth);
    await Cities.deleteMany(western);
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
  console.log('Done importing');
} else if (process.argv[2] === '-d') {
  deleteData();
  console.log('Done deleting');
}
