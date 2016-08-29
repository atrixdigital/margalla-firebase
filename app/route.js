

app.config(['$routeProvider', function ($routeProvider) {
	
 $routeProvider.when('/home', {
	templateUrl: 'app/view/home.html',
	controller: 'homeCtrl'
}).when('/packages', {
	templateUrl: 'app/view/packages.html',
	controller: 'packagesCtrl'
}).when('/booking', {
	templateUrl: 'app/view/booking.html',
	controller: 'bookingCtrl'
}).when('/movies', {
	templateUrl: 'app/view/movies.html',
	controller: 'moviesCtrl'
}).when('/admin', {
	templateUrl: 'app/view/admin.html',
	controller: 'adminCtrl'
}).otherwise({ redirectTo: '/home' });

}]);