(function () {
    'use strict';

    angular
        .module('app')
        .controller('InfoController', InfoController);


	InfoController.$inject = ['$scope'];
    function InfoController($scope) {
        var vm = this;

        vm.$scope = $scope;

	FusionCharts.ready(function(){
		var revenueChart = new FusionCharts({
			"type": "column2d",
			"renderAt": "chartContainer",
			"width": "500",
			"height": "300",
			"dataFormat": "json",
			"dataSource": {
				"chart": {
					"caption": "Yearly Energy Usage by Month",
					"subCaption": "Watts On?",
					"xAxisName": "Month",
					"yAxisName": "kWh",
					"theme": "fint"
				},
				"data": [
					{
						"label": "Jan",
						"value": "420000"
					},
					{
						"label": "Feb",
						"value": "810000"
					},
					{
						"label": "Mar",
						"value": "720000"
					},
					{
						"label": "Apr",
						"value": "550000"
					},
					{
						"label": "May",
						"value": "910000"
					},
					{
						"label": "Jun",
						"value": "510000"
					},
					{
						"label": "Jul",
						"value": "680000"
					},
					{
						"label": "Aug",
						"value": "620000"
					},
					{
						"label": "Sep",
						"value": "610000"
					},
					{
						"label": "Oct",
						"value": "490000"
					},
					{
						"label": "Nov",
						"value": "900000"
					},
					{
						"label": "Dec",
						"value": "730000"
					}
				]
			}
	});
	revenueChart.render();
	})
	
	FusionCharts.ready(function(){
		var twoChart = new FusionCharts({
			"type": "line",
			"renderAt": "twoChart",
			"width": "500",
			"height": "300",
			"dataFormat": "json",
			"dataSource": {
				"chart": {
					"caption": "Money Spent on Energy Per Month",
					"subcaption": "Last year",
					"xaxisname": "Month",
					"yaxisname": "Amount (In USD)",
					"numberprefix": "$",
					"theme": "fint"
				},
				"categories": [
				{
					"category": [
						{
							"label": "Jan"
						},
						{
							"label": "Feb"
						},
						{
							"label": "Mar"
						},
						{
							"label": "Apr"
						},
						{
							"label": "May"
						},
					{
						"label": "Jun"
					},
					{
						"label": "Jul"
					},
					{
						"label": "Aug"
					},
					{
						"label": "Sep"
					},
					{
						"label": "Oct"
					},
					{
						"label": "Nov"
					},
					{
						"label": "Dec"
					}
				]
			}
		],
		"dataset": [
			{
				"seriesname": "Actual Revenue",
				"data": [
					{
						"value": "16000"
					},
					{
						"value": "20000"
					},
					{
						"value": "18000"
					},
					{
						"value": "19000"
					},
					{
						"value": "15000"
					},
					{
						"value": "21000"
					},
					{
						"value": "16000"
					},
					{
						"value": "20000"
					},
					{
						"value": "17000"
					},
					{
						"value": "25000"
					},
					{
						"value": "19000"
					},
					{
						"value": "23000"
					}
				]
			},
			{
				"seriesname": "Projected Revenue",
				"renderas": "line",
				"showvalues": "0",
				"data": [
					{
						"value": "15000"
					},
					{
						"value": "16000"
					},
					{
						"value": "17000"
					},	
					{
						"value": "18000"
					},
					{
						"value": "19000"
					},
					{
						"value": "19000"
					},
					{
						"value": "19000"
					},
					{
						"value": "19000"
					},
					{
						"value": "20000"
					},
					{
						"value": "21000"
					},
					{
						"value": "22000"
					},
					{
						"value": "23000"
					}
				]
			},
			{
				"seriesname": "Profit",
				"renderas": "area",
				"showvalues": "0",
				"data": [
					{
						"value": "4000"
					},
					{
						"value": "5000"
					},
					{
						"value": "3000"
					},
					{
						"value": "4000"
					},
					{
						"value": "1000"
					},
					{
						"value": "7000"
					},
					{
						"value": "1000"
					},
					{
						"value": "4000"
					},
					{
						"value": "1000"
					},
					{
						"value": "8000"
					},
					{
						"value": "2000"
					},
					{
						"value": "7000"
					}
				]
			}
		]
		}})
	twoChart.render();
	
	
	
})}})();        
        
