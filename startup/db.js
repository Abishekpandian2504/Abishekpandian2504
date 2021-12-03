const winston = require('winston');
const mongoose = require('mongoose');
//const config = require('config');
module.exports = function() {
    
mongoose.connect('mongodb://127.0.0.1/vidly')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'))

}