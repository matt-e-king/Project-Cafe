angular.module('Cafe').factory('CafeDataHandler', ['CafeFieldDefinitions', function(CafeFieldDefinitions) {

  function DataHandler() {
    this.fields       = [];
    this.definitions  = new CafeFieldDefinitions(); 
  };

  DataHandler.prototype.removeSection = function(index) {
    this.fields.splice(index, 1);
  };

  DataHandler.prototype.addSection = function(type) {
    var _definition = new CafeFieldDefinitions();
    this.fields.push(_definition.list[type]);
  };

  DataHandler.prototype.moveSection = function(origin, destination) {
    var temp = this.fields[destination];
    this.fields[destination] = this.fields[origin];
    this.fields[origin] = temp;

    angular.forEach(this.fields, function(value, key) {
      if(value.meta.conditional.whichField == 'fields['+origin+'].content.value.value') {
        value.meta.conditional.whichField = 'fields['+destination+'].content.value.value';
      }
    });
  };

  return new DataHandler;

}]);