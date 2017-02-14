
module.exports = function(app, express) {
	app.get("/", function(req, res){
		console.log("in index");
		res.send(200);
	})
};