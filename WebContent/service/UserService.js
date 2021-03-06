/**
 *  UserService for User module 
 */

app.factory('UserService', function($http){
	var userService={}
	
	userService.registerUser=function(user){
		return $http.post("http://localhost:8080/ProfessionalMobBackend/users/registration",user)
		
	}
	
	userService.login=function(users){
		return $http.post("http://localhost:8080/ProfessionalMobBackend/users/login",users)
		
	}
	
	userService.logout=function(){
		return $http.get("http://localhost:8080/ProfessionalMobBackend/users/logout")
	}
	
	userService.getUserByUsername=function(){
		return $http.get("http://localhost:8080/ProfessionalMobBackend/users/getuserdetails")
	}
	
	userService.updateUserProfile=function(user){
		return $http.put("http://localhost:8080/ProfessionalMobBackend/users/updateprofile",user)
	}
	
	
	return userService;
	
	
})