/**
 * BlogPostService
 * 
 */
app.factory('BlogPostService',function($http){
	
	var blogPostService={}
	
	blogPostService.saveBlog=function(blogPost){
		return $http.post("http://localhost:8080/ProfessionalMobBackend/blog/saveblogpost",blogPost)
	}
	
	blogPostService.blogsApproved=function(){
		return $http.get("http://localhost:8080/ProfessionalMobBackend/blog/listofblogs/"+1)
	}
	
	blogPostService.blogsWaitingForApproval=function(){
		return $http.get("http://localhost:8080/ProfessionalMobBackend/blog/listofblogs/"+0)
	}
	
	blogPostService.updateBlogPost=function(blogpost){
		return $http.put("http://localhost:8080/ProfessionalMobBackend/blog/updateblogpost",blogpost)
	}
	blogPostService.getBlogPost=function(id){
		return $http.get("http://localhost:8080/ProfessionalMobBackend/blog/getblogby/"+id)
	}
	
	return blogPostService;
})

 