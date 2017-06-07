var r = require("./routes.json");

var controllers = {
	pages: require("./controllers/pages")
};

module.exports = function(app){
	app.get(r.index, controllers.pages.index);
	app.get(r.create, controllers.pages.create);

//	app.get(r.login, controllers.pages.login);
	
//	app.get(r.signup, controllers.pages.signup);
} 