exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(a, b) { return a + b; }, 0);
  },

  remove : function(arr, item) {
    return arr.filter(function(el) { return el != item; });
  },

  removeWithoutCopy : function(arr, item) {
    return this.findAllOccurrences.apply(this, arguments).forEach(function(index) { arr.splice(index, 1); }) || arr;
  },

  append : function(arr, item) {
    return arr.push(item) && arr;
  },

  truncate : function(arr) {
    return arr.pop() && arr;
  },

  prepend : function(arr, item) {
    return arr.unshift(item) && arr;
  },

  curtail : function(arr) {
    return arr.shift() && arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    return arr.splice(index, 0, item) && arr;
  },

  count : function(arr, item) {
    return arr.filter(function(el) { return el === item; }).length
  },

  duplicates : function(arr) {
    var record = {};
    return arr.filter(function(item) {
      var count = record[item] = (record[item] || 0) + 1;
      return count === 2 && item;
    });
  },

  square : function(arr) {
    return arr.map(function(item) {
      return item * item;
    });
  },

  findAllOccurrences : function(arr, target) {
    var occurences = [];
    arr.forEach(function(el, i) { el === target && occurences.push(i); });
    return occurences;
  }
};
