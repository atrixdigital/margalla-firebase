app.controller('moviesCtrl',function ($scope,$http,$firebaseArray) {
	

      var ref = new Firebase('https://margalla-travels.firebaseio.com/Package');
      $scope.myData = $firebaseArray(ref);

	  // $http.get('app/data/package.json').then(function(response){
	

	 //  	$scope.myData = response.data.cardData;

	 // });

// 	$scope.saveFire = function(){
// 		$scope.myData.$add(
// 			{title:$scope.newTitle},
// 			{genre:$scope.newGenre},
//             { price:$scope.newPrice},
//             {rating:$scope.newRating}

// 		);
// 	}

// 	 $scope.arr = [1,2,3,4];


// 	 $scope.players = [
//   {name: 'Gene', team: 'alpha'},
//   {name: 'George', team: 'beta'},
//   {name: 'Steve', team: 'gamma'},
//   {name: 'Paula', team: 'beta'},
//   {name: 'Scruath', team: 'gamma'}
// ];

     // $scope.names = [
      
     //  {name:'Ali' age:23},
     //  {name:'Hamza' age:22},
     //  {name:'Shery' age:26}
     
     // ];

     // $scope.checkRating = function(rating){
     // 	var minValue = 0;
     // 	var maxValue = 10;

     // 	if( rating >= minValue && rating <= maxValue){
     //         document.write("Valid Rating");
     // 	}
     // }

 //    $scope.func = function(x){ 
    	
	// 	$scope.arr.push(x);
	// }	

	// $scope.order = function(x){
	// 	$scope.myOrder =x;
	// }
	// $scope.limited = function(x){
	// 	$scope.limited = x;
	// }

});