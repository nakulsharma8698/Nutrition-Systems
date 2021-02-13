const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    name: {
        type: String
    },
    mobile: {
        type: String
    },
    address: {
        type: String
    },
    pin: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    }
});

module.exports = mongoose.model('User', User);