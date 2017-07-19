/**
 *  Friend Service
 */

app.factory('FriendService', function($http){
	var friendService={};
	
	friendService.suggestedUsers=function(){
		return $http.get("http://localhost:8080/ProfessionalMobBackend/friend/suggesteduserslist")
	} 
	
	friendService.sendFriendRequest=function(toUsername){
		return $http.get("http://localhost:8080/ProfessionalMobBackend/friend/friendrequest/"+toUsername);
	}
	
	
	friendService.pendingRequests=function(){
		return $http.get("http://localhost:8080/ProfessionalMobBackend/friend/pendingrequests");
	}
	
	friendService.updatePendingRequest=function(fromId, status){
		return $http.put("http://localhost:8080/ProfessionalMobBackend/friend/updatependingrequest/"+ fromId +"/"+ status);
	}	

	friendService.listOfFriends=function(){
		return $http.get("http://localhost:8080/ProfessionalMobBackend/friend/listoffriends");
	}	
	
	return friendService;
})

