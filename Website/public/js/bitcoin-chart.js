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