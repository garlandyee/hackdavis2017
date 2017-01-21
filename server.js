var http = require('http');
var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(__dirname + '/public'));

var PORT = 8080;

app.get("*", function(request,response){

	response.sendFile(path.join(__dirname, 'public', 'index.html'),function(err){

		if(err) throw err;

	});

})

app.listen(PORT, function(){
	console.log('Listening to port :' + PORT)
})