exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    var strs = [str];
    return function(str) {
      return strs.push(str) && strs.join(', ');
    };
  },

  makeClosures : function(arr, fn) {
    return arr.map(function(num) {
      return function() { return fn(num); };
    });
  },

  partial : function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments : function(fn) {
    return [].reduce.call(arguments, function(a, b) { return a + b; }, 0);
  },

  callIt : function(fn) {
    return fn.apply(this, [].slice.call(arguments, 1));
  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
