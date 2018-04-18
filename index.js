var express = require('express');
var app = express();
var router = express.Router();
const mongoose = require('mongoose');
const config = require("./config/database")
const path = require('path');
const api = require('./routes/api')(router);
const bodyParser = require('body-parser');

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

// Provide static directory for frontend
// parse application/x-www-form-urlencode
app.use(bodyParser.urlencoded({extended : false}));
// middleware

app.use(bodyParser.json());
app.use('/api', api);
app.use(express.static(__dirname + '/Client/dist/'));


app.get('/', (req, res) => {
   //res.send("<h1>Hello Server</h1>");
   res.sendFile(path.join(__dirname + '/Client/dist/index.html'));
})

app.listen(8080, () => {
	console.log("Listening on port 8080");
}); 