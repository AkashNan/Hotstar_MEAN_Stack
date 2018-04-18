const ballUpdate = require('../models/BallUpdate');

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
	return router;
}