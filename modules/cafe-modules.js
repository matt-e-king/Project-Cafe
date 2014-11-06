angular.module('Cafe', ['ngRoute', 'CafeForm'])
  .config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/cafe-form-view.html',
    controller: 'FormController'
  });
}]);

angular.module('CafeForm', ['CafeFormPublish', 'CafeFieldDefinitions']);

angular.module('CafeFormPublish', []);

angular.module('CafeFieldDefinitions', []);