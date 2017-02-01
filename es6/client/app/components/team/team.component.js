import template from './team.html';
import controller from './team.controller';
import './team.scss';

let teamComponent = {
  restrict: 'E',
  bindings: { 
  	people: '<',
  },
  template,
  controller
};

export default teamComponent;
