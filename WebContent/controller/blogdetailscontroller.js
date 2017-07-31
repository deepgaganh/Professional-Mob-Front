/**
 * BlogDetails Controller
 */

app.controller('BlogDetailController',function($scope,$location,BlogPostService,$routeParams){

	var id=$routeParams.id
	
	$scope.blogPost=BlogPostService.getBlogPost(id).then(function(response){
		$scope.blogPost=response.data;
		getBlogComments(id)
	},function(response){
		console.log(repsonse.status)
			
	})
	
	$scope.updateApproval=function(){
		BlogPostService.updateBlogPost($scope.blogPost).then(function(response){
			$location.path('/getallblogs')
		},function(response){
			
		})
	}
	
	$scope.addComment=function(){

		$scope.blogComment.blogPost=$scope.blogPost
		BlogPostService.addComment($scope.blogComment).then(function(response){
			alert('Comment added sucessfully')
			$scope.blogComment.body=''
			getBlogComments($scope.blogPost.id)
			console.log(response.status)
		},function(response){
			console.log(response.status)
		})
	}
	
	function getBlogComments(blogId){
		$scope.showComments=true;
		BlogPostService.getBlogComments(blogId).then(function(response){
			$scope.blogComments=response.data;
			console.log(response.data)
			console.log(response.status);
		},function(response){
			console.log(response.status)
		})
	}
	getBlogComments(id);
})