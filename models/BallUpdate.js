const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

 const ballSchema = new Schema({
     matchNumber: String    
  });

  module.exports = mongoose.model("BallUpdate", ballSchema);