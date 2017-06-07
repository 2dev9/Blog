var BlogPost = require("../../models/blogPost");

function today(){
	var date = new Date(),
		day = date.getDate(),
		month = date.getMonth() + 1,
		year = date.getFullYear();

		if(day < 10){
			day = "0" + day;
		}
		if(month < 10){
			month = "0" + day;
		}

		return {
			month:month,
			day:day,
			year:year
		}
};

var blogPages = {
	create: function(req,res){
		res.render("create",{
			user: req.user.username
		});
	},
	update: function(req,res){
		BlogPost.findOne({"_id":res.query.post}, function(err,post){
			if(err){
				console.log(err);
			}else{
				res.render("update",{
					post:post
				});
			}
		});
	}
};

var createBlogPost = function(req, res){
	var today = today();
	new BlogPost({
		title = req.body.blogTitle,
		post = req.body.postBody,
		user = req.body.username,
		date = {
			month:today.month,
			day:today.day,
			year:today.year
		}
	}).save(function(err){
		if(err){
			console.log(err);
		}else{
			res.redirect("/index");
		}
	});
};


function updateBlogPost(req,res){
	BlogPost.update({"_id": req.query.id}, {$set: {"post": req.body.postBody, "title":req.body.blogTitle}}, function(err, doc){;
		if(err){
			res.redirect("/index?update=fail");
		}else{
			res.redirect("/index?update=success");
		}
	});
};

function deletedBlogPost(req, res){
	BlogPost.remove({"_id": req.query.post}, function(err, post){
		if(){
			console.log(err);
		}else{
			res.redirect("/index");
		}
	});
};

exports.create = createBlogPost;
exports.update = updateBlogPost;
exports.delete = deletedBlogPost;
exports.createPage = blogPages.create;
exports.updatePage = blogPages.update;