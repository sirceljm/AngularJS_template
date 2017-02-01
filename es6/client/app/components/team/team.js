import angular from 'angular';
import uiRouter from 'angular-ui-router';
import teamComponent from './team.component';

let teamModule = angular.module('team', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('team', {
      url: '/team',
      component: 'team',
      resolve: {
	    people: function(ServiceTeam) {
	      return ServiceTeam.getAllPeople();
	    }
	  }
    })
    .state('team.person', {
      url: '/{personId}',
      component: 'person',
      resolve: {
		person: function(people, $stateParams) {
			console.log(people);
			console.log($stateParams.personId);
			console.log(people.find(function(person) { 
	        return person.id == $stateParams.personId;
	      }))
	      return people.find(function(person) { 
	        return person.id == $stateParams.personId;
	      });
	    }
      }
    });
})

.component('team', teamComponent)

.name;

export default teamModule;
