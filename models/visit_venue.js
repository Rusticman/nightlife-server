const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const visitSchema = new Schema({
          venue:String,
          createdAt: { type: Date, expires: '57600s', default: Date.now },
          user:String

});

const ModelClass = mongoose.model('visit_venue',visitSchema);

module.exports = ModelClass;
