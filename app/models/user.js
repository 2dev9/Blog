var mongoose = require("mongoose");

var User = new mongoose.Schema({
	username: String,
	password: String,
	admin: Boolean,
	firstName: String,
	createdAt: String
});

module.exports = mongoose.model("User", User);