import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Team from './team/team';
import Person from './person/person';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Team,
  Person
])

.name;

export default componentModule;
