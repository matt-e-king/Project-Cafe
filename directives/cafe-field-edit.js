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
