import PaletteModule from './palette'
import PaletteController from './palette.controller';
import PaletteComponent from './palette.component';
import PaletteTemplate from './palette.html';

describe('Palette', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PaletteModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PaletteController();
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
      expect(PaletteTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PaletteComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PaletteTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PaletteController);
      });
  });
});
