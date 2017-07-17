/**
 *  Friend Controller 
 */

app.controller('FriendController', function($scope,$location,FriendService){
	console.log('Entering into friend controller')
	function listOfSuggestedUsers(){
		console.log('Entering into list of suggested users')		
		$scope.suggestedUsers=FriendService.suggestedUsers().then(function(response){
			console.log(response.data)
			$scope.suggestedUsers=response.data;
			console.log('After receiving the data from backend')
		},function(response){
			console.log(response.status);
			
		})
		
	}
	
	$scope.friendrequest=function(toUsername){
		FriendService.sendFriendRequest(toUsername).then(function(response){
			alert("Friendrequest has been sent Successfully....")
			$location.path('/suggestedusers')
		},function(response){
			console.log(response.status);
		})
	}
	
	listOfSuggestedUsers();
	
})