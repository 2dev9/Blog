var auth = require("../../auth/local-signup");
var BlogPost = require("../../models/blogPost");  

var pages = {
	home: function(req, res){
		res.render("home");
	},
	index: function(req, res) {
		BlogPost.find({"user": req.user.username}, function(err, post){
			if(err){
				console.log(err);
			}else{
				res.render("index", {
					status: req.query.status,
					posts:post
				});
			}
		});
		
	},
	login: function(req, res){
		res.render("login");
	},
	signup: function(req, res){
		auth({
			name:req.body.username,
			pass: res.body.password,
			first: req.body.firstName,
			last: req.body.lasyName
		}, function(data){
			if(data.success){
				res.json({
					"success": "All good"
				});
			}else{
				res.json({
					"success": "Messed up"
				});
			}
		});
	},
	create: function(req, res){
		res.render("create");
	},

	post: function(req,res){
		BlogPost.findOne({"_id": req.query.p}, function(err,post){
			if(err){
				console.log(err);
			}else{
				res.render("post", {
					current:post
				});
			}
		});
	}
};

module.exports = pages;