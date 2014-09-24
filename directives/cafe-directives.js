//directive which pulls all common fields for the editing menu
cafeForm.directive('cafeEditCommon', function cafeFieldDirective() {
  return {
    restrict: 'AE'
    , replace: true
    , templateUrl: 'templates/function/cafe-edit-common.html'
  };
});


//directive which pull JUST the conditional fields in the editing menu
cafeForm.directive('cafeEditConditional', function cafeFieldDirective() {
  return {
    restrict: 'AE'
    , replace: true
    , templateUrl: 'templates/function/cafe-edit-conditional.html'
  };
});


//directive for the field control "edit, sort, delete"
cafeForm.directive('cafeEditControls', function cafeFieldDirective() {
  return {
    restrict: 'AE'
    , replace: true
    , templateUrl: 'templates/function/cafe-edit-controls.html'
  };
});


//directive that determines which field is being added to form and pull in the correct template
//this is only for the left side - editing
cafeForm.directive('cafeFieldEdit', function cafeFieldDirective($compile, $http, $templateCache) {
	var getTemplate = function(contentType) {
        var templateLoader,
        baseUrl = 'templates/edit/',
        templateMap = {
            text: 'cafe-field-text-edit.html'
            , email: 'cafe-field-email-edit.html'
            , select: 'cafe-field-select-edit.html'
            , textarea: 'cafe-field-textarea-edit.html'
            , radio: 'cafe-field-radio-edit.html'
            , checkbox: 'cafe-field-checkbox-edit.html'
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


//directive that determines which field is being added to form and pull in the correct template
//this is only for the right side - publishing
cafeFormPublish.directive('cafeFieldPublish', function cafeFieldDirective($compile, $http, $templateCache) {

	var getTemplate = function(contentType) {
      var templateLoader,
      baseUrl = 'templates/publish/',
      templateMap = {
          text: 'cafe-field-text-publish.html'
          , email: 'cafe-field-email-publish.html'
          , select: 'cafe-field-select-publish.html'
          , textarea: 'cafe-field-textarea-publish.html'
          , radio: 'cafe-field-radio-publish.html'
          , checkbox: 'cafe-field-checkbox-publish.html'
      };

      var templateUrl = baseUrl + templateMap[contentType];
      templateLoader = $http.get(templateUrl, {cache: $templateCache});

      return templateLoader;

  }

  var linker = function($scope, $element, $attrs) {

      var loader = getTemplate($scope.field.meta.type.value);

      var promise = loader.success(function(html) {
          var _appendHTML = "<div class=\"fart\">"+html+"</div>";
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


