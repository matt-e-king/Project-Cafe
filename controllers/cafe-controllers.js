angular.module('Cafe').controller('MainController', ['$scope', '$location', '$route', 'CafeFieldDefinitions', 'CafeFormatDefinitions' ,function($scope, $location, $route, CafeFieldDefinitions, CafeFormatDefinitions) {

  $scope.fieldDefinitions = new CafeFieldDefinitions();
  $scope.formatDefinitions = new CafeFormatDefinitions();

  $scope.settings = {
    id : "form"
    , fieldModel : "formModel"
  };

  $scope.refresh = function() {
    $route.reload();
  }

}]);



angular.module('Cafe').controller('CafeFormController', ['$scope', '$filter', '$location', '$route', 'CafeDataHandler', '$timeout', function FormController($scope, $filter, $location, $route, CafeDataHandler, $timeout) {

  $scope.fields = CafeDataHandler.fields.store;

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
    CafeDataHandler.fields.store = angular.fromJson(_temp);
    CafeDataHandler.fields.listSize = CafeDataHandler.fields.store.length;
    $scope.fields = CafeDataHandler.fields.store;
    
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
          angular.forEach(value, function(v,k) {
            var _str = angular.element(v).attr('ng-show');
            var _fieldId = _str.match(/fields[\[]\d+[\]]/);
            var _leftOperator = _str.match(/fields[\[]\d+[\]]\S+/);

            if($scope.fields.length > 0 && _fieldId != null && _leftOperator != null) {
              var _newStr = _str.replace(_leftOperator[0], $scope.settings.fieldModel+"."+$scope.getFieldId(_fieldId[0]));
              angular.element(v).attr('ng-show', _newStr);
            }
          });
        break;
        default : 
          angular.forEach(value, function(v,k) {
            var _tempId = angular.element(v).attr('id');
            angular.element(v)
            .attr('ng-model', $scope.settings.fieldModel+'.'+_tempId)
            .removeClass('ng-pristine')
            .removeClass('ng-valid')
            .removeClass('ng-valid-email')
            .removeClass('ng-valid-required')
            .removeClass('ng-invalid')
            .removeClass('ng-invalid-required')
            .removeAttr('ng-required')
            .removeAttr('ng-repeat')
            .removeAttr('ng-disabled')
            .removeAttr('ng-show')
            .removeAttr('ng-options');
          });
      }

    });

    if($scope.fields.length == 0) {
      


    }

    return _form.parent().html();

  }

  $scope.getFieldId = function(field) {
    var _fieldNum = field.match(/\d+/);
    return $scope.fields[_fieldNum[0]].meta.id.value;
  }

  $scope.loadHTML = function() {

    angular.element('#html').val($scope.createHTML());

  };


  $scope.removeSection = function(index) {
    
    CafeDataHandler.removeSection(index);

  };

  $scope.addNewSection = function(type, definition) {
    if(definition == 'fields') {
      CafeDataHandler.addFieldSection(type);
    }
    if(definition == 'formats') {
      CafeDataHandler.addFormatSection(type);
    }

  };

  $scope.moveSection = function(origin, destination) {

    CafeDataHandler.moveSection(origin, destination);

  };

  $scope.moveTo = function(element, target) {

    $scope.moveTo[element] = '';
    var target = parseInt(target, 10);
    CafeDataHandler.moveTo(element, target);
    console.log($scope.fields);

  };


}]);