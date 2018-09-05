const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const predictionSchema = new Schema({
    matchId: String,
    choice: String
})

module.exports = mongoose.model('Prediction', predictionSchema);