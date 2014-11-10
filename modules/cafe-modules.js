angular.module('Cafe', ['ngRoute', 'CafeForm'])
  .config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/cafe-form-view.html'
  });
}]);

angular.module('CafeForm', ['CafeFormPublish', 'CafeDefinitions']);

angular.module('CafeFormPublish', []);

angular.module('CafeDefinitions', []);