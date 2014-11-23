'use strict';

var notifications = require('./notifications');
var list = require('./list');

list(function(e, data) {
  data = data.filter(function(show){
    return show.stillWatching;
  });

});

notifications();
