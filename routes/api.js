const ballUpdate = require('../models/BallUpdate');

module.exports = (router) => {

	router.get('/BallUpdate', (req, res) =>{
		res.send('Ball update Service');
	});
	return router;
}