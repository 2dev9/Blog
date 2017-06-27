var mongoose = require("mongoose");

var BlogPost = new mongoose.Schema({
	post:String,
	date:{
		month:String,
		day:String,
		year:String
	},
	title: String,
	user: String
});

module.exports = mongoose.model("BlogPost", BlogPost);