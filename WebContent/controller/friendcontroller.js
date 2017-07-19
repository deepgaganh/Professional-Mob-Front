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
	
	function pendingRequests(){
		
		$scope.pendingRequests=FriendService.pendingRequests().then(function(response){
			console.log('entered in pending request function')
			console.log(response.data);
			$scope.listOfPendingRequests=response.data;
			console.log('After receiving the data from backend for pending list')
		},function(response){
			console.log(response.status);
		})
	}

	
	function listOfFriends(){
		$scope.friendList=FriendService.listOfFriends().then(function(response){
			$scope.friendList=response.data;
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
	
	$scope.updatePendingRequest=function(fromId,status){
		FriendService.updatePendingRequest(fromId,status).then(function(response){
			pendingRequests();
			$location.path('/pendingrequests')
		},function(response){
			console.log(response);
		})
	}
	
	
	listOfSuggestedUsers();
	pendingRequests();
	listOfFriends();
})