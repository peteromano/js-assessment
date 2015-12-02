exports = (typeof window === 'undefined') ? global : window;

var FIZZ_BUZZ = 'fizzbuzz';

var control = {
  fizz: 3,
  buzz: 5
};

function divisible(num, divider) {
  return num % divider === 0;
}

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number

    if(divisible(num, control.fizz * control.buzz)) {
      return FIZZ_BUZZ;
    } else {
      for(var p in control) {
        if(divisible(num, control[p])) {
          return p;
        }
      }
    }

    return isNaN(1*num) ? false : num;
  }
};
