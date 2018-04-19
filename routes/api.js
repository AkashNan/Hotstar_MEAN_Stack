const ballUpdate = require('../models/BallUpdate');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = (router) => {

	router.post('/BallUpdate', (req, res) =>{

        console.log(req.body);

		let bUpdate = new ballUpdate({
			matchNumber : req.body.matchNumber,
			 innings:{
		        inningNumber : req.body.inningNumber,
		        battingTeamId : req.body.battingTeamId,
		        bowlingTeamId : req.body.bowlingTeamId,
		        overs: {
		          overNumber: req.body.overNumber,
		          bowlerId : req.body.bowlerId,
		          balls : {
		            ballNumber : req.body.ballNumber,
		            batsmanId : req.body.batsmanId,
		            ballType : req.body.ballType,
		            ballSpeed : req.body.ballSpeed,
		            ballReleasePoint : req.body.ballReleasePoint,
		            ballResult : req.body.ballResult,
		            ballTrajactory : req.body.ballTrajactory
		          }
		        }
		     }      
		});

		bUpdate.save((err) =>{
			if(err){
				res.json({success : false, message: 'Could not update ball details. Error:'+ err});
			}else{
				res.json({success: true, message: 'Ball details updated'});
			}
		});
		//res.send('Ball update Service:' + req.body.matchNumber);

	});

	// Get the balldetails based on match number, inning number, over number
	router.post('/getOverDetails', (req,res) => {
			console.log(req.body)
		    ballUpdate.find({'matchNumber': req.body.matchNumber, 'innings.inningNumber': req.body.inningNumber, 'innings.overs.overNumber' : req.body.overNumber}).exec(function(err, data) {
			 		if(err){
			 			res.json({success: false, messsage : 'Could not get the details of over. Error:' + err})
			 		}
			 		else{
			 			res.send(data);
			 		}
			}); 
		
	});
  
	return router;
}