var mongoose = require("mongoose");

var BlogPost = new mongoose.Schema({
	text:String,
	date: Date,
	title: String,
	author: String
});

module.exports = mongoose.model("Post", BlogPost)