'use strict';

angular
  .module('autoBootstrapApp', [])//creation of module with name autoBootstrapApp
  //config section which takes $provide or other provider or constants
  .config(['$provide', function ($provide) {
    $provide.constant('MAX_COUNT', 10);
    $provide.value('count', {currentCount: 0});
  }])
  //config can not access factory service instance as it is not available in config phase
  //we will get error if we try to execute following commented config section
  /*
  .config(['manageCount', function(manageCount){
    manageCount.resetCount();
  }])
  */
  .factory('manageCount', ['count', function(count){
    return {
      resetCount : function(){
        count.currentCount = 0;
      },
      incrementCount : function(){
        count.currentCount = count.currentCount+1;
      }
    }
  }])
  //run section: from where module kick-starts, takes $injector or constants or other injectable
  .run(['$rootScope', 'count', 'manageCount', function ($rootScope, count, manageCount) {
    manageCount.incrementCount();
    $rootScope.counter = count.currentCount;
  }]);


//we can define other module as well
angular
  .module('bugCounterApp', [])//creation of module with name bugCounterApp
  .constant('MAX_BUG_COUNT', 8)
  .value('bugCount', {currentCount: 0})
  .run(['MAX_BUG_COUNT', 'bugCount', function(MAX_BUG_COUNT, count){
    count.currentCount = MAX_BUG_COUNT;
  }]);

angular
  .module('storyPointsCounterApp', [])//creation of module with name StoryPointsCounterApp
  .constant('MAX_STORY_COUNT', 100)
  .value('storyPointsCount', {currentCount: 0})
  .run(['MAX_STORY_COUNT', 'storyPointsCount', function(MAX_STORY_COUNT, count){
    count.currentCount = 40;
  }]);

//consuming services of other modules
angular
  .module('showCounter', ['bugCounterApp', 'storyPointsCounterApp'])
  .run(['$rootScope', 'bugCount', 'storyPointsCount', function($rootScope, bugCount, storyCount){
    $rootScope.bugCount = bugCount.currentCount;
    $rootScope.storyCount = storyCount.currentCount;
  }]);


angular.bootstrap(document.getElementById('countDisplay'), ['showCounter']);
