import angular from 'angular';

let servicesModule = angular.module('app.services', [])
.service('ServiceTeam', ['$http', function($http){
	var service = {
		getAllPeople: function(){
			return $http.get('https://jsonplaceholder.typicode.com/users', {cache: true}).then(function(resp){
				return resp.data;
			})
		},

		getPerson: function(id) {
	      function personMatchesParam(person) {
	        return person.id === id;
	      }
	      
	      return service.getAllPeople().then(function (people) {
	        return people.find(personMatchesParam)
	      });
	    }
	}
	return service;
}]
).name;
  
export default servicesModule;
