'use strict';

describe('count display controller', function(){

  var cntDisCntrl, scope, view;

  beforeEach(module('testingApp'));
  beforeEach(module('templates'));

  beforeEach(inject(function($controller, $templateCache, $rootScope, $compile){
    scope = $rootScope.$new();
    var html = $templateCache.get('index.html');
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

    expect(divElement.html()).toBe('change');
  });

  it('validates form element and submit button', function(){
    var showDirtEl =  view.find('#showDirt');
    var formSubmitBtnEl = view.find('#formSubmitBtn');
    console.log(" dirt shower has class ng-hide > " + showDirtEl.hasClass("ng-hide") + ', html >> '  + showDirtEl.html());
    console.log(' btn disabled : ' + formSubmitBtnEl.attr('disabled'));
    view.find('#fNameInput').val('change').trigger('input');
    console.log('--- value has been changed  ---');

    console.log(" dirt shower has class ng-hide > "+ showDirtEl.hasClass("ng-hide") + ', html >> '  + showDirtEl.html());
    console.log(' btn disabled : ' + formSubmitBtnEl.attr('disabled'));
  });
});