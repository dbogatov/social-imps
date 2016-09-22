//var chartData = generateChartData();

drawChart();

function drawChart() {
	$.get("/api/bitcoin", function (chartData) {

		chartData = chartData.reverse();
		
		var chart = AmCharts.makeChart("chartdiv", {
			type: "stock",
			theme: "light",
			categoryAxesSettings: {
				minPeriod: "DD"
			},

			dataSets: [
				{
					color: "#b0de09",
					fieldMappings: [
						{
							fromField: "value",
							toField: "value"
						}, {
							fromField: "volume",
							toField: "volume"
						}
					],

					dataProvider: chartData,
					categoryField: "date"
				}],

			panels: [
				{
					showCategoryAxis: true,
					title: "Value",
					percentHeight: 70,

					stockGraphs: [
						{
							id: "g1",
							valueField: "value",
							type: "smoothedLine",
							lineThickness: 2,
							bullet: "round"
						}
					],


					stockLegend: {
						valueTextRegular: " ",
						markerType: "none"
					}
				}, {
					title: "Volume",
					percentHeight: 30,
					stockGraphs: [
						{
							valueField: "volume",
							type: "column",
							cornerRadiusTop: 2,
							fillAlphas: 1
						}
					],

					stockLegend: {
						valueTextRegular: " ",
						markerType: "none"
					}
				}
			],

			chartScrollbarSettings: {
				graph: "g1",
				usePeriod: "10mm",
				position: "top"
			},

			chartCursorSettings: {
				valueBalloonsEnabled: true
			},

			periodSelector: {
				position: "top",
				dateFormat: "YYYY-MM-DD JJ:NN",
				inputFieldWidth: 150,
				periods: [
					{
						period: "DD",
						count: 5,
						label: "5 days",
						selected: true
					}, {
						period: "DD",
						count: 7,
						label: "1 week"
					}, {
						period: "DD",
						count: 14,
						label: "2 weeks"
					}, {
						period: "DD",
						count: 21,
						label: "3 weeks"
					}, {
						period: "MAX",
						label: "MAX"
					}
				]
			},

			panelsSettings: {
				usePrefixes: true
			},

			export: {
				enabled: true,
				position: "bottom-right"
			}
		});
	});
}

// function generateChartData() {
// 	var chartData = [];
// 	var firstDate = new Date(2012, 0, 1);
// 	firstDate.setDate(firstDate.getDate() - 1000);
// 	firstDate.setHours(0, 0, 0, 0);

// 	for (var i = 0; i < 1000; i++) {
// 		var newDate = new Date(firstDate);
// 		newDate.setHours(0, i, 0, 0);

// 		var a = Math.round(Math.random() * (40 + i)) + 100 + i;
// 		var b = Math.round(Math.random() * 100000000);

// 		chartData.push({
// 			"date": newDate,
// 			"value": a,
// 			"volume": b
// 		});
// 	}
// 	return chartData;
// }

