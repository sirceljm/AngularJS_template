import angular from 'angular';
import uiRouter from 'angular-ui-router';
import personComponent from './person.component';

let personModule = angular.module('person', [
  uiRouter
])

.component('person', personComponent)

.name;

export default personModule;
