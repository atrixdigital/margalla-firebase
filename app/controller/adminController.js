app.controller('adminCtrl',function ($scope,$http,$firebaseArray) {
	

      var ref = new Firebase('https://margalla-travels.firebaseio.com/Package');
      $scope.myData = $firebaseArray(ref);


      
        function clearForm(){
             
              $scope.newName='';
              $scope.newPrice='';
              $scope.newTransport='';
              $scope.newDescription='';
              $scope.newImage='';

       }

      $scope.saveFire = function(){
		$scope.myData.$add( {

			Name: $scope.newName,
			Price: $scope.newPrice,
			Transport:$scope.newTransport,
			description:$scope.newDescription
			//packageImage:$scope.newImage
		});

		 clearForm();
	}

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
