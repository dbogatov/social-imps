var express = require("express"),
	router = express.Router(),
	db = require("../models");

module.exports = function (app) {
	app.use("/", router);
};

router.get("/", function (req, res, next) {
	res.render("index", {
		title: "Home"
	});
});

router.get("/cookie", function (req, res, next) {
	res.render("cookie", { 
		title: "Cookie Consent"
	});
});

router.get("/minutes", function (req, res, next) {
	res.render("minutes", {
		title: "Meeting Minutes"
	});
});

router.get("/timeline", function (req, res, next) {
	res.render("timeline", {
		title: "BitCoin Timeline"
	});
});

router.get("/topics", function (req, res, next) {
	res.render("topics", {
		title: "Project Topics"
	});
});

router.get("/topics/:topic", function (req, res, next) {
	var normalize = function(title) {
		title = title.replace(/-/g, " ");
		return title.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	};

	res.render("topics/" + req.params.topic, {
		title: normalize(req.params.topic)
	});
});