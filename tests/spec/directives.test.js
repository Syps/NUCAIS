describe('Directives', function() {

  beforeEach(module('app'));

  /**
   * mobileBurger directive tests
   */
  describe('Directive: mobileBurger', function() {

    var scope, compile, directiveElem;

    beforeEach(function() {
      inject(function($rootScope, $compile) {

        // create element
        var element = angular.element('<mobile-burger></mobile-burger>');

        // compile and digest
        compile = $compile;
        scope = $rootScope.$new();
        directiveElem = compile(element)(scope);
        scope.$digest();
      });
    });

    describe('default behavior', function() {

      it('should have active property defined and equal to false',
        function() {
          expect(42).to.equal(42);
          should.exist(scope.active);
          expect(scope.active).to.equal(false);
        });

      it('should have a button containing an icon', function() {
        var btnElem = directiveElem.find('button');
        var iElem = directiveElem.find('i');
        should.exist(btnElem);
        should.exist(iElem);
      });

      it('should have a div which is hidden', function() {
        var divElem = directiveElem.find('.burger-container');
        should.exist(divElem);
        expect(divElem.hasClass('ng-hide')).to.equal(true);
      });

    });


    describe('click callback', function() {

      describe('when the directive is clicked', function() {

        it('should call toggleBurger()', function() {
          scope.active = false;
          var button = directiveElem.find('button');
          button.triggerHandler('click');
          scope.$digest();

          expect(scope.active).to.equal(true);

          button.triggerHandler('click');
          scope.$digest();

          expect(scope.active).to.equal(false);

        });

      });
    });

  });

});
