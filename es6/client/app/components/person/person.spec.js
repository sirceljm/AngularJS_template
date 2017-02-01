import PersonModule from './person'
import PersonController from './person.controller';
import PersonComponent from './person.component';
import PersonTemplate from './person.html';

describe('Person', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PersonModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PersonController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(PersonTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PersonComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PersonTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PersonController);
      });
  });
});
