'use strict';

/* Controllers */

var kmFilters = angular.module('kmFilters', []);

kmFilters.filter('float', function() {
	return function(input, size) {
		return input.toFixed(size);
	}
});

kmFilters.filter('abs', function() {
	return function(input) {
		return Math.abs(input);
	}
});

kmFilters.filter('percent', function() {
	return function(input, size) {
		var f = 100 * input;
		return f.toFixed(size) + "%";
	}
});

kmFilters.filter('active', function() {
	return function (players) {
		var filtered = [];
		for (var i in players) {
			if (players[i].active == 1) {
				filtered.push(players[i]);
			}
		}
		return filtered;
	}
});

kmFilters.filter('stats', function($filter) {
	return function(input, eloOffset, eloMode) {
		if (eloMode == 'week') {
			if (eloOffset == 0) {
				return 'diese Woche';
			}
			if (eloOffset == -1) {
				return 'letzte Woche';
			}
			return 'vor ' + (-eloOffset) + ' Wochen';
		}
		if (eloMode == 'day') {
			if (eloOffset == 0) {
				return 'heute';
			}
			if (eloOffset == -1) {
				return 'gestern';
			}
			return $filter('date')(input, 'yyyy-MM-dd');
		}
		return input;
	}
});