/**
 * Job Service
 * 
 */

app.factory('JobService', function($http){
	var jobService={}
	jobService.saveJob=function(job){
		return $http.post("http://localhost:8080/ProfessionalMobBackend/job/savejob",job)
	}
	
	jobService.getAllJobs=function(){
		return $http.get("http://localhost:8080/ProfessionalMobBackend/job/getalljobs")
	}
	
	jobService.getJobById=function(id){
		return $http.get("http://localhost:8080/ProfessionalMobBackend/job/getjobbyid/"+id)	
	}
	
	return jobService;
})