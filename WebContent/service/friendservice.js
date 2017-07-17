/**
 *  Friend Service
 */

app.factory('FriendService', function($http){
	var friendService={};
	
	friendService.suggestedUsers=function(){
		return $http.get("http://localhost:8080/ProfessionalMobBackend/friend/suggesteduserslist")
	} 
	
	friendService.sendFriendRequest=function(toUsername){
		return $http.get("http://localhost:8080/ProfessionalMobBackend/friend/friendrequest"+toUsername);
	}
	
	return friendService;
})

