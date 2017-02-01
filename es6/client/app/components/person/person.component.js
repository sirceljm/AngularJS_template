import template from './person.html';
import controller from './person.controller';
import './person.scss';

let personComponent = {
  restrict: 'E',
  bindings: {
  	people: '<',
  	person: '<'
  },
  template,
  controller
};

export default personComponent;
