import angular from 'angular';
import Navbar from './navbar/navbar';
import Palette from './palette/palette';

let commonModule = angular.module('app.common', [
  Navbar,
  Palette
])
  
.name;

export default commonModule;
