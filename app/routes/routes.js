var r = require("./routes.json"),
	passport = require("passport");

var controllers = {
	pages: require("./controllers/pages"),
	session: require("./controllers/session"),
	blogCtrl: require("./controllers/blogControl")
};

module.exports = function(app){
	//static routes
	//app.get(r.home, controllers.pages.home);
	app.get(r.index, controllers.pages.index);
	app.get(r.login, controllers.pages.login);
	//app.get(r.signup, controllers.pages.signup);

	//controller.session asks if the user is a on the server
	app.get(r.post, controllers.session, controllers.pages.post);
	app.get(r.create, controllers.session, controllers.blogCtrl.create);
	app.get(r.update, controllers.session, controllers.blogCtrl.update);

	//post routes
	app.post(r.signup, controllers.pages.signup);
	app.post(r.login, passport.authenticate("local-login", {
		successRedirect: r.index, //if logged in
		failureRedirect: r.login //if not logged in redirect
	}));
/*	app.post(r.create, controllers.session, controllers.blogCtrl.create);
	app.put(r.update, controllers.session, controllers.blogCtrl.update);
	app.delete(r.delete, controllers.session, controllers.blogCtrl.delete);
*/
	app.post(r.create, controllers.blogCtrl.create);
	app.put(r.update, controllers.blogCtrl.update);
	app.delete(r.delete, controllers.blogCtrl.delete);
} 