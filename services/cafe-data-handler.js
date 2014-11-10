angular.module('Cafe').factory('CafeDataHandler', ['CafeFieldDefinitions', 'CafeListClass', function(CafeFieldDefinitions, CafeListClass) {

  function DataHandler() {
    this.definitions    = new CafeFieldDefinitions(); 
    this.fields         = new CafeListClass();
  };

  DataHandler.prototype.removeSection = function(index) {
    console.log(index);
    this.fields.removeAtIndex(index);
    console.log(this.fields.store);
    // this.fields.store.splice(index, 1);
  };

  DataHandler.prototype.addSection = function(type) {
    var _definition = new CafeFieldDefinitions();
    // this.fields.store.push(_definition.list[type]);
    this.fields.append(_definition.list[type]);
  };

  DataHandler.prototype.moveTo = function(element, target) {
    console.log(element,target);
    var el = this.fields.store[element];
    this.removeSection(element);
    this.fields.insertAtIndex(el, target);
  };

  DataHandler.prototype.moveSection = function(origin, destination) {
    var temp = this.fields.store[destination];
    this.fields.store[destination] = this.fields.store[origin];
    this.fields.store[origin] = temp;

    angular.forEach(this.fields.store, function(value, key) {
      if(value.meta.conditional.whichField == 'fields['+origin+'].content.value.value') {
        value.meta.conditional.whichField = 'fields['+destination+'].content.value.value';
      }
    });
  };

  return new DataHandler;

}]);