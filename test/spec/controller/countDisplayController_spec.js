'use strict';

describe('count display controller', function(){

  var cntDisCntrl, scope, view;

  beforeEach(module('testingApp'));
  beforeEach(module('templates'));

  beforeEach(inject(function($controller, $templateCache, $rootScope, $compile){
    scope = $rootScope.$new();
    var html = $templateCache.get('index.html');
    console.log('html : ' + html);
    cntDisCntrl = $controller('countDisplayController', {
      $scope: scope
    });
    view = $compile(angular.element(html))(scope);
    scope.$digest();

  }));

  it('should work', function(){

    expect(1).toBe(1);
    expect(scope.bugCount).toBe(2);
    var divElement = view.find('#nameDiv');
    expect(divElement.length).toBe(1);
    var inputElement = view.find('#nameInput');
    inputElement.val('change').trigger('input');

//    following is not required :
//    scope.$apply();
//    console.log('after digest : input val : ' + inputElement.val() + ' scope value : ' + scope.name);
//    console.log('clicking change name btn');//
//    view.find('#changeNameBtn').click();

    console.log('controller div element - inner html : ' + view.find('#countDisplay').html());
    expect(divElement.html()).toBe('change');


  });
});