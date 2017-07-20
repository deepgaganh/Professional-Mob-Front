var app = angular.module('myApp', [ 'ngRoute', 'ngCookies' ])

app.config(function($routeProvider) {

	console.log('Entering config function')
	$routeProvider
	/*
	 * .when('/' ,{ templateUrl : 'views/Home.html' })
	 */
	.when('/registration', {
		templateUrl : 'views/registrationform.html',
		controller : 'UserController'
	})

	.when('/login', {
		templateUrl : 'views/login1.html',
		controller : 'UserController'
	})

	.when('/savejob', {
		templateUrl : 'views/jobform.html',
		controller : 'JobController'
	})

	.when('/getalljobs', {
		templateUrl : 'views/jobtitles.html',
		controller : 'JobController'
	})

	.when('/saveblogpost', {
		templateUrl : 'views/blogpostform.html',
		controller : 'BlogPostController'

	})

	.when('/getallblogs', {
		templateUrl : 'views/bloglist.html',
		controller : 'BlogPostController'

	}).when('/getBlogForApproval/:id', {
		templateUrl : 'views/approvalform.html',
		controller : 'BlogDetailController'

	})

	.when('/getBlogDetail/:id', {
		templateUrl : 'views/blogdetails.html',
		controller : 'BlogDetailController'
	})

	.when('/suggestedusers', {
		templateUrl : 'views/suggestedusers.html',
		controller : 'FriendController'
	})

	.when('/pendingrequests', {
		templateUrl : 'views/pendingrequests.html',
		controller : 'FriendController'
	})

	.when('/listoffriends', {
		templateUrl : 'views/listoffriends.html',
		controller : 'FriendController'
	})

	.when('/profilepic', {
		templateUrl : 'views/profilepicture.html'
	})
	
	.when('/edituserprofile', {
		templateUrl : 'views/updateprofile.html',
			controller : 'UserController'	
	})
	
	.otherwise({
		templateUrl : 'views/home.html'
	})
})

app.run(function($rootScope, $location, UserService, $cookieStore) {
	console.log('Entering run function')
	if ($rootScope.currentUser == undefined)
		$rootScope.currentUser = $cookieStore.get("currentUser")

	$rootScope.logout = function() {
		UserService.logout().then(function(response) {
			$rootScope.message = "loggedout successfully.."
			delete $rootScope.currentUser;
			$cookieStore.remove("currentUser")
			$location.path('/login')
		}, function(response) {
			console.log(response.status)
			$rootScope.message = response.data.message
			$location.path('/login')
		})
	}
})

/*
 * var app=angular.module("myApp",['ngRoute'])
 * app.config(function($routeProvider){ $routeProvider .when('/registration',{
 * temlateUrl:'/views/registrationform.html', Controller:'usercontroller' })
 * .otherwise({ templateUrl:'views/home.html' }) })
 */