const mongoose = require('mongoose');
const {Schema} = mongoose

const userModel = new Schema ({
    name: {type: String},
    email: {type: String},
    country: {type: String}
})

module.exports = mongoose.model('User', userModel)