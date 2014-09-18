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

