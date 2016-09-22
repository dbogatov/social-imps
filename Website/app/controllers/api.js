var express = require('express'),
	router = express.Router(),
	request = require('request');

module.exports = function (app) {
	app.use('/api', router);
};

router.get('/bitcoin', function (req, res, next) {
	getData(res);
});

// --------

function getData(res) {
	var today = new Date();
	var yearAgo = new Date();
	yearAgo.setDate(today.getDate() - 30);

	var exportDate = function (date) {
		var checkZero = function (num) {
			return num > 9 ? num + "" : "0" + num;
		};

		return date.getFullYear() + "-" + checkZero(date.getMonth() + 1) + "-" + checkZero(date.getDate());
	};

	var valueUrl = "https://api.coindesk.com/v1/bpi/historical/close.json";
	var options = "?" + "index=USD" + "&" + "start=" + exportDate(yearAgo) + "&" + "end=" + exportDate(today);

	var volumeUrl = "http://data.bitcoinity.org/chart_data";

	request(valueUrl + options, function (error, response, body) {
		var valueData = JSON.parse(body).bpi;
		var formattedValueData = [];

		for (var key in valueData) {
			formattedValueData.push({
				date: new Date(key),
				value: valueData[key]
			});
		}

		request(volumeUrl, function (error, response, body) {

			var volumeData = JSON.parse(body).data;

			var formattedVolumeData = [];

			for (var i = 0; i < volumeData[0].values.length; i++) {
				var piece = 0;
				for (var j = 0; j < volumeData.length; j++) {
					piece += volumeData[j].values[i][1];
				}
				var date = new Date(volumeData[0].values[i][0]);

				formattedVolumeData.push({
					date: date,
					volume: piece
				});
			}

			formattedValueData.sort(function (a, b) { 
				return b.date - a.date;
			});

			formattedVolumeData.sort(function (a, b) { 
				return b.date - a.date;
			});

			var minLength = formattedValueData.length > formattedValueData.length ? formattedValueData.length : formattedVolumeData.length;
			var result = [];
			
			for (var i = 0; i < minLength; i++) {
				result.push({
					date: formattedValueData[i].date,
					value: formattedValueData[i].value,
					volume: formattedVolumeData[i].volume
				});
			}
			
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(result));
		});

	});
}


