const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    displayName: String,
    fb: String,
    email: String,
    status: String,
    picture: String,
    total: Number,
    win: Number,
    rate: Number,
    predictionId: String
})

module.exports = mongoose.model('User', userSchema);