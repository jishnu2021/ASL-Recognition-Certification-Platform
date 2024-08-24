const mongoose = require('mongoose');

const personschema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
},{ timestamps: true, collection: 'person' })

module.exports = mongoose.model('person',personschema);