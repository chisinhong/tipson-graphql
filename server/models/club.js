const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clubSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    zhName: String,
    shortName: String,
    tla: String,
    badge: String,
    leagueId: String
})

module.exports = mongoose.model('Club', clubSchema);