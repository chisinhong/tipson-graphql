const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leagueSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    zhName: String,
})

module.exports = mongoose.model('League', leagueSchema);