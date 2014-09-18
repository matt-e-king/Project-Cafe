var cafe = angular.module('Cafe', ['ngRoute', 'CafeForm']);

cafe.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/cafe-form-view.html',
    controller: 'FormController'
  });
}]);

cafe.factory('CafeDataHandler', function() {

  var cafeDataHandler = {};

  cafeDataHandler.fields = [

  ];

  cafeDataHandler.published;

  return cafeDataHandler;

});

cafe.controller('MainController', ['$scope', '$location', '$route', function($scope, $location, $route) {

  $scope.settings = {
    id : "form"
    , fieldModel : "formModel"
  };

  $scope.refresh = function() {
    $route.reload();
  }

}]);



cafe.controller('FormController', ['$scope', '$filter', '$location', '$route', 'CafeDataHandler', 'CafeFieldDefinitions', function FormController($scope, $filter, $location, $route, CafeDataHandler, CafeFieldDefinitions) {

  $scope.fields = CafeDataHandler.fields;

  $scope.setEditSection = function(index) {
    if($scope.editSection == index) {
      $scope.editSection = -1;
    } else {
      $scope.editSection = index;
    }
  }

  $scope.exportJSON = function() {
    return $filter('json')($scope.fields);
  }

  $scope.getJSON = function() {
    angular.element('#json').val($filter('json')($scope.fields));
    // angular.element('#json textarea').val('test');
  }

  $scope.loadJSON = function() {

    var _temp = angular.element('#json').val();
    CafeDataHandler.fields = angular.fromJson(_temp);
    $scope.fields = CafeDataHandler.fields;
    $route.reload();
    
  }

  $scope.createHTML = function() {

    var _publishHTML = angular.element('#publish').html();
    var _form = angular.element('#'+$scope.settings.id);
    _form.html(_publishHTML);

    var _inputFields = _form.find('input');
    var _inputFields = _form.find('textarea');

    var _formItems = {
      input : _form.find('input')
      , textarea : _form.find('textarea')
      , select : _form.find('select')
      , ngShow : _form.find('div[ng-show]')
      , ngRepeat : _form.find('div[ng-repeat]')
    }

    angular.forEach(_formItems, function(value, key) {

      switch(key) {
        case 'ngRepeat' : 
          angular.forEach(value, function(v,k) {
            angular.element(v)
            .removeAttr('ng-repeat')
          });
        break;
        case 'ngShow' :
          console.log(_formItems.ngShow.length);
          angular.forEach(value, function(v,k) {
            var _str = angular.element(v).attr('ng-show');
            var _fieldId = _str.match(/fields[\[]\d+[\]]/);
            var _leftOperator = _str.match(/fields[\[]\d+[\]]\S+/);

            if($scope.fields.length > 0 && _fieldId != null && _leftOperator != null) {
              // console.log(_fieldId[0]);
              var _newStr = _str.replace(_leftOperator[0], $scope.settings.fieldModel+"."+$scope.getFieldId(_fieldId[0]));
              // console.log(_newStr);
              angular.element(v).attr('ng-show', _newStr);
            }
          });
        break;
        default : 
          angular.forEach(value, function(v,k) {
            var _tempId = angular.element(v).attr('id');
            angular.element(v)
            .attr('ng-model', $scope.settings.fieldModel+'.'+_tempId)
            .removeAttr('ng-required')
            .removeAttr('ng-repeat')
            .removeAttr('ng-disabled')
            .removeAttr('ng-show');
          });
      }

    });

    if($scope.fields.length == 0) {
      


    }
    // console.log($scope.fields)

    // console.log($scope.fields[1].meta.id.value);

    return _form.parent().html();

  }

  $scope.getFieldId = function(field) {
    var _fieldNum = field.match(/\d+/);
    return $scope.fields[_fieldNum[0]].meta.id.value;
  }

  $scope.loadHTML = function() {

    // var _tempText = angular.element.text($scope.createHTML());
    angular.element('#html').val($scope.createHTML());

  }


  $scope.removeSection = function(index) {

    $scope.fields.splice(index, 1);
    $route.reload();
  }

  $scope.addNewSection = function(type) {

    var _definition = new CafeFieldDefinitions();
    $scope.fields.push(_definition.list[type]);
    $route.reload();

  }

  $scope.moveSection = function(origin, destination) {
    var temp = $scope.fields[destination];
    $scope.fields[destination] = $scope.fields[origin];
    $scope.fields[origin] = temp;

    angular.forEach($scope.fields, function(value, key) {
      if(value.meta.conditional.whichField == 'fields['+origin+'].content.value.value') {
        value.meta.conditional.whichField = 'fields['+destination+'].content.value.value';
      }
    });
    $route.reload();
  }


}]);
