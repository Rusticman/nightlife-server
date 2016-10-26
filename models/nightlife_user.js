const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
        userName     : String,
        facebook : {
            "id"    : String
                  },
          twitter : {
              "id"   : String
                   }
});

const ModelClass = mongoose.model('nightlife_user',userSchema);

module.exports = ModelClass;
