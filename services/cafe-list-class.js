angular.module('Cafe').factory('CafeListClass', function() {

	function List() {
		this.listSize = 0;
		this.pos = 0;
		this.store = [];
	};

	List.prototype.append = function(element) {
		this.store[this.listSize++] = element;
		this.pos++;
	};

	List.prototype.find = function(element) {
		for (var i = 0, l = this.store.length; i < l; ++i) {
			if(this.store[i] == element) {
				return i;
			}
		}
		return -1;
	};

	List.prototype.remove = function(element) {
		var foundAt = this.find(element);
		if(foundAt > -1) {
			this.store.splice(foundAt, 1);
			--this.listSize;
			if(this.pos > this.listSize-1) {
				this.end();
			}
			return true;
		}
		return false;
	};

	List.prototype.removeAtIndex = function(index) {
		if(index >= 0 && index < this.listSize) {
			this.store.splice(index, 1);
			--this.listSize;
			if(this.pos > this.listSize-1) {
				this.end();
			}
			return true;
		}
		return false;
	}

	List.prototype.insert = function(element, after) {
		var insertPos = this.find(after);
		if(insertPos > -1) {
			this.store.splice(insertPos+1, 0, element);
			++this.listSize;
			return true;
		}
		return false;
	};

	List.prototype.insertAtIndex = function(element, target) {
		this.store.splice(target+1, 0, element);
		++this.listSize;
		return true;
	};

	List.prototype.length = function() {
		return this.listSize;
	}

	List.prototype.toString = function() {
		return this.store;
	};

	List.prototype.clear = function() {
		delete this.store;
		this.store = [];
		this.listSize = this.pos = 0;
	};

	List.prototype.contains = function(contains) {
		for(var i = 0, l = this.store.length; i < l; ++i) {
			if(this.store[i] === element) {
				return true;
			}
			return false;
		}
	};

	List.prototype.front = function() {
		this.pos = 0;
	};

	List.prototype.end = function() {
		this.pos = this.listSize -1;
	};

	List.prototype.prev = function() {
		if(this.pos > 0) {
			--this.pos;
			return this.getElement();
		}
	};

	List.prototype.next = function() {
		if(this.pos < this.listSize - 1) {
			++this.pos;
			return this.getElement();
		}
	};

	List.prototype.currPos = function() {
		return this.pos;
	};

	List.prototype.moveTo = function(position) {
		this.pos = position;
	};

	List.prototype.getElement = function() {
		return this.store[this.pos];
	};


	return List;

});