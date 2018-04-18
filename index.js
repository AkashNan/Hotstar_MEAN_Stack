var express = require('express');
var app = express();
const mongoose = require('mongoose');
const config = require("./config/database")
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
	 if(err){
	 	console.log(config.uri);
	 	console.log("could not connect to database:" + err);
	 }
	 else{
	 	console.log(config.secret);
	 	console.log("connected to database:" + config.db)
	 }
});

app.use(express.static(__dirname + '/Client/dist/'));

app.get('*', (req, res) => {
   //res.send("<h1>Hello Server</h1>");
   res.sendFile(path.join(__dirname + '/Client/dist/index.html'));
})

app.listen(8080, () => {
	console.log("Listening on port 8080");
}); 