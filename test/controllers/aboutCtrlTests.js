describe('rideCtrl tests', function() {
  describe('instantiation and scope tests', function() {
    var $httpBackend, $rootScope, createController, authHandler;
    beforeEach(function() {
      module('starter');
      module('starter.controllers');
      module('starter.services');
    });

    beforeEach(inject(function($injector) {
      var $controller = $injector.get('$controller');
      $rootScope = $injector.get('$rootScope');

      createController = function() {
        return $controller('rideCtrl', {'$scope': $rootScope});
      };
    }));

    it('should be defined and initializes', (function() {
      var controller = createController();
      expect(controller).toBeDefined();
      expect($rootScope).toBeDefined();
      expect($rootScope.remove).toBeDefined();
      expect($rootScope.rides).toBeDefined();
      expect($rootScope.rides).toEqual([]);
      expect($rootScope.message).toEqual('');
    }));
  });


});