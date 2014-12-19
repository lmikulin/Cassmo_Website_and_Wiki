(function() {
	var app = angular.module("cassmo",["ngRoute"]);

	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/',
		{
			templateUrl: 'pages/home.html',
			controller: 'GenericCtrl',
			controllerAs: 'ctrl'
		})
		.when('/about',
		{
			templateUrl: 'pages/about.html',
			controller: 'GenericCtrl',
			controllerAs: 'ctrl'
		})
		.when('/faq',
		{
			templateUrl: 'pages/faq.html',
			controller: 'GenericCtrl',
			controllerAs: 'ctrl'
		})
		.when('/wiki',
		{
			templateUrl: 'pages/wiki.html',
			controller: 'GenericCtrl',
			controllerAs: 'ctrl'
		})
		.when('/docs',
		{
			templateUrl: 'pages/docs.html',
			controller: 'GenericCtrl',
			controllerAs: 'ctrl'
		})
		.when('/game',
		{
			templateUrl: 'pages/game.html',
			controller: 'GenericCtrl',
			controllerAs: 'ctrl'
		})
		.when('/sitemap',
		{
			templateUrl: 'pages/sitemap.html',
			controller: 'GenericCtrl',
			controllerAs: 'ctrl'
		})
		.when('/contact',
		{
			templateUrl: 'pages/contact.html',
			controller: 'GenericCtrl',
			controllerAs: 'ctrl'
		})
		.otherwise({
			redirectTo: '/'
		});
	}]);

	app.controller('GenericCtrl', function(){});

	app.directive('topNav', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/top-nav.html'
		}
	});

	app.directive('pageFooter', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/page-footer.html'
		}
	});
})();