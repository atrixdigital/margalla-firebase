

app.controller('gamesCtrl', ['$scope','$http', function ($scope,$http) {

	$http.get("app/data/package.json").then(function(response){
	          $scope.myDataa = response.data.games; 

		});
	
}])