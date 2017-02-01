angular.module("routerapp").service('PeopleService', function($http){
	var service = {
		getAllPeople: function(){
			return $http.get('https://jsonplaceholder.typicode.com/users', {cache: true}).then(function(resp){
				console.log(resp.data);
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
})