var app = angular.module("routerapp", ['ui.router']);

app.component('mymenu', {
	templateUrl: "/menu.html",
	controller: function(){
		this.title = "title";
		this.toggling_data = 1;
		this.toggle = function(){
			if(this.toggling_data == 1) this.toggling_data = 2;
			else this.toggling_data = 1;
		}	
	}
})

app.component('people', {
	templateUrl: "/people.html",
	bindings: { people: '<' },
})

app.component('person', {
	templateUrl: "/person.html",
	bindings: { person: '<' },
})

app.config(function($stateProvider){
	var stateHello = {
		name: 'hello',
		url: "/hello",
		template: "<h3>Hello world!</h3>"
	}

	var stateAbout = {
		name: 'about',
		url: "/about",
		template: '<h3>Its the UI-Router hello world app!</h3>'
	}

	var stateMenu = {
		name: "mymenu",
		url: "/mymenu",
		component: "mymenu"
	}

	var statePeople = {
		name: "people",
		url: "/people",
		component: "people",
		resolve: {
		    people: function(PeopleService) {
		      return PeopleService.getAllPeople();
		    }
		}
	}

	var statePerson = {
		name: "people.person",
		url: "/{person_id}",
		component: "person",
		resolve: {
			person: function(people, $stateParams) {
		      return people.find(function(person) { 
		        return person.id == $stateParams.person_id;
		      });
		    }
		}
	}

	$stateProvider.state(stateHello);
	$stateProvider.state(stateAbout);
	$stateProvider.state(stateMenu);
	$stateProvider.state(statePeople);
	$stateProvider.state(statePerson);
});