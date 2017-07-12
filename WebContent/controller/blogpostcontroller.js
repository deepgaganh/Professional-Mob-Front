/**
 * 
 * BlogPostController
 * 
 */

app.controller('BlogPostController',function($scope,BlogPostService,$location){
	$scope.message=''
		$scope.blogsWaitingForApproval
	$scope.saveBlogPost=function(){
		BlogPostService.saveBlog($scope.blogPost).then(function(response){
			$scope.success="Blog Post inserted successfully and waiting for approval"
			$location.path('/getallblogs')
		},function(response){
			$scope.message=response.data.message
			if(response.status==401){
				
				$location.path('/login')
			}
			if(response.status==500){
				$location.path('/saveblogpost')
			}
		})
	}
	/*
	 * List of Blogs which are apporved - value of approved=1
	*/
	
	$scope.blogsApproved=BlogPostService.blogsApproved().then(function(response){
		$scope.blogsApproved=response.data;
		
	},function(response){
		console.log(response.status)
	})

/*
 * List of Blog which are not approved - value of approved=0
*/
	$scope.blogsWaitingForApproval=BlogPostService.blogsWaitingForApproval().then(function(response){
		$scope.blogsWaitingForApproval=response.data;
	},function(response){
		console.log(response.status)
		
	})
	
	$scope.getBlogPosts=function(id){
		BlogPostService.getBlogPosts(id).then(function(response){
			$scope.blogPost=response.data; 
		},function(response){
			console.log(response.status);
		})
	}
})


