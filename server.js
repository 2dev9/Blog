var express = require("express"),
	session = require("express-session"),
	passport = require("passport"),
	bcrypt = require("bcrypt-nodejs"),
	hbs = require("hbs"),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	app = express(),
	path = require("path")
	routes = require("./app/routes/routes");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set("view engine", "hbs");

app.use("/static", express.static(path.join(__dirname, "app/client")));//create a symbolic link for the routing
app.set("views", path.join(__dirname, "app/views"));

app.use(session({
	secret: "a secret",
	resave: true,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

routes(app);

app.listen(8080);
console.log("El servidor esta trabajando");