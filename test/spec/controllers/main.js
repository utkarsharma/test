'use strict';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

/*'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('test1App'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(true).toBe(true);
  });
	
});
*/