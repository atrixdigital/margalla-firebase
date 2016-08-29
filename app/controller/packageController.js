

// app.controller('packageCtrl', ['$scope','$http', function ($scope,$http) {
	
// 	$http.get('app/data/package.json').then(function(response){
// 		$scope.myData = response.data.card;
// 	});


// }]);


app.controller('packagesCtrl',function ($scope,$http,$firebaseArray) {
	

      var ref = new Firebase('https://margalla-travels.firebaseio.com/Package');
      $scope.myData = $firebaseArray(ref);

	 // $http.get('app/data/package.json').then(function(response){
	

	 // 	$scope.myData = response.data.cardData;

	 // });



// app.controller('packageCtrl' , function($scope,$http){


//     $http.get('app/data/package.json').then(function(response){
	

// 	 	$scope.myData = response.data.cardData;

// 	 });



   // var ref = new Firebase('https://margalla-travels.firebaseio.com/movies');
   //   $scope.myData = $firebaseArray(ref);

   
	
});
