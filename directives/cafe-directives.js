//directive which pulls all common fields for the editing menu
angular.module('CafeForm').directive('cafeEditCommon', function cafeFieldDirective() {
  return {
    restrict: 'AE'
    , replace: true
    , templateUrl: 'templates/function/cafe-edit-common.html'
  };
});


//directive which pull JUST the conditional fields in the editing menu
angular.module('CafeForm').directive('cafeEditConditional', function cafeFieldDirective() {
  return {
    restrict: 'AE'
    , replace: true
    , templateUrl: 'templates/function/cafe-edit-conditional.html'
  };
});


//directive for the field control "edit, sort, delete"
angular.module('CafeForm').directive('cafeEditControls', function cafeFieldDirective() {
  return {
    restrict: 'AE'
    , replace: true
    , templateUrl: 'templates/function/cafe-edit-controls.html'
  };
});


//directive that determines which field is being added to form and pull in the correct template
//this is only for the left side - editing
angular.module('CafeForm').directive('cafeFieldEdit', function cafeFieldDirective($compile, $http, $templateCache) {
	var getTemplate = function(contentType) {
        var templateLoader,
        baseUrl = 'templates/edit/',
        templateMap = {
            text: 'cafe-field-text-edit.html'
            , password: 'cafe-field-password-edit.html'
            , file: 'cafe-field-file-edit.html'
            , email: 'cafe-field-email-edit.html'
            , select: 'cafe-field-select-edit.html'
            , textarea: 'cafe-field-textarea-edit.html'
            , radio: 'cafe-field-radio-edit.html'
            , checkbox: 'cafe-field-checkbox-edit.html'
            , number: 'cafe-field-number-edit.html'
            , paragraph: 'cafe-format-paragraph-edit.html'
            , heading3: 'cafe-format-heading3-edit.html'
            , heading4: 'cafe-format-heading4-edit.html'
            , spacing: 'cafe-format-spacing-edit.html'
        };

        var templateUrl = baseUrl + templateMap[contentType];
        console.log(templateMap[contentType]);
        templateLoader = $http.get(templateUrl, {cache: $templateCache});

        return templateLoader;

    }


    var linker = function($scope, $element, $attrs) {

      var loader = getTemplate($attrs.type);
      console.log($attrs.type);

      var promise = loader.success(function(html) {
          $element.html(html);
      }).then(function (response) {
          $element.replaceWith($compile($element.html())($scope));
      });

    }

  return {
    restrict: 'AE'
    , replace: true
    , scope: true
    , link: linker
  };
});


//directive that determines which field is being added to form and pull in the correct template
//this is only for the right side - publishing
angular.module('CafeFormPublish').directive('cafeFieldPublish', function cafeFieldDirective($compile, $http, $templateCache) {

	var getTemplate = function(contentType) {
      var templateLoader,
      baseUrl = 'templates/publish/',
      templateMap = {
          text: 'cafe-field-text-publish.html'
          , password: 'cafe-field-password-publish.html'
          , file: 'cafe-field-file-publish.html'
          , email: 'cafe-field-email-publish.html'
          , select: 'cafe-field-select-publish.html'
          , textarea: 'cafe-field-textarea-publish.html'
          , radio: 'cafe-field-radio-publish.html'
          , checkbox: 'cafe-field-checkbox-publish.html'
          , number: 'cafe-field-number-publish.html'
          , paragraph: 'cafe-format-paragraph-publish.html'
          , heading3: 'cafe-format-heading3-publish.html'
          , heading4: 'cafe-format-heading4-publish.html'
          , spacing: 'cafe-format-spacing-publish.html'
      };

      var templateUrl = baseUrl + templateMap[contentType];
      templateLoader = $http.get(templateUrl, {cache: $templateCache});

      return templateLoader;

  }

  var linker = function($scope, $element, $attrs) {

      var loader = getTemplate($scope.field.meta.type.value);

      var promise = loader.success(function(html) { 
          $element.html(html);
      }).then(function (response) {
          $element.replaceWith($compile($element.html())($scope));
      });

  }

  return {
  	restrict: 'AE'
  	, replace: true
    , scope: true
  	, link: linker
  };

});


