const mongoose = require('mongoose');

const RegionSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
})

module.exports=  mongoose.model('Regions' , RegionSchema);

