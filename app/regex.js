exports = (typeof window === 'undefined') ? global : window;

var VOWELS = ['a', 'e', 'i', 'o', 'u'];
var RE_PHONE = /^(?:\d{3}-){2}\d{4}$/;
var RE_DIGITS = /^\D*(\d{3}).*/;

exports.regexAnswers = {
  containsNumber : function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter : function(str) {

  },

  endsWithVowel : function(str) {
    return VOWELS.indexOf(str.replace(/^.*(.$)/, '$1')) > -1;
  },

  captureThreeNumbers : function(str) {
    var sequence = str.replace(RE_DIGITS, '$1');
    return sequence === str ? false : sequence;
  },

  matchesPattern : function(str) {
    return RE_PHONE.test(str);
  },

  isUSD : function(str) {

  }
};
