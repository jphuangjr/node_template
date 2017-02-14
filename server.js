var express = require('express');

var app = express();
app.set('port', (process.env.PORT || 8000));

require("./server/middleware.js")(app, express);
require("./server/routes.js")(app, express);


app.listen(app.get('port'), function(){
	console.log("******* SERVER STARTED: Listening on port " + app.get('port') + " *******")
});

module.exports = app;