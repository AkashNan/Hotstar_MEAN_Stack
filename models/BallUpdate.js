const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

 const ballSchema = new Schema({
     matchNumber: String,
     innings:{
        inningNumber : String,
        battingTeamId : String,
        bowlingTeamId : String,
        overs: {
          overNumber: String,
          bowlerId : String,
          balls : {
            ballNumber : String,
            batsmanId : String,
            ballType : String,
            ballSpeed : String,
            ballReleasePoint : String,
            ballResult : String,
            ballTrajactory : String
          }
        }
     }      
  });

  module.exports = mongoose.model("BallUpdate[", ballSchema);