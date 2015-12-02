exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(resolve) { resolve(value); });
  },

  manipulateRemoteData : function(url) {
    return new Promise(function(resolve) {
      fetch(url)
        .then(function(res) { return res.json(); })
        .then(function(data) { resolve(data.people.map(function(person) { return person.name; }).sort()); });
    });
  }
};
