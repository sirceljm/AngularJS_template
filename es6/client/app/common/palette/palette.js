import angular from 'angular';
import uiRouter from 'angular-ui-router';
import paletteComponent from './palette.component';

let paletteModule = angular.module('palette', [
  uiRouter
])

.component('palette', paletteComponent)

.name;

export default paletteModule;
