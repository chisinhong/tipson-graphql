const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
    leagueId: String,
    date: String,
    result: String,
    homeId: String,
    awayId: String
})

module.exports = mongoose.model('Match', matchSchema);